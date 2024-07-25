import Login from "./components/Login";
import Registration from "./components/Registration";
import UserProfile from "./components/UserProfile";

import { PROFILE_URL, LOGIN_URL, REGISTRATION_URL } from "./services/commonService";

const AppRoutes = [
    {
        path: LOGIN_URL,
        element: <Login />
    },
    {
        path: PROFILE_URL,
        element: <UserProfile />
    },
    {
        path: REGISTRATION_URL,
        element: <Registration />
    }
]

export default AppRoutes;