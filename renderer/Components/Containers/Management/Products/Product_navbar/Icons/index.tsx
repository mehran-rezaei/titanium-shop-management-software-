function Index({ url, name, activeInfo, handleClick }: any) {
  return (
    <div
      onClick={!activeInfo.isActive ? undefined : handleClick}
      className={`cursor-pointer flex flex-col items-center ${
        !activeInfo.isActive ? "opacity-30" : ""
      }`}
    >
      <img className="h-7 w-7" src={url} alt="" />
      <p className="text-sm text-typography">{name}</p>
    </div>
  );
}

export default Index;
