import './App.css';
import Slider from './components/Images';
import { Data } from "./components/Data";

function App() {

let props = {
    initialIndex: 0,
    transitionDuration: 400,
    autoplay: true,
    autoplayInterval: 3000,
    infiniteLoop: true,
    onPageChange: function(index){}
}

  return <Slider slides={[props, Data]}/>; 
}

export default App;
