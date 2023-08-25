import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PageBase from "./pages/PageBase";
import PageBaseForm from "./pages/PageBaseForm";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { RotaPrivate } from "./utils/RotaPrivate";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase />}> 
                    <Route element={<RotaPrivate />} >
                        <Route path="/dashboard" element={<Dashboard />} />  
                    </Route>
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