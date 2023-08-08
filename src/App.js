// import SignIn from "./signIn/signIn";
import Dashboard from "./dashboard/dashboard";

import { Route, Routes } from "react-router-dom";

import "./index.css"
import SignIn from "./signIn/signIn";
import Trade from "./trade/trade";
function App() {


  return (
    <>
        <Routes>
          <Route exact path="/dashboard/:user" element={<Dashboard></Dashboard>} />
          <Route exact path="/" element={<SignIn></SignIn>} />
          <Route exact path="/trade/:bookname" element={<Trade></Trade>} />
        </Routes>
    </>
  );
}

export default App;
