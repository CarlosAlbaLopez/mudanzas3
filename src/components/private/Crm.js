import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../App";

export default function Crm() {
  const [token] = useContext(AuthContext);

  const redirect = token ? <Redirect to="/admin" /> : <div>Crm</div>;

  return redirect;
}
