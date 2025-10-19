import Filter from '../Filter/Filter';
import type { Task } from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';

type Props = {
  todoItems: Task[];
  onEditTask: (id: string, newTask: string) => void;
  onDeleteTask: (id: string) => void;
  handleCheckbox: (id: string) => void;
  handleFilter: (filterType: 'all' | 'active' | 'completed') => void;
  currentFilter: string;
};

export default function TodoList({
  todoItems,
  onEditTask,
  onDeleteTask,
  handleCheckbox,
  handleFilter,
  currentFilter,
}: Props) {
  return (
    <div>
      <Filter handleFilter={handleFilter} currentFilter={currentFilter} />
      <ul>
        {todoItems.map((item, index) => (
          <li key={index}>
            <TodoItem
              task={item}
              onEditTask={onEditTask}
              onDeleteTask={onDeleteTask}
              handleCheckbox={handleCheckbox}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
