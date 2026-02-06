import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const userData = localStorage.getItem("easysuite_user");
    if (userData) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return <Login />;
};

export default Index;
