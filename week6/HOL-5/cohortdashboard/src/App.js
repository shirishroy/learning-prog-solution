import React from 'react';
import CohortDetails from './CohortDetails';

const cohorts = [
  { name: 'React Bootcamp', status: 'ongoing', startDate: '2025-07-01', endDate: '2025-08-01' },
  { name: 'NodeJS Mastery', status: 'completed', startDate: '2025-05-01', endDate: '2025-06-01' }
];

function App() {
  return (
    <div className="App">
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
