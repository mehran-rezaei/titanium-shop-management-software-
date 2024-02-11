function Index({ state, onClick }) {
  return (
    <div className=" h-[10%] flex items-center justify-evenly text-white">
      <p
        onClick={() => onClick(1)}
        className={`text-xs cursor-pointer p-2 ${
          state == 1 ? "bg-[#00CEC966]  rounded-lg" : ""
        }`}
      >
        Details
      </p>
      <p
        onClick={() => onClick(2)}
        className={`text-xs cursor-pointer p-2 ${
          state == 2 ? "bg-[#00CEC966]  rounded-lg" : ""
        }`}
      >
        image & color
      </p>
      <p
        onClick={() => onClick(3)}
        className={`text-xs cursor-pointer p-2 ${
          state == 3 ? "bg-[#00CEC966]  rounded-lg" : ""
        }`}
      >
        Print Stations
      </p>
    </div>
  );
}

export default Index;
