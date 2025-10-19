import { Pencil, Trash2 } from 'lucide-react';
import s from './TodoItem.module.scss';

type Props = {
  taskName: string;
};

export default function TodoItem({ taskName }: Props) {
  return (
    <div className={s.item}>
      <p className={s.taskName}>{taskName}</p>
      <div className={s.icons}>
        <Pencil size={20} className={s.icon} />
        <Trash2 size={20} className={s.icon} />
        <input type="checkbox" />
      </div>
    </div>
  );
}
