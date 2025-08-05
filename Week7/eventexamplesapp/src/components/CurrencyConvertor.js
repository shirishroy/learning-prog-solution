import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = () => {
    if (rupees && !isNaN(rupees)) {
      const converted = parseFloat(rupees) / 90;
      setEuro(converted.toFixed(2));
    } else {
      alert("Please enter a valid amount in INR.");
    }
  };

  return (
    <div>
      <h2>💱 Currency Converter</h2>
      <input
        type="text"
        placeholder="Enter amount in INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert to Euro</button>
      {euro && <p>€ {euro}</p>}
    </div>
  );
};

export default CurrencyConvertor;
