import React from "react";
import { NumericFormat } from "react-number-format";

function CustomInput({
  label,
  type,
  value,
  onChange,
  suffix,
  prefix,
  thousandSeparator,
}) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm text-white">{label}</label>
      <NumericFormat
        prefix={prefix}
        suffix={suffix}
        thousandSeparator={thousandSeparator}
        className="border rounded-md px-2 py-2 text-black transition border-[#00A5A5] hover:border-[#00A5A5]"
        onChange={onChange}
        value={value}
        // disabled={}
      />
    </div>
  );
}

export default CustomInput;
