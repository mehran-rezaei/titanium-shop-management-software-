import * as React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { log } from "console";

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

function Tax({ listData, value, addTax, setProductProperty }) {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setProductProperty("taxList", value);
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="text-white">Taxes</div>
      <Cssdropdown fullWidth>
        <Select
          multiple
          size="small"
          fullWidth
          value={value}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) =>
            selected.map((item) => item.name).join(", ")
          }
          sx={{ color: "white" }}
        >
          {listData.map((item) => (
            <MenuItem key={item.taxId} value={item}>
              <Checkbox
                checked={value.some((tax) => tax.taxId === item.taxId)}
              />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </Cssdropdown>
    </div>
  );
}

export default Tax;
