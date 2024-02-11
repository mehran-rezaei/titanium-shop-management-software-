import Link from "next/link";
function Content() {
  return (
    <div className=" w-80 bg-[#302E2E] text-[#FFFFFF] p-5 h-full flex flex-col gap-8">
      <Link href="/Management">Management</Link>
      <div>View sales history</div>
      <Link href="/CashInOut">Cash in/out</Link>
      <Link href="/EndOfDay">End of day</Link>
      {/* <div>End of day</div>     */}
    </div>
  );
}

export default Content;
