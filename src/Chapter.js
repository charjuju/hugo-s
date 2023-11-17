import React from 'react';
//import jsonData from './gestionDesImages.json'


function Book() {
  function GalerieImage() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <p>CACA</p>
      </div>
    )
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <GalerieImage />
      </div>
    </div>
  );
}

export default Book;
