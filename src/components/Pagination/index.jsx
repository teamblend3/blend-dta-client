import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import { NextArrow, PreviousArrow } from "../Button/ArrowButton";
import NumberButton from "../Button/NumberButton";
import usePagination from "../../hooks/usePagination";

function Pagination({ totalLength, currentPage, setCurrentPage }) {
  const { pathname } = useLocation();
  const {
    startPage,
    endPage,
    previousPageGroupLastPage,
    nextPageGroupFirstPage,
  } = usePagination(totalLength, currentPage);

  return (
    <nav>
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <PreviousArrow
          usePage={pathname}
          onClick={() => setCurrentPage(previousPageGroupLastPage)}
        />
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i,
        ).map(number => (
          <NumberButton
            key={number}
            number={number}
            usePage={pathname}
            isCurrent={currentPage === number}
            setCurrentPage={setCurrentPage}
          />
        ))}
        <NextArrow
          usePage={pathname}
          onClick={() => setCurrentPage(nextPageGroupFirstPage)}
        />
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
