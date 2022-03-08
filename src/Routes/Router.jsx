import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Address from '../components/Address';

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/address" element={<Address />} />
            </Routes>
        </div>
    );
}

export { Router };