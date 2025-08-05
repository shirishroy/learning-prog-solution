import React from 'react';

const IndianPlayers = () => {
  const T20 = ['Kohli', 'Rohit', 'Pandya'];
  const Ranji = ['Jaiswal', 'Sarfaraz', 'Iyer'];

  const [odd, even] = [[...T20, ...Ranji].filter((_, i) => i % 2), [...T20, ...Ranji].filter((_, i) => i % 2 === 0)];

  return (
    <div>
      <h2>Indian Players - Odd Team</h2>
      <ul>{odd.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h2>Indian Players - Even Team</h2>
      <ul>{even.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
