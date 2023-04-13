
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { AuthProvider } from "./contexts/userContext/AuthProvider"

function App() {


  return (
    <>
      <AuthProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App;
