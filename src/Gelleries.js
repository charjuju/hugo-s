import React, { useState, useEffect } from 'react';

function Gelleries() {
  const [jsonData, setJsonData] = useState(null);
  const [fichierSelectioner, setFichierSelectioner] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Chemin vers votre fichier JSON dans le dossier public
        const response = await fetch('/gestionDesImages.json');

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération du fichier JSON');
        }

        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Erreur :', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {jsonData ? (
        <div style={{ display: 'flex' }}>
          <div onClick={() => setFichierSelectioner(jsonData[0])} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: `url("${jsonData[0].imageCover}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center',
            width: '500px', height: '500px', margin: '10px'
          }}>
            <h1 style={{ fontSize: '130px', color: '#ffffff' }}>{jsonData[0].titre}</h1>
          </div>
          {jsonData.map((data, index) => (
            index > 0 && (
              <div onClick={() => setFichierSelectioner(data)} key={index} style={{
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
      ) : (
        <p>Chargement en cours...</p>
      )}
      {fichierSelectioner !== null ? <div>
        caca
      </div> : <div />}
    </div>
  );
}

export default Gelleries;
