import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function PrivateRoute() {
  const [giveAccess, setGiveAccess] = useState(null);
  const navigate = useNavigate();
  const local = JSON.parse(localStorage.getItem("zeptoLogin"));

  useEffect(() => {
    if (local) {
      console.log("local", local);
      setGiveAccess(local);
    } else {
      console.log("local  else", local);

      navigate("/login");
    }
  }, [navigate, local]);

  console.log("local", local);

  if (giveAccess === null) {
    return null;
  }
  return <Outlet />;
}

export default PrivateRoute;
