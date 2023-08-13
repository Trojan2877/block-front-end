// controllers/BlockController.js
import BlockModel from '../models/BlockModel';
import APIService from '../services/APIService';

class BlockController {
  constructor() {
    this.apiService = new APIService();
  }

  async getBlocks() {
    try {
      const blocksData = await this.apiService.getBlocks();
      return blocksData.map(block => new BlockModel(block.id, block.block, block.nextBlock));
    } catch (error) {
      console.error('Error fetching blocks:', error);
      throw error;
    }
  }

  async createBlock(blockData) {
    try {
      const createdBlock = await this.apiService.createBlock(blockData);
      return new BlockModel(createdBlock.id, createdBlock.block, createdBlock.nextBlock);
    } catch (error) {
      console.error('Error creating block:', error);
      throw error;
    }
  }

  async updateBlock(oldBlock, newBlock) {
    try {
      const updatedBlock = await this.apiService.updateBlock(oldBlock, newBlock);
      return new BlockModel(updatedBlock.id, updatedBlock.block, updatedBlock.nextBlock);
    } catch (error) {
      console.error('Error updating block:', error);
      throw error;
    }
  }

  async deleteBlock(block) {
    try {
      await this.apiService.deleteBlock(block);
    } catch (error) {
      console.error('Error deleting block:', error);
      throw error;
    }
  }
}

export default BlockController;
