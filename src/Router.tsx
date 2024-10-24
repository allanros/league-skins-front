import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Dashboard } from "./pages/Dashboard";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Login } from "./pages/Login";
import { Registry } from "./pages/Registry";
import { SkinsPage } from "./pages/SkinsPage";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h1>Not Found</h1>} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registry" element={<Registry />} />
                <Route path="/skins" element={<SkinsPage />} />
            </Route>
        </Routes>
    )
}