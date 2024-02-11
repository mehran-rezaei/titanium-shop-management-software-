import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material";

function Index({  value, listData, onChange, showProp }) {
  const Cssdropdown = styled(FormControl)({
    Select: { color: "white" },
    "& label.Mui-focused": {
      color: "#00cecbc4",
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
  console.log(onChange);
 
  return (
    <div className="flex flex-col gap-3 ">
      <Cssdropdown fullWidth>
        <Select
        className="text-white h-7 w-48 pt-0 text-[13px] "
          sx={{ color: "white" }}
          value={value}
        //   size="small"
          onChange={onChange}
        >
          {listData.map((item) => (
            <MenuItem value={item.id}>{item[showProp]}</MenuItem>
          ))}
        </Select>
      </Cssdropdown>
    </div>
  );
}

export default Index;
