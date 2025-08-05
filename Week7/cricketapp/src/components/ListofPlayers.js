import React from 'react';

const players = [
  { name: 'Virat Kohli', score: 95 },
  { name: 'Rohit Sharma', score: 88 },
  { name: 'Hardik Pandya', score: 63 },
  { name: 'Shubman Gill', score: 71 },
  { name: 'MS Dhoni', score: 99 },
  { name: 'KL Rahul', score: 58 },
  { name: 'Ravindra Jadeja', score: 77 },
  { name: 'Bumrah', score: 42 },
  { name: 'Ashwin', score: 75 },
  { name: 'Yuzi Chahal', score: 55 },
  { name: 'Surya Kumar', score: 60 },
];

const ListofPlayers = () => {
  const filtered = players.filter(p => p.score < 70);
  return (
    <div>
      <h2>Players with Score Below 70</h2>
      <ul>
        {filtered.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
