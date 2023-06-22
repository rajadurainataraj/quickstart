import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./Login/Login"

export default function AuthRoutes() {

    return (
        <>
            <Routes >
                <Route path="/" element={<Navigate to="/auth/login" replace={true} />} />
                <Route path="/auth/login" Component={Login}/>
        </Routes>
        </>
    )
}