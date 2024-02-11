import React from "react";

function CustomInput({ label, type, value, onChange }) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm text-white">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={{ backgroundColor: "transparent" }}
        className="border rounded-md px-2 py-2  text-white transition border-[#00A5A5] hover:border-[#00A5A5]  "
      />
    </div>
  );
}

export default CustomInput;
