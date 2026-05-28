import { useState, useMemo } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useTasks } from '../hooks/useTasks';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import Filters from '../components/Filters';
import { DragDropContext } from '@hello-pangea/dnd';

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const { tasks, loading, addTask, updateTask, deleteTask, reorderTasks } = useTasks(currentUser?.uid);
  
  const [filter, setFilter] = useState('all');
  const [category, setCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortType, setSortType] = useState('manual'); // manual, dateAsc, dateDesc

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    if (sortType !== 'manual') return; // Only allow drag/drop in manual sort mode

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Reassign order fields based on new array
    const updatedItems = items.map((item, index) => ({
      ...item,
      order: index
    }));

    reorderTasks(updatedItems);
  };

  const filteredAndSortedTasks = useMemo(() => {
    let result = tasks;

    // Filter by search
    if (searchQuery) {
      result = result.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Filter by status
    if (filter === 'active') result = result.filter(t => !t.completed);
    if (filter === 'completed') result = result.filter(t => t.completed);

    // Filter by category
    if (category !== 'all') result = result.filter(t => t.category === category);

    // Sort
    if (sortType === 'dateAsc') {
      result = [...result].sort((a, b) => new Date(a.dueDate || '9999') - new Date(b.dueDate || '9999'));
    } else if (sortType === 'dateDesc') {
      result = [...result].sort((a, b) => new Date(b.dueDate || '1970') - new Date(a.dueDate || '1970'));
    }
    // 'manual' keeps the array order from Firestore (which is ordered by 'order' field)

    return result;
  }, [tasks, filter, category, searchQuery, sortType]);

  const counts = useMemo(() => {
    const base = searchQuery ? tasks.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase())) : tasks;
    return {
      all: base.filter(t => category === 'all' || t.category === category).length,
      active: base.filter(t => !t.completed && (category === 'all' || t.category === category)).length,
      completed: base.filter(t => t.completed && (category === 'all' || t.category === category)).length,
    };
  }, [tasks, category, searchQuery]);

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '4rem' }}>Loading tasks...</div>;
  }

  return (
    <div className="dashboard">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 className="title" style={{ marginBottom: 0 }}>Smart Todo</h1>
        <button onClick={logout} className="btn btn-danger" style={{ padding: '0.4rem 1rem' }}>Logout</button>
      </div>
      
      <TaskForm onAddTask={addTask} />
      
      {tasks.length > 0 && (
        <Filters 
          currentFilter={filter} 
          setFilter={setFilter} 
          currentCategory={category} 
          setCategory={setCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortType={sortType}
          setSortType={setSortType}
          counts={counts}
        />
      )}

      <DragDropContext onDragEnd={handleDragEnd}>
        <TaskList 
          tasks={filteredAndSortedTasks} 
          onToggle={(id, current) => updateTask(id, { completed: !current })} 
          onDelete={deleteTask}
          onEdit={(id, updates) => updateTask(id, updates)}
          isDragDisabled={sortType !== 'manual'}
        />
      </DragDropContext>
    </div>
  );
}
