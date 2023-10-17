import React from 'react'
import './Baniere.css'

const Baniere = () => {
  return (
    <div className='myBaniere'>
      <div className='bleu'></div>
      <div className="texts">
        <h1>Meaningful investment in<br />Main Street businesses</h1>
        <p>Browse vetted investment offerings in<br />communities all over the US.</p>
        <button type="button" className="btn btn-primary start rounded-0">GET STARTED</button>
      </div>
    </div>
  )
}

export default Baniere
