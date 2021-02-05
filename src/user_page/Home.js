import React from 'react'
import Calories from './Calories'
import Water from './Water'
import BMI from './BMI'
import Weight from './Weight'

function Home() {
    return (
      <div>
          <Calories />
          <Water />
          <BMI value={30}/>
          <Weight />
      </div>
      
  
    );
  }
  
  
  export default Home;
  