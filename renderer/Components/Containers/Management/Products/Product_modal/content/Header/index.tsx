function Index({ state, onClick }) {
  return (
    <div className=" h-[10%] flex items-center justify-evenly text-white">
      <p
        onClick={()=>onClick(1)}
        className={`text-xs cursor-pointer p-2 ${
          state == 1 ? "bg-[#00CEC966]  rounded-lg" : ""
        }`}
      >
        Details
      </p>
      <p
        onClick={()=>onClick(2)}
        className={`text-xs cursor-pointer p-2 ${
          state == 2 ? "bg-[#00CEC966]  rounded-lg" : ""
        }`}
      >
        Price &tax
      </p>
      <p
        onClick={()=>onClick(3)}
        className={`text-xs cursor-pointer p-2 ${
          state == 3 ? "bg-[#00CEC966]  rounded-lg" : ""
        }`}
      >
        Stock control
      </p>
      <p
        onClick={()=>onClick(4)}
        className={`text-xs cursor-pointer p-2 ${
          state == 4 ? "bg-[#00CEC966]  rounded-lg" : ""
        }`}
      >
        Comments
      </p>
      <p
        onClick={()=>onClick(5)}
        className={`text-xs cursor-pointer p-2 ${
          state == 5 ? "bg-[#00CEC966]  rounded-lg" : ""
        }`}
      >
        Image & color
      </p>
    </div>
  );
}

export default Index;
