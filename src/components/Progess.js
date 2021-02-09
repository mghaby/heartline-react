import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Progress({value, total}){
const percentage = Math.floor(value/total);

return <CircularProgressbar 
value={percentage} 
text={`${percentage}%`} />;
}

export default Progress;