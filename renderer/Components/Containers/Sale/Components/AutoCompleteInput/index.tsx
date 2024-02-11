import React, { useCallback, useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {
  GetAllProducts,
  GetBarcodeForSaleById,
} from "../../../../../dataservice/sales";
import { styled } from "@mui/material/styles";

const StyledAutocomplete = styled(Autocomplete)({
  "&.Mui-focused .MuiInputLabel-outlined": {
    color: "#00CEC9",
  },
  "& .MuiAutocomplete-inputRoot": {
    color: "white",

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#00CEC9",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#00CEC9",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#00CEC9",
    },
  },
});

function AutoCompleteInput({
  setData,
  Data,
  autocompleteRef,
  Qty_number,
}: any) {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [suggestions, setsuggestions] = useState([]);
  console.log(suggestions);

  useEffect(() => {
    if (inputValue !== "") {
      GetAllProducts(inputValue).then((Response) => {
        setsuggestions(Response.data);
        console.log(inputValue);
        console.log(Response.data);
      });
    }
  }, [inputValue]);

  const handleInputChange = (_, newInputValue) => {
    setInputValue(newInputValue);
  };

  const customFilterOptions = (options, { inputValue }) => {
    return options;
  };

  const handleSelect = (_, newValue) => {
    console.log(newValue);

    GetBarcodeForSaleById(newValue.barcodeId, Qty_number).then((Response) =>
      setData([...Data, Response.data[0]])
    );
    setInputValue(""); // Clear the input
  };
  const handleSuggestionClick = (item) => {
    console.log(item);

    // GetBarcodeForSaleById();
  };
  return (
    <StyledAutocomplete
      size="small"
      freeSolo
      ref={autocompleteRef}
      className="w-[500px] "
      value={selectedValue}
      onChange={handleSelect}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      options={suggestions}
      open={inputValue.length >= 1}
      getOptionLabel={(option: any) => option.productName} // Display the product name in the input
      filterOptions={customFilterOptions}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          InputLabelProps={{
            sx: { color: "white" },
          }}
        />
      )}
    />
  );
}

export default AutoCompleteInput;
