import Documents_navbar from "./Documents_navbar";

function Documents() {
  return (
    <div className=" w-full h-full grid grid-rows-6">
      <div className="row-span-1 ">
        <Documents_navbar />
      </div>
      <div className="row-span-5 grid grid-cols-12 pl-2 pb-0  gap-2">
        <div className="col-span-12 border border-[#00A5A5] rounded-tl-3xl"></div>
      </div>
    </div>
  );
}

export default Documents;
