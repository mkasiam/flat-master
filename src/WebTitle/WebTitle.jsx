import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const WebTitle = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>Flat Master | {title} </title>
      </Helmet>
    </div>
  );
};
WebTitle.propTypes = {
  title: PropTypes.string,
};
export default WebTitle;
