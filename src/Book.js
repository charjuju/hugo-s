import React from 'react';
import jsonData from './gestionDesImages.json'


function Book() {
  const bookPick = localStorage.getItem('Book') ? localStorage.getItem('Book') : '0'
  const bookInfo = jsonData[bookPick].book

  console.log(bookInfo)
  function GalerieImage() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {jsonData.map((data, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div onClick={() => localStorage.setItem('Book', index)} style={{
              display: 'flex', backgroundImage: `url("${data.imageCover}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center',
              width: '400px', height: '250px', margin: '10px', overflow: 'hidden', cursor: 'pointer'
            }}>
            </div>
            <h2 style={{ marginTop: '0px' }}>{data.titre}</h2>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <GalerieImage />
      </div>
    </div>
  );
}

export default Book;
