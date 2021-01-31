import React from 'react';

const UserInput = ({ username, onInputChanged }) => {
   const inputStyle = {
      border: '2px solid red'
   };

   return (
      <input style={inputStyle} type="text" value={username} onChange={onInputChanged} />
   );
}

export default UserInput;