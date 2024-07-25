import { useState, useEffect } from "react";
import {getUser} from "../services/userService.js";

const UserProfile = () => {
    const [user, setUser] = useState({
        id: '',
        userName: ''
    });
    
    useEffect(() => {
        const fetchUser = async () => {
            const data = await getUser();
            setUser(data);
        };

        fetchUser();
    }, []);

    return (
        <div>
            <h2>Profile</h2>
            <p>UserId: {user.id}</p>
            <p>UserName: {user.userName}</p>
        </div>
    );
};

export default UserProfile;