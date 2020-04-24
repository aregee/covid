import React from 'react';
import Precaution from './Precaution';
import Symptom from './Symptom';
import Transmission from './Transmission';
import { Card } from 'design-system';
import './Info.css';

const CovidInfo = () => {
  return (
    <Card
      shadow="medium"
      style={{
        minHeight: '526px',
        padding: '16px',
        backgroundColor: 'white'
      }}
    >
      <Precaution />
      <Symptom />
      <Transmission />
    </Card>
  );
};

export default CovidInfo;
