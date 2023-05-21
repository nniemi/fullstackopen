import React from 'react';

const PersonForm = ({ newName, newPhoneNumber, handleChange, handlePhoneChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
    <div>
      name: <input 
      value={newName}
      onChange={handleChange}
      />
    </div>
    <div>
    number: <input 
      value={newPhoneNumber}
      onChange={handlePhoneChange}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  );
};

export default PersonForm;