import { Pencil, Trash2 } from 'lucide-react';
import s from './TodoItem.module.scss';
import type { Task } from '../TodoForm/TodoForm';
import { useState } from 'react';

type Props = {
  task: Task;
  onEditTask: (id: string, newTask: string) => void;
  onDeleteTask: (id: string) => void;
  handleCheckbox: (id: string) => void;
};

export default function TodoItem({
  task,
  onEditTask,
  onDeleteTask,
  handleCheckbox,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  function handleEdit(): void {
    if (isEditing) {
      onEditTask(task.id, editText);
    }
    setIsEditing(!isEditing);
  }

  function handleKeyDown(e: React.KeyboardEvent): void {
    if (e.key === 'Enter') {
      handleEdit();
    }
    if (e.key === 'Escape') {
      setEditText(task.text);
      setIsEditing(false);
    }
  }

  return (
    <div className={s.item}>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={e => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleEdit}
          autoFocus
          className={s.editInput}
        />
      ) : (
        <p className={`${s.taskName} ${task.completed ? s.completed : ''}`}>
          {task.text}
        </p>
      )}
      <div className={s.icons}>
        <Pencil size={20} className={s.icon} onClick={handleEdit} />
        <Trash2
          size={20}
          className={s.icon}
          onClick={() => onDeleteTask(task.id)}
        />
        <input
          type="checkbox"
          onChange={() => handleCheckbox(task.id)}
          checked={task.completed}
        />
      </div>
    </div>
  );
}
