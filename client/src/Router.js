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
import Admin from "./pages/admin/Admin/Admin";
import AuthContext from "./context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Baladiya" element={<Baladiya />} />
          <Route path="Actualite" element={<Actualite />} />
          <Route path="Khadamet" element={<Khadamet />} />
          <Route path="Service1" element={<Service1 />} />
          <Route path="Service2" element={<Service2 />} />
          <Route path="Service3" element={<Service3 />} />
          <Route path="Service4" element={<Service4 />} />
          <Route path="S5Service3" element={<S5Service3 />} />
          <Route path="Admin" element={<Admin />} />

          {!loggedIn && (
            <>
              <Route path="SignIn" element={<SignIn />} />
              <Route path="SignUp" element={<SignUp />} />
            </>
          )}

          {loggedIn && (
            <>
                      <Route path="Service5" element={<Service5 />} />

              <Route path="S5Serv2" element={<S5S2Service />} />
              <Route path="Reclamation" element={<Reclamation />} />
              <Route path="Suggest" element={<Suggest />} />
              {/* <Route path="Avis" element={<Avis />} /> */}
              <Route path="S5Service2" element={<S5Service2 />} />
              <Route path="S5Service1" element={<S5Service1 />} />
            </>
          )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
