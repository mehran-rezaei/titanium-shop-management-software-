import { Chip, Stack } from "@mui/material";
import CustomInput from "../../../../../../Common/CustomInput";
import { blue, red } from "@mui/material/colors";

function Index() {
  const handleNameChange = (e) => {
    console.log("");
  };
  const handleDelete = (e) => {
    console.log("");
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 items-end">
        <div className="w-4/5">
          <CustomInput
            label=""
            value=""
            type={"number"}
            onChange={handleNameChange}
          />
        </div>
        <button className="px-2 h-8  text-white text-xs flex justify-center items-center bg-[#00A5A5] rounded-md">
          Add
        </button>
      </div>
      <div className="w-full h-2/3 ">
        <Stack
          
          direction="row"
          spacing={1}
        >
          <Chip
            sx={{ color: "white", bgcolor: "#00A5A5" }}
            label="Deletable"
            onDelete={handleDelete}
          />
        </Stack>
      </div>
    </div>
  );
}

export default Index;
