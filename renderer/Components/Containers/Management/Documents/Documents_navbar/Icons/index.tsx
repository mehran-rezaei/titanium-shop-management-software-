

function Index({ url, name }: any) {
  return (
    <div className="flex flex-col items-center">
      
      <img className="h-7 w-7" src={url} alt="" />
      <p className="text-sm">{name}</p>
    </div>
  );
}

export default Index;
