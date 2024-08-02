import { useState } from "react";
import AppRoutes from "./component/route/AppRoute";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div className="">
        {/* <AppRoutes /> */}
        {/* <Home></Home> */}
        <Dashboard></Dashboard>
      </div>
    </>
  );
}

export default App;
