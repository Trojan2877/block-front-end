import React, { useState } from 'react';
import BlockController from '../controllers/BlockController';

function DeleteBlockView() {
  const [blockToDelete, setBlockToDelete] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true); // Set initial state to true (for green message)
  const blockController = new BlockController();

  async function handleDeleteBlock(event) {
    event.preventDefault();
    try {
      await blockController.deleteBlock(blockToDelete);
      console.log('Block deleted:', blockToDelete);
      setMessage('Block deleted successfully');
      setIsSuccess(true);
      setBlockToDelete('');
    } catch (error) {
      console.error('Error deleting block:', error);
      setMessage('Block deletion failed');
      setIsSuccess(false);
      setBlockToDelete('');
    }
  }

  return (
    <div>
      <h2>Delete Block</h2>
      <form onSubmit={handleDeleteBlock}>
        <label>Block to Delete:</label>
        <input
          type="text"
          value={blockToDelete}
          onChange={e => setBlockToDelete(e.target.value)}
        />
        <button type="submit">Delete Block</button>
      </form>
      {message && (
        <p style={{ color: isSuccess ? 'green' : 'red' }}>{message}</p>
      )}
    </div>
  );
}

export default DeleteBlockView;
