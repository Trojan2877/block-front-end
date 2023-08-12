const ApiService = {
    get: async (url, headers = {}) => {
      const response = await fetch(url, {
        method: 'GET',
        headers,
      });
      const data = await response.json();
      return data;
    },
  
    post: async (url, data, headers = {}) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      return responseData;
    },
  
    put: async (url, data, headers = {}) => {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      return responseData;
    },
  
    delete: async (url, headers = {}) => {
      const response = await fetch(url, {
        method: 'DELETE',
        headers,
      });
      const data = await response.json();
      return data;
    },
  };
  
  export default ApiService;
  