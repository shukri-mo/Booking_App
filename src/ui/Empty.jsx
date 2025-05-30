import PropTypes from "prop-types";

function Empty({ resourceName }) {
  return <p>No {resourceName} could be found.</p>;
}
Empty.propTypes={
  resourceName:PropTypes.any
}
export default Empty;
