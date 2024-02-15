import '../style/Scroller.scss'; // Import the SCSS file for styling
import React from 'react';

const HorizontallyScrollableComponent = () => {
  return (
    <div className="horizontally-scrollable">
      <h2 className='h2Style'>Highlights</h2>
      <div className="scroll-container">
        <div className='inline'>
          <img className='scrolImg block' src="https://www.spit.ac.in/wp-content/uploads/2020/02/NMIMS_HackNCode-12thOct_2019_resized-150x150.png   " alt="" />
          <h3 className='h2Style  centre'>xyz hddkdkd</h3>
        </div>
        <div className='inline'>
          <img className='scrolImg block' src="https://www.spit.ac.in/wp-content/uploads/2021/03/Anushka_SE-150x150.jpg" alt="" />
          <h3 className='h2Style  centre'>xyz hddkdkd</h3>
        </div>
        <div className='inline'>
          <img className='scrolImg block' src="https://www.spit.ac.in/wp-content/uploads/2020/02/TEIT-150x150.png" alt="" />
          <h3 className='h2Style  centre'>xyz hddkdkd</h3>
        </div>
        <div className='inline'>
          <img className='scrolImg block' src="https://www.spit.ac.in/wp-content/uploads/2020/02/5_BITS_resized-150x150.png" alt="" />
          <h3 className='h2Style  centre'>xyz hddkdkd</h3>
        </div>
        <div className='inline'>
          <img className='scrolImg block' src="https://www.spit.ac.in/wp-content/uploads/2020/02/TEIT-150x150.png" alt="" />
          <h3 className='h2Style  centre'>xyz hddkdkd</h3>
        </div>
        <div className='inline'>
          <img className='scrolImg block' src="https://www.spit.ac.in/wp-content/uploads/2021/03/Anushka_SE-150x150.jpg" alt="" />
          <h3 className='h2Style  centre'>xyz hddkdkd</h3>
        </div>
      </div>
    </div>
  );
};

export default HorizontallyScrollableComponent;
