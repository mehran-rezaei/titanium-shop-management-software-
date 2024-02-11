import { MenuItem } from "@mui/material";

function Index({color,name}) {
  return (
    <MenuItem value={10}>
      <div className="flex gap-3 items-center">
        <div className={`bg-${color} w-5 h-5`}></div>
        <p className="text-sm">{name}</p>
      </div>
    </MenuItem>
  );
}

export default Index;
