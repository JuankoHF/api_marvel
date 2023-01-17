import 'semantic-ui-css/semantic.min.css' //de la pad oficial https://react.semantic-ui.com/usage
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Comics from './pages/Comics';
import Error from './pages/Error404';
import Header from './components/Header/Header';
import Characters from './components/Characters/Characters';

function App() {
  
  //const example = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=f141311633d9fb3a108bfb54ec1d73d5&hash=7a4df28f8ad9b0ec4a811a5c69eec069');

  //console.log(example);
  return (
    <div>
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/inicio' element= {<Home/>} />
        <Route  path='/series' element= {<Series />} />
        <Route  path='/comics' element= {<Comics />} />
        <Route  path='/characters' element= {<Characters />} />
        <Route path='*' element= {<Error />} />
      </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
