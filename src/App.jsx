
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import HeaderNavbar from "./components/HeaderNavbar"
import { AuthProvider } from "./contexts/userContext/AuthProvider"
import React from "react"

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
