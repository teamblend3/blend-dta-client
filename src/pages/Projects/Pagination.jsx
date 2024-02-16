import PropTypes from "prop-types";
import cls from "../../utils/styleUtil";
import { PROJECTS_PER_PAGE } from "../../utils/constants";
import ArrowIcon from "../../components/Pagination/ArrowIcon";

function Pagination({ totalLength, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(totalLength / PROJECTS_PER_PAGE);
  const currentPageGroup = Math.ceil(currentPage / PROJECTS_PER_PAGE);
  const startPage = (currentPageGroup - 1) * PROJECTS_PER_PAGE + 1;
  const calculatedEndPage = startPage + PROJECTS_PER_PAGE - 1;
  const endPage =
    calculatedEndPage > totalPages ? totalPages : calculatedEndPage;
  const previousPageGroupLastPage = startPage - 1 < 1 ? 1 : startPage - 1;
  const nextPageGroupFirstPage =
    endPage + 1 > totalPages ? totalPages : endPage + 1;

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            onClick={() => setCurrentPage(previousPageGroupLastPage)}
            className={`w-8 cursor-pointer flex items-center justify-center h-8 leading-tight text-black bg-transparent border border-black "rounded-s-lg" hover:bg-primary-400 hover:text-primary-50`}
          >
            <span className="sr-only">Previous</span>
            <ArrowIcon direction="left" />
          </button>
        </li>
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i,
        ).map(number => (
          <li key={number}>
            <button
              className={cls(
                "w-8 flex items-center justify-center h-8 leading-tight text-primary-500 border border-primary-950 hover:bg-primary-400 hover:text-primary-50 cursor-pointer",
                currentPage === number
                  ? "bg-primary-400 text-white"
                  : "bg-transparent text-primary-950",
              )}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => setCurrentPage(nextPageGroupFirstPage)}
            className="w-8 cursor-pointer flex items-center justify-center h-8 leading-tight text-black bg-transparent border border-black hover:bg-primary-400 hover:text-primary-50"
          >
            <span className="sr-only">Next</span>
            <ArrowIcon direction="right" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  totalLength: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
