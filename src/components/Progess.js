import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Progress({value}){
const percentage = value;

return <CircularProgressbar 
value={percentage} 
text={`${percentage}%`} />;
}

export default Progress;