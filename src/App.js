import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Account from "./pages/Account"
import { AuthContextProvider } from "./context/AuthContext";
import ProtecteRoute from "./components/ProtecteRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<ProtecteRoute><Account /></ProtecteRoute>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
