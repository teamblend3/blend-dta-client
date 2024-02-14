import { useState } from "react";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";
import cls from "../../utils/styleJoinUtil";

function Pagination() {
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handleClickPrevious = () => {
    if (page > 5) {
      setPage(page - 5);
      setCurrentPage(page - 5);
    } else {
      setCurrentPage(1);
    }
  };

  const handleClickNext = () => {
    setPage(page + 5);
    setCurrentPage(page + 5);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <PreviousArrow onClick={handleClickPrevious} />
        {new Array(5)
          .fill(0)
          .map((_, i) => page + i)
          .map(number => (
            <li key={number}>
              <button
                className={cls(
                  "w-8 flex items-center justify-center h-8 leading-tight text-primary-500 border border-primary-300 hover:bg-primary-400 hover:text-primary-900 cursor-pointer",
                  currentPage === number
                    ? "bg-primary-500 text-white"
                    : "bg-transparent text-primary-500",
                )}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            </li>
          ))}
        <NextArrow onClick={handleClickNext} />
      </ul>
    </nav>
  );
}

export default Pagination;
