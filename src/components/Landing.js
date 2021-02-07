import '../index.css';
import WeightLog from './WeightLog';


function Landing() {
    return(
        <div>
        <h1 style={{textAlign: 'center', color: '#00B4D8'}}>HealthLine</h1>
        <h3 style={{textAlign: 'center', color: '#00B4D8'}}>Health Made Easy</h3>
        <hr/>
        <h3 style={{textAlign: 'left', margin : '10px', color: '#023e8a'}}>Join the group of successful people, working towards their goals, as seen below!</h3>
        <br/>
        <WeightLog />
        </div>
    )
}


export default Landing;