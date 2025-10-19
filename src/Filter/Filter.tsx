import s from './Filter.module.scss';

export default function Filter() {
  return (
    <div className={s.filterWrapper}>
      <button>Все</button>
      <button>Активные</button>
      <button>Выполненные</button>
    </div>
  );
}
