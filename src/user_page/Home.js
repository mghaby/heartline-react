import React from 'react'
import Progress from './components/Progess'
import OutlinedButtons from './components/Button'

function Home() {
    return (
      <div>
          <h1>Index Page</h1>
          <div style={{width:200}}><Progress /></div>
          <OutlinedButtons />
      </div>
      
  
    );
  }
  
  
  export default Home;
  