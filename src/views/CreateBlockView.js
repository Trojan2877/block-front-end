import React, { useState } from 'react';
import BlockController from '../controllers/BlockController';

function CreateBlockView() {
  const [blockData, setBlockData] = useState({ thisBlock: '', nextBlock: '' });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const blockController = new BlockController();

  async function handleCreateBlock(event) {
    event.preventDefault();
    try {
      const createdBlock = await blockController.createBlock(blockData);
      console.log('Block created:', createdBlock);
      
      setBlockData({ thisBlock: '', nextBlock: '' });
      setMessage('Block created successfully');
      setIsSuccess(true);
      
    } catch (error) {
      console.error('Error creating block:', error);
      setBlockData({ thisBlock: '', nextBlock: '' });
      setMessage('Block creation failed');
      setIsSuccess(false);
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
      {message && (
        <p style={{ color: isSuccess ? 'green' : 'red' }}>{message}</p>
      )}
    </div>
  );
}

export default CreateBlockView;
