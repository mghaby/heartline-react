import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Progress(props){
const percentage = props.value;

return <CircularProgressbar 
value={percentage} 
text={`${percentage}%`} />;
}

export default Progress;