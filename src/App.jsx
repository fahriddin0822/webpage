import { Routes, Route } from "react-router-dom";

import UserLayout from "./pages/user-layout";
import HomePage from "./pages/user-layout/home";
import Error from "./pages/error-layout";

import AuthLayout from "./pages/auth-layout";
import LoginPage from "./pages/auth-layout/login";
import Register from "./pages/auth-layout/register";
import Service from "./pages/user-layout/service";
import Company from "./pages/user-layout/company";
import Career from "./pages/user-layout/career";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/user" element={<UserLayout />}>
          <Route path="/user/" element={<HomePage />} />
          <Route path="/user/service" element={<Service />} />
          <Route path="/user/company" element={<Company />} />
          <Route path="/user/career" element={<Career />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
