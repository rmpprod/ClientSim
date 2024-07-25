import { ACCOUNT_URL, sendRequestWithToken, sendRequestWithoutToken } from "./commonService";

export async function getUser() {
    const user = await sendRequestWithToken(ACCOUNT_URL, 'GET');
    return user; 
}

export async function createUser(user) {
    const url = ACCOUNT_URL + '/registration';
    const newUser = await sendRequestWithoutToken(url, 'POST', user);
    return newUser;
}