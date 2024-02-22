import React from 'react'
import Banner from '../components/banner/Banner'
import heroImage from '../assets/heroImage.jpg'

function Home() {
  return (
    <div className='flex flex-col md:flex-row w-full'>
      <div className='w-full md:flex md:flex-row md:items-stretch'>
        <Banner />
        <img src={heroImage} alt="Australian Shepherd puppies" className='flex-grow md:w-2/3 mt-6 md:mt-0' />
      </div>
    </div>
  );
}

export default Home;
