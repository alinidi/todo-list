type Props = {
  todoItems: string[];
};

export default function TodoList({ todoItems }: Props) {
  return <div>{todoItems}</div>;
}
