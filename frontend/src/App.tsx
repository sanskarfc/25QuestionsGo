import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import routes, { roomProps } from './routes';


const App: React.FC = () => {
    const [previousRooms, setPreviousRooms] = useState<string[]>([]);

    roomProps.updatePreviousRooms = (room) => {
        if (previousRooms[0] === room) return;
        let newRooms = [...previousRooms];
        newRooms.unshift(room);
        newRooms.slice(0,40);
        setPreviousRooms(newRooms);
    };

    useEffect(() => {
        const prevRoomsString = localStorage.getItem('previousRooms');
        if (prevRoomsString) {
            setPreviousRooms(JSON.parse(prevRoomsString).previousRooms);
        }
    }, []); 

    useEffect(() => {
        localStorage.setItem('previousRooms', JSON.stringify({ previousRooms }));
    }, [previousRooms]); 

    return (
        <div className="home">
            <h1>trial</h1>
        </div>
    );
}; 

export default App;
