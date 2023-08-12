import React, { useState } from 'react';
import BlockService from '../services/BlockService';

function UpdateBlock() {
  const [oldBlock, setOldBlock] = useState('');
  const [newBlock, setNewBlock] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await BlockService.updateBlock(oldBlock, newBlock);
      setMessage('Block updated successfully');
      setError('');
      setOldBlock('');
      setNewBlock('');
    } catch (error) {
      setMessage('');
      setError('Error updating block');
    }
  };

  return (
    <div>
      <h2>Update Block</h2>
      {message && <div style={{ color: 'green' }}>{message}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Old Block:
          <input
            type="text"
            value={oldBlock}
            onChange={e => setOldBlock(e.target.value)}
          />
        </label>
        <br />
        <label>
          New Block:
          <input
            type="text"
            value={newBlock}
            onChange={e => setNewBlock(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateBlock;
