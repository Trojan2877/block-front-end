import React, { useState } from 'react';
import BlockService from '../services/BlockService';

function CreateBlock() {
  const [thisBlock, setThisBlock] = useState('');
  const [nextBlock, setNextBlock] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await BlockService.createBlock({ thisBlock, nextBlock });
      setMessage('Block created successfully');
      setError('');
      setThisBlock('');
      setNextBlock('');
    } catch (error) {
      setMessage('');
      setError('Error creating block');
    }
  };

  return (
    <div>
      <h2>Create Block</h2>
      {message && <div style={{ color: 'green' }}>{message}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          This Block:
          <input
            type="text"
            value={thisBlock}
            onChange={e => setThisBlock(e.target.value)}
          />
        </label>
        <br />
        <label>
          Next Block:
          <input
            type="text"
            value={nextBlock}
            onChange={e => setNextBlock(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateBlock;
