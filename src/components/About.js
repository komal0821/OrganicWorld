
import React from 'react';
import './About.css';
import about1 from '../assets/ab1.jpg';
import about2 from '../assets/ab2.jpg';
import about3 from '../assets/about3.webp';
import about4 from '../assets/about4.jpg';
import about5 from '../assets/ab.jpg';
import about6 from '../assets/ab3.png';

const About = () => {
  return (
    <div className='about'>
          <div className="image-grid">
              <div className='cont'>
        <div className="image-box">
            <img src={about1} alt='about1' />
            <h3>Broccoli</h3>
          <div className="description">
        <p>Broccoli is a highly nutrient-dense vegetable, rich in vitamins, minerals, and antioxidants. It contains vitamins C, K, and A, as well as folate, fiber, and various phytonutrients. These nutrients play crucial roles in supporting overall health and can contribute to better fitness outcomes.</p>
            </div>
            <button className='button'>Read More</button>
                  </div>
                  </div>
        <div className='cont'>
        <div className="image-box">
            <img src={about2} alt='about2' />
            <h3>Spinach</h3>
          <div className="description">
        <p>Spinach is a nutritious leafy, green vegetable that may benefit skin, hair, and bone health. Additionally, this vegetable provides minerals and vitamins that can confer a range of benefits.spinach include improving blood glucose control in people with diabetes, and improving bone health.</p>
            </div>
            <button className='button'> Read More</button>
                  </div>
                  </div>
        <div className='cont'>
        <div className="image-box">
            <img src={about3} alt='about3' />
            <h3>Cucumber</h3>
          <div className="description">
        <p>Eating cucumber may help lower blood sugar, prevent constipation, and support weight loss. To maximize cucumber’s health benefits, eat the peel,too.Cucumbers are low in calories and contain a good amount of water , making them ideal for promoting hydration and aiding in weight loss.</p>
            </div>
            <button className='button'> Read More</button>
                  </div>
                  </div>
       <div className='cont'>
        <div className="image-box">
            <img src={about4} alt='about4' />
            <h3>Bitter Gourd</h3>
          <div className="description">
        <p>Bitter gourd is low in calories, with only 17 calories per 100 grams.Bitter gourd is rich in vitamin C, containing 33 milligrams per 100 grams.Karela is a good source of folate, providing 72 micrograms per 100 grams.Bitter gourd extracts can lower blood glucose levels by 1.06-4.29% and reduce total cholesterol by 6.04-6.70%. </p>
            </div>
            <button className='button'> Read More</button>
                  </div>
                  </div>
         <div className='cont'>
        <div className="image-box">
            <img src={about5} alt='about5' />
            <h3>Lettuce</h3>
          <div className="description">
        <p>Red leaf lettuce (Lactuca sativa) is a leafy vegetable in the daisy family.It resembles romaine lettuce except in its tips, which have a red or purple tinge.Aside from adding a burst of color to your favorite salad or sandwich, this vegetable offers numerous benefits.Water makes up over 95% of raw lettuce.  </p>
            </div>
            <button className='button'> Read More</button>
                  </div>
                  </div>
       <div className='cont'>
        <div className="image-box">
            <img src={about6} alt='about6' />
            <h3>Lady Finger</h3>
          <div className="description">
        <p>Lady finger is a good source of vitamin C, which is important for immune function and collagen production.The fibre in lady finger can help promote feelings of fullness and reduce appetite.Consuming lady finger may help improve gut health by promoting the growth of beneficial bacteria in the intestines. </p>
            </div>
            <button className='button'> Read More</button>
                  </div>
                  </div>
      </div>
    </div>
  );
};

export default About;
