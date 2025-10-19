import TodoItem from '../TodoItem/TodoItem';

type Props = {
  todoItems: string[];
};

export default function TodoList({ todoItems }: Props) {
  return (
    <ul>
      {todoItems.map((item, index) => (
        <li key={index}>
          <TodoItem taskName={item} />
        </li>
      ))}
    </ul>
  );
}
