import { useState } from "react";
import { RiFileExcel2Line } from "react-icons/ri";

const rows = [
  { field: "_id", dataType: "String" },
  { field: "name", dataType: "String" },
  { field: "email", dataType: "String" },
  { field: "movie_id", dataType: "Number" },
  { field: "text", dataType: "String" },
  { field: "date", dataType: "Date" },
];

function Schema() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = field => {
    if (selectedRows.includes(field)) {
      setSelectedRows(
        selectedRows.filter(selectedField => selectedField !== field),
      );
    } else {
      setSelectedRows([...selectedRows, field]);
    }
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(rows.map(({ field }) => field));
    }
    setSelectAll(!selectAll);
  };

  return (
    <div>
      <div className="flex items-center">
        <h3 className="text-text-800 font-bold flex-grow">Data Schema</h3>
        <RiFileExcel2Line className="flex-shrink-0" size="25" />
      </div>
      <table className="w-80 text-base text-center text-text-950 my-2 border-[1px]">
        <thead className="text-sm uppercase">
          <tr>
            <th className="border-[1px] border-black dark:border-white w-1/6">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAllChange}
                aria-labelledby="selectAllLabel"
              />
            </th>
            <th className="border-[1px] border-black dark:border-white w-2/5">
              Field
            </th>
            <th className="py-2 border-[1px] border-black dark:border-white w-2/5">
              Data Type
            </th>
          </tr>
        </thead>
        <tbody style={{ height: `${rows.length * 47}px` }}>
          {rows.map(({ field, dataType }) => (
            <tr key={field} className="h-10">
              <td className="py-2 border-[1px] border-black dark:border-white">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(field)}
                  onChange={() => handleCheckboxChange(field)}
                  aria-labelledby={`${field}Label`}
                />
              </td>
              <td className="py-2 border-[1px] border-black dark:border-white">
                {field}
              </td>
              <td className="py-2 border-[1px] border-black dark:border-white">
                {dataType}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Schema;
