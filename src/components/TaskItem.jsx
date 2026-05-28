import { useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { motion } from 'framer-motion';
import './TaskItem.css';

export default function TaskItem({ task, index, onToggle, onDelete, onEdit, isDragDisabled }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editTitle.trim() && editTitle !== task.title) {
      onEdit({ title: editTitle.trim() });
    } else {
      setEditTitle(task.title);
    }
    setIsEditing(false);
  };

  const formattedDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString(undefined, {
    month: 'short', day: 'numeric'
  }) : null;

  return (
    <Draggable draggableId={task.id} index={index} isDragDisabled={isDragDisabled}>
      {(provided, snapshot) => (
        <div
          className={`task-item glass-panel ${task.completed ? 'completed' : ''} ${snapshot.isDragging ? 'dragging' : ''}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          {/* Drag Handle */}
          {!isDragDisabled && (
            <div className="drag-handle" {...provided.dragHandleProps}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2">
                <circle cx="9" cy="12" r="1"></circle>
                <circle cx="9" cy="5" r="1"></circle>
                <circle cx="9" cy="19" r="1"></circle>
                <circle cx="15" cy="12" r="1"></circle>
                <circle cx="15" cy="5" r="1"></circle>
                <circle cx="15" cy="19" r="1"></circle>
              </svg>
            </div>
          )}

          <label className="checkbox-container">
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={onToggle} 
            />
            <span className="checkmark"></span>
          </label>

          <div className="task-content">
            {isEditing ? (
              <form onSubmit={handleEditSubmit} className="edit-form">
                <input
                  type="text"
                  className="input edit-input"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  onBlur={handleEditSubmit}
                  autoFocus
                />
              </form>
            ) : (
              <span className="task-title" onDoubleClick={() => setIsEditing(true)}>
                {task.title}
              </span>
            )}
            
            <div className="task-meta">
              <span className={`badge badge-${task.category}`}>{task.category}</span>
              {formattedDate && (
                <span className="date-badge">
                  {formattedDate}
                </span>
              )}
            </div>
          </div>

          <div className="task-actions">
            <button 
              type="button" 
              className="btn-icon danger" 
              onClick={(e) => {
                e.stopPropagation();
                console.log('Delete button clicked for task:', task.id);
                onDelete();
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}
