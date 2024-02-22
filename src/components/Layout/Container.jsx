import PropTypes from "prop-types";

function Container({ children }) {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col sm:w-10/12 md:w-8/12 xl:w-8/12 2xl:w-6/12 mx-auto max-w-screen-xl">
        {children}
      </div>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
