import React from 'react';
import jsonData from './gestionDesImages.json'


function Gelleries() {
  function GalerieImage() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div onClick={() => localStorage.setItem('fichierId', 0)} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: `url("${jsonData[0].imageCover}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center',
          maxWidth: '520px', width: '100%', height: '500px', margin: '10px'
        }}>
          <h1 style={{ fontSize: '130px', color: '#ffffff' }}>{jsonData[0].titre}</h1>
        </div>
        {jsonData.map((data, index) => (
          index > 0 && (
            <div onClick={() => localStorage.setItem('fichierId', index)} key={index} style={{
              display: 'flex', backgroundImage: `url("${data.imageCover}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center',
              width: '250px', height: '500px', margin: '10px'
            }}>
              <h1 style={{
                margin: '0',
                padding: '0',
                width: '50%',
                fontSize: '130px', color: '#ffffff', writingMode: 'vertical-rl', // vertical right-to-left
                textOrientation: 'upright', // lettres restent à l'horizontale
                whiteSpace: 'nowrap', // pour empêcher le texte de s'enrouler
                transform: 'rotate(0deg)',
              }}>{data.titre}</h1>
            </div>
          )))}
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

export default Gelleries;
