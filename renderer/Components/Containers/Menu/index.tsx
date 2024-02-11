import Menu_btn from "./Menu_btn";
function Index() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="grid grid-cols-3 gap-10 mx-auto  items-center w-2/4 ">
        <Menu_btn url="/Management" name="Managment" />
        <Menu_btn url="/Management" name="View sales History" />
        <Menu_btn url="/Management" name="Cash in/out" />
        <Menu_btn url="/Management" name="End of Day" />
        <Menu_btn url="/Management" name="user info" />
        <Menu_btn url="/Sales" name="sale" />
      </div>
    </div>
  );
}

export default Index;
