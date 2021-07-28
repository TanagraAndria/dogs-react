export const API_Url= 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST(body) {
    return{
        url: API_Url + '/jwt-auth/v1/token',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
    }
}