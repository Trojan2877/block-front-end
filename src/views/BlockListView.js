// views/BlockListView.js
import React, { useState, useEffect } from 'react';
import BlockController from '../controllers/BlockController';

function BlockListView() {
  const [blocks, setBlocks] = useState([]);
  const blockController = new BlockController();

  useEffect(() => {
    async function fetchBlocks() {
      try {
        const fetchedBlocks = await blockController.getBlocks();
        setBlocks(fetchedBlocks);
      } catch (error) {
        console.error('Error fetching blocks:', error);
      }
    }

    fetchBlocks();
  }, []);

  return (
    <div>
      <h2>Block List</h2>
      <ul>
        {blocks.map(block => (
          <li key={block.id}>
            <p>ID: {block.id}</p>
            <p>Block: {block.block}</p>
            <p>Next Block: {block.nextBlock}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlockListView;
