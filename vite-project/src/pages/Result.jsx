import React from 'react';

const Result = ({ age }) => {
  const { years, months, days } = age;

  return (
    <div className="result">
      <h2>Age</h2>
      <p>Years: {years}</p>
      <p>Months: {months}</p>
      <p>Days: {days}</p>
    </div>
  );
};

export default Result;
