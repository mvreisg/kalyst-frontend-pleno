'use client'
import './globals.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import ProductPanel from '@/components/products/ProductPanel';
import AddPanel from '@/components/products/AddPanel';

export default function Home(){                
    return (
        <Router>
            <Routes>
                <Route path="/add" element={<AddPanel/>}/>                
                <Route path="/" element={<ProductPanel/>}/>
            </Routes>
        </Router>
    );
}