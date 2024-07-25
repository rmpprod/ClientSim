import { useState } from "react";

const UserProfileCreation = ({ user, setAction }) => {
    const [login, setLogin] = useState(user.login);
    const [password, setPassword] = useState(user.password);

    const endCreate = () => {
        const newUser = {
            id: user.id,
            login: login,
            password: password
        }
        setAction(newUser);
    }

    return (
        <div>
            <h2>User Create</h2>
            <p>Login</p>
            <input type="text" onChange={e => setLogin(e.target.value)} />
            <p>Password</p>
            <input type="text" onChange={e => setPassword(e.target.value)} />
            <button onClick={endCreate}>Ok</button>
        </div>
    )
    
}

export default UserProfileCreation;