import WeightLog from './WeightLog';
// import Nav from './Nav';

function Landing() {
    return(
        <div>
        {/* <Nav /> */}
        <h1>HealthLine</h1>
        <h3>Health Made Easy</h3>
        <hr/>
        <h3 style={{textAlign: 'left', margin : '10px'}}>Join the group of successful people as seen below!</h3>
        <WeightLog />
        </div>
    )
}


export default Landing;