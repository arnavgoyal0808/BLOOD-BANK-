import { Routes , Route } from "react-router-dom";
import HomePage  from "./pages/HomePages";
import Login from "./pages/auth/Loginss";
import Register from "./pages/auth/Register";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from "./components/routes/protectedRoutes";
import PublicRoute from "./components/routes/publicRoutes";


function App() {
  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path="/" element ={
          <ProtectedRoutes>
             <HomePage />

          </ProtectedRoutes>
          
        }/>
        <Route path="/login" element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
        
          
          } />
        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
          } />
      </Routes>
    </>
  );
}

export default App;