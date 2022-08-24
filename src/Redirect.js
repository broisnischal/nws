import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./redirect.scss";
const NoMatch = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="error">
      <h1>404</h1>
    </div>
  );
};

export default NoMatch;
