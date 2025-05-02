import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Header from '../../components/header';
import Blogs from './blogs';

import Footer from '../../components/footer/index.';

const Home = () => {
  
  return (
    <div className="bg-white text-gray-800">
   
      
  <Header/>
  <div className="center-image">
        <img src="https://www.womanlog.com/getimage?key=7ea568db27821f7d68b5bf3cd28abda4d1157768a1c2be901ba08aa0e8383001" alt="Center" style={{marginTop:"-120px"}} />
      </div>
      <div className="right-image">
        <img
          src="https://www.zeytin.pk/ext_iframe/envato/lucha/assets/images/slider/shape-img2.svg"
          alt="Right"
        />
      </div>
      <div className="left-image">
        <img
          src="https://www.zeytin.pk/ext_iframe/envato/lucha/assets/images/slider/shape-img2.svg"
          alt="Left"
        />
      </div>
    
 <section className="blogs-section my-blogs">
  <h2 className="section-title">My Blogs</h2>
  <div className="blogs-grid">
    <Blogs title="My PCOS Journey" date="April 20, 2025" description="How I overcame the toughest phase of my hormonal imbalance..." />
    <Blogs title="Healthy Eating Tips" date="April 10, 2025" description="Simple dietary changes that helped me balance my hormones." />
  </div>
</section>

<section className="blogs-section pcos-blogs">
  <h2 className="section-title">Related to PCOS</h2>
  <div className="blogs-grid">
    <Blogs title="What is PCOS?" description="Understanding symptoms, causes, and treatments." />
    <Blogs title="Exercise Tips for PCOS" description="How daily walks and yoga can make a difference." />
  </div>
</section>


<section className="blogs-section menarche-blogs">
  <h2 className="section-title">Related to Menarche</h2>
  <div className="blogs-grid">
    <Blogs title="Menarche Explained" description="First periods and what to expect as a teen." />
    <Blogs title="How to Educate Young Girls" description="Importance of early menstrual education." />
  </div>
</section>


<section className="blogs-section menopause-blogs">
  <h2 className="section-title">Related to Menopause</h2>
  <div className="blogs-grid">
    <Blogs title="Menopause Signs" description="Hot flashes, mood swings, and how to cope." />
    <Blogs title="Staying Healthy After 50" description="Tips for diet, fitness, and emotional well-being." />
  </div>
</section> 

<Footer/>




    </div>
  
  );
};

export default Home;
