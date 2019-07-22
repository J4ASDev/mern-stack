import { API } from './config';

const Fetch = {
  post: async (URL, data) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    return await fetch(`${API.LOCAL}${URL}`, options);
  },

  delete: async URL => {
    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }

    return await fetch(`${API.LOCAL}${URL}`, options);
  },

  put: async (URL, data) => {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    return await fetch(`${API.LOCAL}${URL}`, options);
  }
}

export default Fetch;
