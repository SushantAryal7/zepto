import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function PrivateRoute() {
  const [giveAccess, setGiveAccess] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("zeptoLogin"));
    if (local) {
      setGiveAccess(local);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (giveAccess === null) {
    return null;
  }
  return <Outlet />;
}

export default PrivateRoute;
