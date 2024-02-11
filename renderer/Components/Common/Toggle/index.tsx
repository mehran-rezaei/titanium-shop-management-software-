function Index({ label, value, onChange }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-[#9E9E9E] peer-focus:outline-none    rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#00A5A5]"></div>
      <span className="ml-3 text-sm font-medium text-white">{label}</span>
    </label>
  );
}

export default Index;
