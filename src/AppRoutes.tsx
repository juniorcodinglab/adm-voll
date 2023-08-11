import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PageBase from "./pages/PageBase";
import PageBaseForm from "./pages/PageBaseForm";
import Login from "./pages/Login";
import Register from "./pages/Register";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase />}> 
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>

                <Route path="/" element={<PageBaseForm />}> 
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;