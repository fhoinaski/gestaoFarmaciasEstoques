
import { Outlet } from "react-router-dom"
import { AuthProvider } from "./contexts/userContext/AuthProvider"
import React from "react"
import HeaderNavbar from "./components/header_e_footer/HeaderNavbar";
import Footer from "./components/header_e_footer/Footer";

function App() {


  return (
    <>
      <AuthProvider>
      <HeaderNavbar />
         <Outlet />
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App;
