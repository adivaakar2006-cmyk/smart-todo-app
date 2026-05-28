import { useState, useEffect } from 'react';
import { db } from '../services/firebaseSetup';
import { 
  collection, 
  query, 
  where, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc,
  serverTimestamp,
  orderBy
} from 'firebase/firestore';
import toast from 'react-hot-toast';

export function useTasks(userId) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setTasks([]);
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, 'tasks'),
      where('userId', '==', userId),
      orderBy('order', 'asc') // Use an order field for drag and drop
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const tasksData = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));
      setTasks(tasksData);
      setLoading(false);
    }, (error) => {
      console.error("Firestore error:", error);
      // Fallback if index is missing for orderBy
      if (error.message.includes('index')) {
        toast.error("Waiting for Firestore index to build...");
        // Fallback query without orderBy
        const fallbackQ = query(collection(db, 'tasks'), where('userId', '==', userId));
        onSnapshot(fallbackQ, (snap) => {
          setTasks(snap.docs.map(d => ({ ...d.data(), id: d.id })));
          setLoading(false);
        });
      }
    });

    return unsubscribe;
  }, [userId]);

  const addTask = async (taskData) => {
    try {
      // Calculate next order (put at bottom)
      const nextOrder = tasks.length > 0 ? Math.max(...tasks.map(t => t.order || 0)) + 1 : 0;
      
      await addDoc(collection(db, 'tasks'), {
        ...taskData,
        userId,
        order: nextOrder,
        createdAt: serverTimestamp()
      });
      toast.success('Task Added');
    } catch (error) {
      toast.error('Failed to add task: ' + error.message);
    }
  };

  const updateTask = async (id, updates) => {
    try {
      const taskRef = doc(db, 'tasks', id);
      await updateDoc(taskRef, updates);
    } catch (error) {
      toast.error('Failed to update task: ' + error.message);
    }
  };

  const deleteTask = async (id) => {
    console.log('Attempting to delete task with ID:', id);
    try {
      if (!id) {
        throw new Error('Task ID is undefined!');
      }
      const taskRef = doc(db, 'tasks', id);
      await deleteDoc(taskRef);
      console.log('Successfully deleted task', id);
      toast.success('Task Deleted');
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Failed to delete task: ' + error.message);
    }
  };

  const reorderTasks = async (reorderedTasks) => {
    // Optimistic update
    setTasks(reorderedTasks);
    
    // Batch update in background
    try {
      // Simple loop update for ease, though batch is better for production
      // We will just update the order field for all changed tasks
      reorderedTasks.forEach((task, index) => {
        if (task.order !== index) {
          updateDoc(doc(db, 'tasks', task.id), { order: index });
        }
      });
    } catch (error) {
      console.error('Reorder error', error);
      toast.error('Failed to save reorder');
    }
  };

  return { tasks, loading, addTask, updateTask, deleteTask, reorderTasks };
}
