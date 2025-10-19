import s from './Filter.module.scss';

type Props = {
  currentFilter: string;
  handleFilter: (filterType: 'all' | 'active' | 'completed') => void;
};

export default function Filter({ currentFilter, handleFilter }: Props) {
  return (
    <div className={s.filterWrapper}>
      <button
        className={`${currentFilter === 'all' ? s.active : ''}`}
        onClick={() => handleFilter('all')}
      >
        Все
      </button>
      <button
        className={`${currentFilter === 'active' ? s.active : ''}`}
        onClick={() => handleFilter('active')}
      >
        Активные
      </button>
      <button
        className={`${currentFilter === 'completed' ? s.active : ''}`}
        onClick={() => handleFilter('completed')}
      >
        Выполненные
      </button>
    </div>
  );
}
