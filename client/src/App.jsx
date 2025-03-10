// import './App.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/Home"
import LoginPage from "./pages/Auth/Login"
import Services from "./pages/Services/Services"
import ServiceCardPage from "./pages/Services/ServiceCardPage"
// import ProvidersPage from "./pages/Services/ProvidersPage"
// import ProviderDetailsPage from "./pages/Services/ProviderDetailsPage"
import BookingsPage from "./pages/Services/BookingsPage"
import Dashboard from "./pages/Dashboard/Dashboard"
import AboutPage from "./pages/About/About"
import ProfilePage from "./pages/Profile/Profile"

function App() {

  return (
    <>  
    

    <Routes>
   <Route path="/" element={<HomePage />} />
   <Route path="/login" element={<LoginPage />} />
   <Route path="/services" element={<Services />} />
   <Route path="/services/:id" element={<ServiceCardPage />} />
   {/* <Route path="/providers" element={<ProvidersPage />} /> */}
   {/* <Route path="/providers/:id" element={<ProviderDetailsPage />} /> */}
   <Route path="/bookings" element={<BookingsPage />} />
   <Route path="/dashboard" element={<Dashboard /> } />
   <Route path="/about" element={<AboutPage />} />
   <Route path="/profile" element={<ProfilePage /> } />


    </Routes>
    
    </>
  )
}

export default App
