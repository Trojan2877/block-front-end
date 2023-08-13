// services/APIService.js
class APIService {
  constructor() {
    this.baseUrl = 'http://localhost:8081'; // Replace with your actual backend URL
  }

  async getBlocks() {
    try {
      const response = await fetch(`${this.baseUrl}/block`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching blocks:', error);
      throw error;
    }
  }

  async createBlock(blockData) {
    try {
      const response = await fetch(`${this.baseUrl}/block/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blockData)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating block:', error);
      throw error;
    }
  }

  async updateBlock(oldBlock, newBlock) {
    try {
      const response = await fetch(`${this.baseUrl}/block/update/${oldBlock}?newBlock=${newBlock}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating block:', error);
      throw error;
    }
  }

  async deleteBlock(block) {
    try {
      const response = await fetch(`${this.baseUrl}/block?block=${block}`, {
        method: 'DELETE'
      });
      if (response.status === 200) {
        console.log('Block deleted successfully');
      } else {
        throw new Error('Block deletion failed');
      }
    } catch (error) {
      console.error('Error deleting block:', error);
      throw error;
    }
  }
}

export default APIService;
