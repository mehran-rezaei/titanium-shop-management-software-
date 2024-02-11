import { useState } from "react";

function Index({ SelectedItemId, columns, data, onClick }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleCheckbox = (item) => {
    const updatedSelectedItems = selectedItems.includes(item.id)
      ? selectedItems.filter((id) => id !== item.id)
      : [...selectedItems, item.id];

    setSelectedItems(updatedSelectedItems);
  };

  const handleQtyChange = (item, newQty) => {
    // Update the 'qty' value for the item in the 'data' array
    const updatedData = data.map((dataItem) => {
      if (dataItem.id === item.id) {
        return { ...dataItem, qty: newQty };
      }
      return dataItem;
    });

    // Call a function to handle the updated data (e.g., save to state or API)
    // For demonstration purposes, we'll just log the updated data.
    console.log(updatedData);
  };

  return (
    <>
      <div className="relative w-full overflow-x-auto shadow-md">
        <table className="relative w-full text-sm text-left text-typography ">
          <thead className="sticky top-0 text-xs uppercase bg-tableHeader">
            <tr>
              <th scope="col" className="px-2 py-3">
                <input
                  type="checkbox"
                  checked={selectedItems.length === data.length}
                  onChange={() => {
                    if (selectedItems.length === data.length) {
                      setSelectedItems([]);
                    } else {
                      setSelectedItems(data.map((item) => item.id));
                    }
                  }}
                />
              </th>
              {columns.map((column, index) => (
                <th key={index} scope="col" className="px-2 py-3">
                  {column.title}
                </th>
              ))}
              <th scope="col" className="px-2 py-3">
                Bin
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                onClick={() => onClick(item)}
                key={index}
                className={`${
                  SelectedItemId === item.id
                    ? "bg-blue-700"
                    : "bg-tableBody dark:bg-gray-800"
                }  border-b   hover:bg-tableRowhover `}
              >
                <td className="px-2 py-4">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleCheckbox(item)}
                  />
                </td>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-2 py-4">
                    {column.dataKey === "qty" ? (
                      <div className="flex items-center">
                        <button
                          onClick={() =>
                            handleQtyChange(item, parseInt(item.qty) - 1)
                          }
                          className="px-2 py-1 rounded-l border border-gray-300 hover:bg-tableRowhover "
                        >
                          -
                        </button>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={item.qty}
                          onChange={(e) =>
                            handleQtyChange(item, e.target.value)
                          }
                          className="w-10 py-1 px-2 border border-gray-300 text-center  bg-tableBody"
                        />
                        <button
                          onClick={() =>
                            handleQtyChange(item, parseInt(item.qty) + 1)
                          }
                          className="px-2 py-1 rounded-r border border-gray-300 hover:bg-tableRowhover dark:hover:bg-gray-700"
                        >
                          +
                        </button>
                      </div>
                    ) : Array.isArray(item[column.dataKey]) ? (
                      <ul>
                        {item[column.dataKey].map((arrayItem, arrayIndex) => (
                          <li key={arrayIndex}>{arrayItem}</li>
                        ))}
                      </ul>
                    ) : (
                      item[column.dataKey]
                    )}
                  </td>
                ))}
                <td className="px-2 py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer text-red-600 hover:text-red-800"
                    onClick={() => {
                      // Handle the click on the bin icon (e.g., delete the item)
                      console.log(`Deleted item with ID ${item.id}`);
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Index;
