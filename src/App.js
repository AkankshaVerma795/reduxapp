
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Cart from './pages/Cart';
import Product from './components/Product';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">          
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" ></Route>
                        <Route path="/cart" ></Route>
                        <Route path="/components/Product" ></Route>
                    </Routes>
                </BrowserRouter>
        
        </div>
    );
}

export default App;