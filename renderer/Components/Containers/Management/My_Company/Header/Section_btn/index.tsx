function Index({ name, activeSection, handleChangeSection,id }) {
  return (
    <div onClick={()=>{handleChangeSection(id)}} className={` ${activeSection ==id ?"bg-secondary":""} cursor-pointer h-full px-5 flex justify-center items-center text-sm`}>
      <p>{name}</p>
    </div>
  );
}

export default Index;
