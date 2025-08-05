import React from 'react';

const offices = [
  {
    name: 'Indiranagar Workspace',
    rent: 55000,
    address: 'Indiranagar, Bangalore',
    image: 'https://via.placeholder.com/300x150?text=Office+1'
  },
  {
    name: 'HSR Layout Hub',
    rent: 65000,
    address: 'HSR Layout, Bangalore',
    image: 'https://via.placeholder.com/300x150?text=Office+2'
  },
  {
    name: 'Whitefield CoWork',
    rent: 48000,
    address: 'Whitefield, Bangalore',
    image: 'https://via.placeholder.com/300x150?text=Office+3'
  }
];

const OfficeList = () => {
  return (
    <div>
      {offices.map((office, i) => (
        <div key={i} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
          <h2>{office.name}</h2>
          <img src={office.image} alt={office.name} style={{ width: '300px' }} />
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OfficeList;
