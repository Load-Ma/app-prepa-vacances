import React from 'react';

import {MenuProvider} from 'react-native-popup-menu';
import NavBar from "./src/navigation/navigation";

export default function App() {
    return (
        <MenuProvider>
            <NavBar/>
        </MenuProvider>
    );
}
