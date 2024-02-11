function Index({ SelectedItemId, columns, data, onClick }) {
  return (
    <>
      <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
        <table className="relative w-full text-sm text-left text-typography ">
          <thead className="sticky top-0 text-xs  uppercase bg-tableHeader">
            <tr>
              {columns.map((column, index) => (
                <th key={index} scope="col" className="px-2 py-3">
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                onClick={() => onClick(item)}
                key={index}
                className={`${
                  SelectedItemId == item.id
                    ? "bg-blue-700"
                    : "bg-tableBody dark:bg-gray-800"
                }  border-b    hover:bg-tableRowhover`}
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-2 py-4 ">
                    {Array.isArray(item[column.dataKey]) ? (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Index;
