import TaskItem from './TaskItem';
import { Droppable } from '@hello-pangea/dnd';
import { AnimatePresence } from 'framer-motion';

export default function TaskList({ tasks, onToggle, onDelete, onEdit, isDragDisabled }) {
  if (tasks.length === 0) {
    return (
      <div className="glass-panel" style={{ textAlign: 'center', padding: '3rem 2rem', opacity: 0.8 }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          No tasks found.
        </p>
      </div>
    );
  }

  return (
    <Droppable droppableId="task-list" isDropDisabled={isDragDisabled}>
      {(provided) => (
        <div 
          className="task-list" 
          {...provided.droppableProps} 
          ref={provided.innerRef}
        >
            {tasks.map((task, index) => (
              <TaskItem 
                key={task.id} 
                task={task} 
                index={index}
                onToggle={() => onToggle(task.id, task.completed)}
                onDelete={() => onDelete(task.id)}
                onEdit={(updates) => onEdit(task.id, updates)}
                isDragDisabled={isDragDisabled}
              />
            ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
