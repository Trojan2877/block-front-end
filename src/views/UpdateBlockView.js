// views/UpdateBlockView.js
import React, { useState } from 'react';
import BlockController from '../controllers/BlockController';

function UpdateBlockView() {
  const [oldBlock, setOldBlock] = useState('');
  const [newBlock, setNewBlock] = useState('');
  const blockController = new BlockController();

  async function handleUpdateBlock(event) {
    event.preventDefault();
    try {
      const updatedBlock = await blockController.updateBlock(oldBlock, newBlock);
      console.log('Block updated:', updatedBlock);
      setOldBlock('');
      // Handle success message or navigation
    } catch (error) {
      console.error('Error updating block:', error);
      setOldBlock('');
      // Handle error message
    }
  }

  return (
    <div>
      <h2>Update Block</h2>
      <form onSubmit={handleUpdateBlock}>
        <label>Old Block:</label>
        <input
          type="text"
          value={oldBlock}
          onChange={e => setOldBlock(e.target.value)}
        />
        <label>New Block:</label>
        <input
          type="text"
          value={newBlock}
          onChange={e => setNewBlock(e.target.value)}
        />
        <button type="submit">Update Block</button>
      </form>
    </div>
  );
}

export default UpdateBlockView;
