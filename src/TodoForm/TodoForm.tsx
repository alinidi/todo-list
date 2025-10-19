import { useEffect, useState } from 'react';
import TodoList from '../TodoList/TodoList';
import s from './TodoForm.module.scss';

export type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export default function TodoForm() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      setTasks(parsedTasks);
    }
  }, []);

  function addTask() {
    if (newTask.trim() !== '') {
      const task: Task = {
        id: Date.now().toString(),
        text: newTask,
        completed: false,
      };
      const updatedTasks = [...tasks, task];
      setTasks(updatedTasks);
      setNewTask('');
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  }

  function editTask(id: string, newText: string) {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    );
    if (updatedTasks) {
      setTasks(updatedTasks);
    }
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  function deleteTask(id: string) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  function handleCheckbox(id: string) {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  return (
    <div className={s.form}>
      <h1>Todo List</h1>
      <TodoList
        todoItems={tasks}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
        handleCheckbox={handleCheckbox}
      />
      <div className={s.addContainer}>
        <input
          type="text"
          className={s.newTask}
          placeholder="Добавить новое задание"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Добавить</button>
      </div>
    </div>
  );
}
