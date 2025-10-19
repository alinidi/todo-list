import type { Task } from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';

type Props = {
  todoItems: Task[];
  onEditTask: (id: string, newTask: string) => void;
};

export default function TodoList({ todoItems, onEditTask }: Props) {
  return (
    <ul>
      {todoItems.map((item, index) => (
        <li key={index}>
          <TodoItem task={item} onEditTask={onEditTask} />
        </li>
      ))}
    </ul>
  );
}
