export const ACCOUNT_URL = 'https://localhost:7070/Account';

const BASE_URL = '/';

const TOKEN_NAME = 'Token';

export const PROFILE_URL = '/profile';
export const LOGIN_URL = '/login';
export const REGISTRATION_URL = '/registration'

export async function getToken(login, password){
    const url = ACCOUNT_URL + '/token';
    const token = await sendAuthenticatedRequest(url, 'POST', login, password);

    localStorage.setItem(TOKEN_NAME, token.accessToken);
    window.location.href = PROFILE_URL;
}

async function sendAuthenticatedRequest(url, method, login, password, data) {
    var headers = new Headers();
  
    headers.set('Authorization', 'Basic ' + btoa(login + ':' + password));
    
    if (data) {
      headers.set('Content-Type', 'application/json');
    }

    var requestOptions = {
      method: method,
      headers: headers,
      body: data ? JSON.stringify(data) : undefined
    };
  
    var resultFetch = await fetch(url, requestOptions);
    if (resultFetch.ok) {
        const result = await resultFetch.json();
        return result;
    }
    else {
        throw new Error('Ошибка ' + resultFetch.status + ': ' + resultFetch.statusText);
    }
}

export async function sendRequestWithToken(url, method, data){
    var headers = new Headers();
    
    const token = localStorage.getItem(TOKEN_NAME);
    headers.set('Authorization', `Bearer ${token}`);

    if (data) {
      headers.set('Content-Type', 'application/json');
    }
  
    var requestOptions = {
      method: method,
      headers: headers,
      body: data ? JSON.stringify(data) : undefined
    };

    var resultFetch = await fetch(url, requestOptions);
    if (resultFetch.ok) {
      try {
        const result = await resultFetch.json();
        return result;
      }
      catch {
        return;
      }
    }
    else {
        errorRequest(resultFetch.status);
    }
}

export async function sendRequestWithoutToken(url, method, data){
  var headers = new Headers();
  
  if (data) {
    headers.set('Content-Type', 'application/json');
  }

  var requestOptions = {
    method: method,
    headers: headers,
    body: data ? JSON.stringify(data) : undefined
  };

  var resultFetch = await fetch(url, requestOptions);
  if (resultFetch.ok) {
    try {
      const result = await resultFetch.json();
      return result;
    }
    catch {
      return;
    }
  }
  else {
      errorRequest(resultFetch.status);
  }
}

function errorRequest(status) {
    if (status === 401){
        window.location.href = BASE_URL;
        clearStore();
    }
}
  
export function clearStore() {
    localStorage.clear();
}