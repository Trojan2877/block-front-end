import ApiService from './ApiService';

const API_BASE_URL = 'http://localhost:8081';

const BlockService = {
  getBlocks: async () => {
    return ApiService.get(`${API_BASE_URL}/block`);
  },

  createBlock: async blockData => {
      const response = await ApiService.post(`${API_BASE_URL}/block/create`, blockData);
      if (response.status === 200) {
        return response.data;
      } else if (response.status === 400) {
        throw new Error('Bad Request');
      }
  },


  updateBlock: async (oldBlock, newBlock) => {
      const response = await ApiService.put(`${API_BASE_URL}/block/update/${oldBlock}/?newBlock=${newBlock}`);
      if (response.status === 200) {
        return response.data;
      } else if (response.status === 400) {
        throw new Error('Bad Request');
      }
  },

  deleteBlock: async block => {
      const response = await ApiService.delete(`${API_BASE_URL}/block?block=${block}`);
      if (response.status === 200) {
        return response.data;
      } else if (response.status === 400) {
        throw new Error('Bad Request');
      }
  },
};

export default BlockService;
