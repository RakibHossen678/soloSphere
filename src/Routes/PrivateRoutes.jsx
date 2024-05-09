import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import animation from "../assets/loading (1).json";
import Lottie from "lottie-react";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-24">
        <Lottie animationData={animation}></Lottie>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate state={location?.pathname} to="/login" replace={true}></Navigate>
  );
};
PrivateRoutes.propTypes={
  children:PropTypes.node
}

export default PrivateRoutes;
