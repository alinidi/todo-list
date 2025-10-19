import { useEffect, useState } from 'react';
import TodoList from '../TodoList/TodoList';
import s from './TodoForm.module.scss';
import Filter from '../Filter/Filter';

export type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export default function TodoForm() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      setTasks(parsedTasks);
    }
  }, []);

  function addTask(): void {
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

  function editTask(id: string, newText: string): void {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  function deleteTask(id: string): void {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  function handleCheckbox(id: string): void {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  function handleFilter(filterType: 'all' | 'active' | 'completed'): void {
    setFilter(filterType);
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const activeTasksCount = tasks.filter(task => !task.completed).length;

  return (
    <div className={s.form}>
      <div className={s.header}>
        <h1>Todo List</h1>
        <p>Active tasks: {activeTasksCount}</p>
      </div>
      <Filter handleFilter={handleFilter} currentFilter={filter} />
      <TodoList
        todoItems={filteredTasks}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
        handleCheckbox={handleCheckbox}
        handleFilter={handleFilter}
        currentFilter={filter}
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
