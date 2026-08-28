import { SubHeading } from "../SubHeading";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";

export function TodoGroup({ items, heading }) {
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      <TodoList>
        {items.map(function (t) {
          return <TodoItem key={t.id} item={t} />
        })}
      </TodoList>
    </>
  );
}