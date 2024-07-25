import { LOGIN_URL } from "../services/commonService";
import { createUser } from "../services/userService";
import UserProfileCreation from "./UserProfileCreation";

const Registration = () => {
    const userDefault = {
        id: '',
        login: '',
        password: ''
    }

    const registrationAction = (newUser) => {
        createUser(newUser);
    }

    const openLoginPage = () => {
        window.location.href = LOGIN_URL;
    }

    return (
        <div>
            <UserProfileCreation user={userDefault} setAction={registrationAction} />
            <button className="btn btn-link" onClick={openLoginPage}>Sign in</button>
        </div>
    );
}

export default Registration;