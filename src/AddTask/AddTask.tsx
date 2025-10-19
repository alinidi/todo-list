import type { Dispatch, SetStateAction } from 'react';
import s from './AddTask.module.scss';

type Props = {
  newTask: string;
  setNewTask: Dispatch<SetStateAction<string>>;
  addTask: () => void;
};

export default function AddTask({ newTask, setNewTask, addTask }: Props) {
  return (
    <div className={s.addContainer}>
      <input
        type="text"
        placeholder="Добавить новое задание"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && addTask()}
      />
      <button onClick={addTask}>Добавить</button>
    </div>
  );
}
