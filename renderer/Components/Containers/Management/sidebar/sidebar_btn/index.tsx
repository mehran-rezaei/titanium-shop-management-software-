import usePageStore from "../../../../../store/pageStore";

function Sidebar_btn({ active_id, id, content }: any) {
  const selectedPage: number = usePageStore((state) => state.selectedPage);
  const selectPage = usePageStore((state) => state.selectPage);

  const handleChildClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Prevent the click event from propagating to the parent div
    event.stopPropagation();

    // Handle the click for child divs here
    const clickedId = Number(event.currentTarget.dataset.id);
    if (!isNaN(clickedId)) {
      selectPage(clickedId);
    }
  };

  return (
    <div onClick={() => selectPage(id)} className="relative cursor-pointer">
      <div
        onClick={handleChildClick}
        data-id={id - 1}
        className={`${
          selectedPage === id
            ? "h-[40px] border-b border-r  border-[#03FBF5]/40 rounded-br-3xl w-full "
            : ""
        } absolute left z-20 bottom-full`}
      ></div>
      <div
        className={`${
          selectedPage === id
            ? "bg-gradient-to-r border-none  liner_gradiant  "
            : ""
        } ${
          selectedPage + 1 === id
            ? ""
            : selectedPage - 1 === id
            ? ""
            : "border-r border-[#00CEC9]/40 "
        }  h-[40px]  pl-4  relative text-xs md:text-sm lg:text-sm xl:text-base flex items-center`}
      >
        {content}
      </div>
      <div
        onClick={() => selectPage(id + 1)}
        className={`${
          selectedPage === id
            ? "h-[40px]  border-t border-r border-[#03FBF5]/40 rounded-tr-3xl w-full "
            : ""
        } absolute left top-full`}
      ></div>
    </div>
  );
}

export default Sidebar_btn;
