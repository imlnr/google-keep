import React from 'react'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import MiniDrawer from './MiniDrawer';

import MainRoutes from '../AllRoutes/MainRoutes';

const Home = () => {
    return (
        <Box >
            <Navbar />
            {/* <MainRoutes/> */}
            <MiniDrawer/>
        </Box>
    )
}

export default Home