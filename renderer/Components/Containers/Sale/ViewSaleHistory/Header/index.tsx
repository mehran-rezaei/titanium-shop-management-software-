import { FormControl, InputLabel, MenuItem, Select, styled } from "@mui/material";

const Cssdropdown = styled(FormControl)({
    Select: { color: "white" },
    "& label.Mui-focused": {
      color: "#00cecbc4",
      borderBottomColor:"#00cecbc4"
    },
    "& label": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#00cecbc4",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#00cecbc4",
      },
      "&:hover fieldset": {
        borderColor: "#00cecbc4",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#00cecbc4",
      },
      "& .MuiInputBase-root": {
        color: "white",
      },
    },
    "& fieldset": {
      Color: "white",
    },
  });
function Index() {
  return (
    <div className="flex ">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Document Number"
          value={""}
          onChange={() => {}}
          style={{ backgroundColor: "transparent" }}
          className="border-b px-2 py-2 text-xs text-white transition border-[#00A5A5] hover:border-[#00A5A5]  "
        />
        <Cssdropdown variant="standard" sx={{ minWidth: 120 }}>
          <Select size="small" sx={{borderColor:"#00A5A5"}} value={""} onChange={() => {}}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Cssdropdown>
      </div>
    </div>
  );
}

export default Index;
