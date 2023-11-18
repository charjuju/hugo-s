import React from 'react';
import jsonData from './gestionDesImages.json'


function Chapter() {
  const bookPick = localStorage.getItem('Book') ? localStorage.getItem('Book') : '0'
  const ChapterPick = localStorage.getItem('Chapter') ? localStorage.getItem('Chapter') : '0'
  const ChapterInfo = jsonData[bookPick].book[ChapterPick].chapter

  console.log(ChapterInfo)
  function GalerieImage() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {ChapterInfo.file.map((data, index) => (
         <div key={index}>
           <img style={{maxWidth: '100vw', maxHeight: '90vh', margin: '5px'}} alt={`${ChapterInfo.path}${data}`} src={`${ChapterInfo.path}${data}`}/>
         </div>
        ))}
      </div>
    )
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
        <GalerieImage />
      </div>
    </div>
  );
}

export default Chapter;
