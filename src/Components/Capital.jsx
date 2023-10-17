import React from 'react'
import './Capital.css'

const Capital = () => {
  return (
    <div>
      <div class="row">
        <div class="offset-sm-2 card1 col-sm-4 mb-3 mb-sm-0">
            <div class="card p-3 card1 bg-light border-0">
                <h5 class="card-title fw-bolder">Looking to raise capital for your growing business?</h5>
                <p class="card-text text-secondary mt-3 mb-4">Whether expanding or opening a brand-new concept, we make it easy to raise money from thousands of local investors.</p>
                <button type="button" className="btn btCap btn-primary rounded-0">APPLY ONLINE</button>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card imgCap bg-light border-0">
            </div>
        </div>
    </div>
    </div>
  )
}

export default Capital
