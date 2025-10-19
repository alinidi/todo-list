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
}: Props) {
  return (
    <div>
      <ul>
        {todoItems.map(item => (
          <li key={item.id}>
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
