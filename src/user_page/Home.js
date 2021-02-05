import React from 'react'
import Calories from './Calories'
import BMI from './BMI'

function Home() {
    return (
      <div>
          <Calories />
          <BMI value={30}/>
      </div>
      
  
    );
  }
  
  
  export default Home;
  