import useRefetchAuthStatus from "../../hooks/useRefetchAuthStatus";

function Collection() {
  useRefetchAuthStatus();

  return <div>Collection</div>;
}

export default Collection;
