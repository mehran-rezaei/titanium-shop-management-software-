import List_item from "../list_items";

function List({ state }: any) {
  return (
    <div className="h-[70%] overflow-y-scroll flex w-full border-b  flex-col gap-2  border-[#00CEC9]">
      {state.map((item: any, index: any) => (
        <List_item index={index + 1} data={item} />
      ))}
    </div>
  );
}

export default List;
