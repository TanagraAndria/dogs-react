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

export function PHOTO_GET(id) {
    return {
      url: `${API_Url}/api/photo/${id}`,
      options: {
        method: 'GET',
        cache: 'no-store',
      },
    };
  }

  