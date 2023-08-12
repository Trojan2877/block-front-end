import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

function BlockList() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    async function fetchBlocks() {
      try {
        const fetchedBlocks = await ApiService.get('http://localhost:8081/block');
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
            <strong>Block:</strong> {block.block}, <strong>Next Block:</strong> {block.nextBlock}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlockList;
