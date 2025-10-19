import type { Task } from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';

type Props = {
  todoItems: Task[];
  onEditTask: (id: string, newTask: string) => void;
  onDeleteTask: (id: string) => void;
};

export default function TodoList({
  todoItems,
  onEditTask,
  onDeleteTask,
}: Props) {
  return (
    <ul>
      {todoItems.map((item, index) => (
        <li key={index}>
          <TodoItem
            task={item}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}
