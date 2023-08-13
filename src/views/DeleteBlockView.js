// views/DeleteBlockView.js
import React, { useState } from 'react';
import BlockController from '../controllers/BlockController';

function DeleteBlockView() {
  const [blockToDelete, setBlockToDelete] = useState('');
  const blockController = new BlockController();

  async function handleDeleteBlock(event) {
    event.preventDefault();
    try {
      await blockController.deleteBlock(blockToDelete);
      console.log('Block deleted:', blockToDelete);
      setBlockToDelete('');
      // Handle success message or navigation
    } catch (error) {
      console.error('Error deleting block:', error);
      setBlockToDelete('');
      // Handle error message
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
    </div>
  );
}

export default DeleteBlockView;
