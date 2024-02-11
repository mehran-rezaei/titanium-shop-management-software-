import Link from "next/link";

function Index({ name, url }) {
  return (
    <div className=" px-15 py-5 text-white uppercase border-[2px] bg-[#00A5A5] hover:bg-[#00A5A5]/40 transition-all duration-300 border-[#00A5A5] flex justify-center items-center">
      <Link className="w-full h-full " href={url}>
        {name}
      </Link>
    </div>
  );
}

export default Index;
