import Enter_btn from "./Enter_btn";
import Number_btn from "./number_btn";

function Numpad() {
  return (
    <div className="w-full h-[50%]  grid  grid-cols-12 sm:gap-x-2 sm:gap-y-2  md:gap-x-2 md:gap-y-2 lg:gap-x-4 lg:gap-y-4 sm:p-2 md:p-4">
      <Number_btn content="1" />
      <Number_btn content="2" />
      <Number_btn content="3" />
      <Number_btn content="4" />
      <Number_btn content="5" />
      <Number_btn content="6" />
      <Number_btn content="7" />
      <Number_btn content="8" />
      <Number_btn content="9" />
      <Number_btn content="." />
      <Number_btn content="0" />
      <Number_btn content="00" />
      <Enter_btn />
      <Number_btn content="C" />

      <div className="border-[#00CEC9] border flex justify-center items-center col-span-12 rounded-lg ">
        <div className="border-r border-[#00CEC9]/40  basis-1/4 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="flex flex-col basis-1/2 ">
          <div className="border-b  border-[#00CEC9]/40  basis-1/2 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
        <div className="border-l border-[#00CEC9]/40  basis-1/4 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Numpad;
