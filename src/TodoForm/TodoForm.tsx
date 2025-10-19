import { Plus } from 'lucide-react';
import TodoItem from '../TodoItem/TodoItem';
import s from './TodoForm.module.scss';

export default function TodoForm() {
  return (
    <div className={s.form}>
      <h1>Todo List</h1>
      <div className={s.items}>
        <TodoItem taskName="task1" />
        <TodoItem taskName="task1" />
      </div>
      <div className={s.addContainer}>
        <Plus size={30} className={s.addIcon} />
        <span className={s.tooltip}>Add a new task</span>
      </div>
    </div>
  );
}
