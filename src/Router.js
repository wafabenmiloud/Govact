import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/Signup/Signin";
import SignUp from "./pages/Signup/Signup";
import Baladiya from "./pages/Baladiya/Baladiya";
import Khadamet from "./pages/Khadamet/Khadamet";
import Service1 from "./pages/Service1/Service1";
import Service2 from "./pages/Service2/Service2";
import Service3 from "./pages/Service3/Service3";
import Service4 from "./pages/Service4/Service4";
import Service5 from "./pages/Service5/Service5";
import S5Service1 from "./pages/S5Service1/S5Service1";
import S5Service2 from "./pages/S5Service2/S5Service2";
import S5Service3 from "./pages/S5Service3/S5Service3";
import Actualite from "./pages/Actualite/Actualite";
import Suggest from "./pages/Suggest/Suggest";
import Avis from "./pages/Avis/Avis";
import Reclamation from "./pages/Reclamation/Reclamation";
import S5S2Service from "./pages/S5S2Service/S5S2Service";

import AuthContext from "./context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route exact path="Baladiya" element={<Baladiya />} />
          <Route exact path="Actualite" element={<Actualite />} />
          <Route exact path="Khadamet" element={<Khadamet />} />
          <Route exact path="Service1" element={<Service1 />} />
          <Route exact path="Service2" element={<Service2 />} />
          <Route exact path="Service3" element={<Service3 />} />
          <Route exact path="Service4" element={<Service4 />} />
          <Route exact path="Service5" element={<Service5 />} />
          <Route exact path="S5Service3" element={<S5Service3 />} />

          {!loggedIn && (
            <>
              <Route exact path="SignIn" element={<SignIn />} />
              <Route exact path="SignUp" element={<SignUp />} />
            </>
          )}

          {loggedIn && (
            <>
              <Route exact path="S5Serv2" element={<S5S2Service />} />
              <Route exact path="Reclamation" element={<Reclamation />} />
              <Route exact path="Suggest" element={<Suggest />} />
              <Route exact path="Avis" element={<Avis />} />
              <Route exact path="S5Service2" element={<S5Service2 />} />
              <Route exact path="S5Service1" element={<S5Service1 />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
