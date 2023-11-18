import React from "react";

function Info() {

  /*
  function diviserEnPhrases(chaine, delimiteur) {
    // Utiliser la méthode split pour diviser la chaîne en phrases
    const phrases = chaine.split(delimiteur);

    // Supprimer les espaces vides au début et à la fin de chaque phrase
    const phrasesPropres = phrases.map(phrase => phrase.trim());

    return phrasesPropres;
  }
  */
  
    function AboutMe() {
      function CarrePhoto() {
        return (
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '50%', minWidth: '250px', justifyContent: 'space-around', gap: '20px'}}>
          <img style={{ width: '48%', minWidth: '250px' }} src="/aboutMe/1.jpeg" alt="about me" />
        </div>
        )
      }
  
      return (
          <div style={{ display: 'flex', width: '70%', flexWrap: 'wrap', marginTop: '150px', justifyContent: 'center'}}>
            <div style={{width: '50%', minWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <h2>About me</h2>
              <p>Photographer in toup du cul du monde, available worldwide.</p>
              <p>Contact:   +33 7 77 76 15 94  –  hugosegato@gmail.com</p>
            </div>
            <CarrePhoto />
            <p>Contact:   +33 7 77 76 15 94  –  hugosegato@gmail.com</p>
          </div>
      )
    }
    
    /*
  function AboutMe() {

    function Lasagne1({ titre, description, imgsrc }) {
      return (
        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ width: '45%', minWidth: '250px' }}>
            <h1 style={{ marginLeft: '20px' }}>{titre}</h1>
            {description.map((descriptionP, index) => (
              <p style={{ marginLeft: '3vw' }}>{descriptionP}</p>
            ))}
          </div>
          <img style={{ width: '45%', minWidth: '250px' }} src={imgsrc} alt="about me" />
        </div>
      )
    }

    function Lasagne2({ titre, description, imgsrc }) {
      return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row-reverse', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ width: '45%', minWidth: '250px' }}>
            <h1 style={{ marginLeft: '20px' }}>{titre}</h1>
            {description.map((descriptionP, index) => (
              <p style={{ marginLeft: '3vw' }}>{descriptionP}</p>
            ))}
          </div>
          <img style={{ width: '45%', minWidth: '250px' }} src={imgsrc} alt="about me" />
        </div>
      )
    }

    return (
      <div style={{ width: '60%' }}>
        <Lasagne1 imgsrc="/aboutMe/1.jpeg" description={diviserEnPhrases("SEGATO Hugo* *Diplômé de l'ITM Graduate School Le Mans", '*')} titre="Qui suis-je ?" />
        <Lasagne2 imgsrc="/aboutMe/1.jpeg" description={diviserEnPhrases("Journaliste Essayiste Automobile*Photographe professionnel", '*')} titre="Mon domaine" />
      </div>
    )
  }
*/
  function Publication() {
    return (
      <div></div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '60px' }}>
      <AboutMe />
      <Publication />
    </div>
  );
}

export default Info;
