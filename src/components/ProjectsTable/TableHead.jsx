import PropTypes from "prop-types";
import cls from "../../utils/styleUtil";

function TableHead({ isProjectsPage }) {
  const headClass = isProjectsPage
    ? "text-sm text-center text-primary-950 uppercase"
    : "text-sm text-center text-primary-700 uppercase bg-primary-50";

  const thClass = isProjectsPage
    ? "py-2 border-[1px] border-primary-950"
    : "px-6 py-2";

  return (
    <thead className={headClass}>
      <tr>
        <th className={cls(thClass, isProjectsPage ? "w-1/12" : "w-2/12")}>
          No.
        </th>
        <th className={cls(thClass, isProjectsPage ? "w-3/12" : "w-5/12")}>
          Project name
        </th>
        {isProjectsPage && (
          <>
            <th className={cls(thClass, "w-3/12")}>db url</th>
            <th className={cls(thClass, "w-1/12")}>sheet</th>
          </>
        )}
        <th className={cls(thClass, isProjectsPage ? "w-1/12" : "w-2/12")}>
          Collections
        </th>
        <th className={cls(thClass, isProjectsPage ? "w-2/12" : "w-3/12")}>
          Created At
        </th>
        {isProjectsPage && <th className={cls(thClass, "w-1/12")}>delete</th>}
      </tr>
    </thead>
  );
}

TableHead.propTypes = {
  isProjectsPage: PropTypes.bool.isRequired,
};

export default TableHead;
