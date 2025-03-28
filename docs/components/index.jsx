import React from 'react';

const Title = ({ text }) => {
  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    margin: '20px 0',
    padding: '10px',
    borderBottom: '2px solid #eee',
  };

  return <h1 style={titleStyle}>{text}</h1>;
};

export default Title;
