import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./Login/Login"
import Home from "../../component/Home"
import Sample from "../../component/Sample"

export default function AuthRoutes() {

    return (
        <>
            {/* <Routes > */}
                {/* <Route path="/" element={<Navigate to="/auth/login" replace={true} />} /> */}
                {/* <Route path="/" Component={ Home} />
                <Route path="/auth/login" Component={Login}/> */}
            {/* </Routes> */}
            <Sample/>
        </>
    )
}