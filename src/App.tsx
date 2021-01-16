import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
// import ImageList from './components/imageList';
import logo from './logo.png';

const App = () => {
    // const [images, setImages] = useState([]);

    return (
        <div className='ui container' style={{marginTop:'20px'}}>
            <img src={logo} alt='pixabay-logo' className='pixabay-logo' />
            <SearchBar  />
        </div>
    );
};

export default App;