import React from 'react';
import './Reset.css';

export default function Reset({ resetBoard }) {
  return (
    <button className='reset' onClick={resetBoard}>
      Reset
    </button>
  );
}
