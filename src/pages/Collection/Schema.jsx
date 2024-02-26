import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { RiFileExcel2Line } from "react-icons/ri";
import { useParams } from "react-router-dom";

function Schema({ schemas, collection }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const { projectId } = useParams();

  useEffect(() => {
    setSelectedRows([]);
    setSelectAll(false);
  }, [collection]);

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

  const handleSubmit = async e => {
    e.preventDefault();
    if (!selectedRows.length) {
      return;
    }
    try {
      const res = await axios.post(
        `/api/projects/${projectId}/download`,
        {
          collection,
          columns: selectedRows,
        },
        { responseType: "blob", withCredentials: true },
      );
      const downloadUrl = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", `${collection}.xlsx`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-2">
      <div className="flex items-center">
        <h3 className="text-text-800 font-bold flex-grow">Data Schema</h3>
        <button
          type="button"
          onClick={handleSubmit}
          aria-label="Download Excel"
        >
          <RiFileExcel2Line
            className="flex-shrink-0 text-primary-500"
            size="25"
          />
        </button>
      </div>
      <table className="w-full h-full text-sm text-center text-text-950 my-2 border border-collapse">
        <thead className="text-sm uppercase border border-collapse">
          <tr>
            <th className="flex py-2 justify-center items-center border-black dark:border-white">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAllChange}
                aria-labelledby="selectAllLabel"
                className="w-checkbox-lg h-checkbox-lg cursor-pointer"
              />
            </th>
            <th className="border border-black dark:border-white w-3/6">
              Field
            </th>
            <th className="border  border-black dark:border-white w-2/6">
              Data Type
            </th>
          </tr>
        </thead>
        <tbody className="border border-collapse">
          {schemas?.map(({ field, type }) => (
            <tr key={field} className="border">
              <td className="flex h-full p-0 justify-center items-center">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(field)}
                  onChange={() => handleCheckboxChange(field)}
                  aria-labelledby={`${field}Label`}
                  className="w-checkbox-lg h-checkbox-lg cursor-pointer"
                />
              </td>
              <td className="border  border-black dark:border-white">
                {field}
              </td>
              <td className="border  border-black dark:border-white">{type}</td>
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
  collection: PropTypes.string.isRequired,
};

export default Schema;
