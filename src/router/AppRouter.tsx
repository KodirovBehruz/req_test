import { Route, Routes } from 'react-router-dom'
import {ROUTES} from "../constants/routing.tsx";
import {Products} from "../pages/Products";

export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path={ROUTES.PRODUCTS}
                element={<Products />}>
            </Route>
        </Routes>
    )
}
