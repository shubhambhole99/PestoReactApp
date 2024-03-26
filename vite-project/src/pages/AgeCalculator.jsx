import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Result from './Result';

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);
  const [error, setError] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const inputDate = new Date(birthdate);

    if (isNaN(inputDate.getTime())) {
      setError('Please enter a valid date.');
      return;
    }

    if (inputDate.getTime() > today.getTime()) {
      setError('Birthdate cannot be in the future.');
      return;
    }

    const diff = today.getTime() - inputDate.getTime();
    const ageDate = new Date(diff);
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    setAge({ years, months, days });
    setError('');
  };

  return (
    <div className="age-calculator">
      <TextField
        type="date"
        label="Enter Birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={calculateAge}>
        Calculate Age
      </Button>
      {error && <Typography color="error">{error}</Typography>}
      {age && <Result age={age} />}
    </div>
  );
};

export default AgeCalculator;
