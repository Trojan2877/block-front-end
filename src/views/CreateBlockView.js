import React, { useState } from 'react';
import BlockController from '../controllers/BlockController';

function CreateBlockView() {
  const [blockData, setBlockData] = useState({ thisBlock: '', nextBlock: '' });
  const blockController = new BlockController();

  async function handleCreateBlock(event) {
    event.preventDefault();
    try {
      const createdBlock = await blockController.createBlock(blockData);
      console.log('Block created:', createdBlock);
      
      // Clear the input text fields after successful creation
      setBlockData({ thisBlock: '', nextBlock: '' });
      
      // Handle success message or navigation
    } catch (error) {
      console.error('Error creating block:', error);
      setBlockData({ thisBlock: '', nextBlock: '' });
      // Handle error message
    }
  }

  return (
    <div>
      <h2>Create Block</h2>
      <form onSubmit={handleCreateBlock}>
        <label>Block:</label>
        <input
          type="text"
          value={blockData.thisBlock}
          onChange={e => setBlockData({ ...blockData, thisBlock: e.target.value })}
        />
        <label>Next Block:</label>
        <input
          type="text"
          value={blockData.nextBlock}
          onChange={e => setBlockData({ ...blockData, nextBlock: e.target.value })}
        />
        <button type="submit">Create Block</button>
      </form>
    </div>
  );
}

export default CreateBlockView;
