import spinner from './spinner.gif';
// import './loading.css'
import { Load } from './StyleLoad.style';


const Loading = () => {
  return (
    <Load>
      <img src={spinner} alt="Loading" className='loading-img' />
    </Load>
  );
};

export default Loading;
