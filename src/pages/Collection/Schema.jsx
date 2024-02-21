import PropTypes from "prop-types";
import { useState } from "react";

import { RiFileExcel2Line } from "react-icons/ri";

function Schema({ schemas }) {
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
      setSelectedRows(schemas.map(({ field }) => field));
    }
    setSelectAll(!selectAll);
  };

  return (
    <div className="flex flex-col w-full h-full space-y-2">
      <div className="flex items-center">
        <h3 className="text-text-800 font-bold flex-grow">Data Schema</h3>
        <RiFileExcel2Line className="flex-shrink-0" size="25" />
      </div>
      <table className="w-full h-full text-base text-center text-text-950 my-2 border-[1px]">
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
            <th className="border-[1px] border-black dark:border-white w-3/6">
              Field
            </th>
            <th className="py-2 border-[1px] border-black dark:border-white w-2/6">
              Data Type
            </th>
          </tr>
        </thead>
        <tbody>
          {schemas?.map(({ field, type }) => (
            <tr key={field}>
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
                {type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Schema.propTypes = {
  schemas: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      type: PropTypes.string,
    }),
  ).isRequired,
};

export default Schema;
