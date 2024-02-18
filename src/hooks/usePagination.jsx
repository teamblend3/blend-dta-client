import { PROJECTS_PER_PAGE } from "../utils/constants";

function usePagination(totalLength, currentPage) {
  const totalPages = Math.ceil(totalLength / PROJECTS_PER_PAGE);
  const currentPageGroup = Math.ceil(currentPage / PROJECTS_PER_PAGE);
  const startPage = (currentPageGroup - 1) * PROJECTS_PER_PAGE + 1;
  const calculatedEndPage = startPage + PROJECTS_PER_PAGE - 1;
  const endPage =
    calculatedEndPage > totalPages ? totalPages : calculatedEndPage;
  const previousPageGroupLastPage = startPage - 1 < 1 ? 1 : startPage - 1;
  const nextPageGroupFirstPage =
    endPage + 1 > totalPages ? totalPages : endPage + 1;

  return {
    startPage,
    endPage,
    previousPageGroupLastPage,
    nextPageGroupFirstPage,
  };
}

export default usePagination;
