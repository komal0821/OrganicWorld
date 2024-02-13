import React from 'react'
import './Gallery.css';
import icon1 from '../icons/land.png';
import icon2 from '../icons/vegetable.png';
import icon3 from '../icons/bio.png';
import icon4 from '../icons/gardening.png'
import icon5 from '../icons/diet.png'
import icon6 from '../icons/skin-care.png'

const Gallery = () => {
  return (
     <div className='Gallery'>
          <div className="icons-grid">
              <div className='cont1'>
        <div className="gallery-box">
            <img src={icon1} alt='icon1' />
            <h3>Organic Farmic Techniqies</h3>
          <div className="desc">
        <p>Showcase images of organic farms demonstrating various sustainable farming practices such as crop rotation, composting, and natural pest control methods.</p>
            </div>
                  </div>
              </div>
              
              <div className='cont1'>
        <div className="gallery-box">
            <img src={icon2} alt='icon2' />
            <h3>Organic Produce</h3>
          <div className="desc">
        <p>Display a variety of organic fruits, vegetables, and herbs grown without synthetic pesticides or fertilizers.Organic foods can also be more environmentally friendly.</p>
            </div>
                  </div>
              </div>
              
               <div className='cont1'>
        <div className="gallery-box">
            <img src={icon3} alt='icon3' />
            <h3>Eco-Friendly Packaging</h3>
          <div className="desc">
        <p>Showcase environmentally friendly packaging options used by organic brands,such as compostable bags,recycled materials, biodegradable and minimal packaging waste.</p>
            </div>
                  </div>
              </div>
              
            <div className='cont1'>
        <div className="gallery-box">
            <img src={icon4} alt='icon4' />
            <h3>Organic Gardening</h3>
          <div className="desc">
        <p>Organic gardening helps to prevent a loss of topsoil, toxic runoff, water pollution, soil contamination, soil poisoning, death of insects,birds, critters and other beneficial soil organisms.</p>
            </div>
                  </div>
              </div>

          <div className='cont1'>
        <div className="gallery-box">
            <img src={icon5} alt='icon5' />
            <h3>Organic Food Preparation</h3>
          <div className="desc">
        <p>Organic foods are minimally processed without artificial ingredients or synthetic preservatives to maintain the integrity of the product that began with practices on the farm.</p>
            </div>
                  </div>
              </div>

         <div className='cont1'>
        <div className="gallery-box">
            <img src={icon6} alt='icon6' />
            <h3>Organic Beauty Routines</h3>
          <div className="desc">
        <p>A fully equipped skincare routine order would include a cleanser, exfoliator, optional masks and toners, serum, eye cream, moisturizer, face oil and, lastly, sunscreen.</p>
            </div>
                  </div>
              </div>

      </div>
    </div>
  )
}

export default Gallery