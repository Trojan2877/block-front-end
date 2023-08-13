import React, { useState } from 'react';
import BlockController from '../controllers/BlockController';

function UpdateBlockView() {
  const [oldBlock, setOldBlock] = useState('');
  const [newBlock, setNewBlock] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const blockController = new BlockController();

  async function handleUpdateBlock(event) {
    event.preventDefault();
    try {
      const updatedBlock = await blockController.updateBlock(oldBlock, newBlock);
      console.log('Block updated:', updatedBlock);
      setMessage('Block updated successfully');
      setIsSuccess(true);
      setOldBlock('');
      setNewBlock('');
      // Handle success message or navigation
    } catch (error) {
      console.error('Error updating block:', error);
      setMessage('Block update failed');
      setIsSuccess(false);
      setOldBlock('');
      setNewBlock('');
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
      {message && (
        <p style={{ color: isSuccess ? 'green' : 'red' }}>{message}</p>
      )}
    </div>
  );
}

export default UpdateBlockView;
