import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material";
import MenuItem from "./MenuItem";

function Index({ label, value, onChange }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
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
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm text-white  ">{label}</label>
      <Cssdropdown fullWidth>
        <Select
          sx={{ color: "white" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          size="small"
          onChange={handleChange}
        >
          <MenuItem name="Orange" color="orange" />
          <MenuItem name="green" color="green" />
          <MenuItem name="Yellow" color="yellow" />
        </Select>
      </Cssdropdown>
    </div>
  );
}

export default Index;
