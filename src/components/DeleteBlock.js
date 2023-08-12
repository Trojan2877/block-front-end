import React, { useState } from 'react';
import BlockService from '../services/BlockService';

function DeleteBlock() {
  const [block, setBlock] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await BlockService.deleteBlock(block);
      setMessage('Block deleted successfully');
      setError('');
      setBlock('');
    } catch (error) {
      setMessage('');
      setError('Error deleting block');
    }
  };

  return (
    <div>
      <h2>Delete Block</h2>
      {message && <div style={{ color: 'green' }}>{message}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Block:
          <input
            type="text"
            value={block}
            onChange={e => setBlock(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteBlock;
