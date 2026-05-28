import { useState } from 'react';
import './TaskForm.css';

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('work');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({
      id: crypto.randomUUID(),
      title: title.trim(),
      category,
      dueDate,
      completed: false,
      createdAt: new Date().toISOString()
    });

    setTitle('');
    setDueDate('');
    // keep category as is
  };

  return (
    <form className="task-form glass-panel animate-slide-in" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="input-group flex-grow">
          <input
            type="text"
            className="input"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        </div>
        
        <div className="input-group">
          <select 
            className="select" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="shopping">Shopping</option>
          </select>
        </div>

        <div className="input-group">
          <input
            type="date"
            className="input"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-add" disabled={!title.trim()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add
        </button>
      </div>
    </form>
  );
}
