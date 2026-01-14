import React from 'react'
import "./titlecard.css"
import cards_data from '../../assets/cards/Cards_data'
function TitleCard() {
  return (
    <div className='title-card'>
      <h2>Popular on netflix</h2>
      <div className="card-list">
        {
          cards_data.map((card, index)=>{
              return <div className="card" key={index}>
                  <img src={card.image} alt=""/>
                  <p>{card.name}</p>
              </div>
          })
        }
      </div>
    </div>
  )
}

export default TitleCard