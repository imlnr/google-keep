import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, Button, IconButton, Input, TextField, Typography } from '@mui/material';
import Refresh from '@mui/icons-material/Refresh';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';



const Navbar = () => {
    const [islist, setislist] = useState(false);

    const listchange = () => {
        setislist((prev) => !prev)
    };

    return (
        <Box height={"65px"} paddingX={"1%"} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: "10%" }} width={"57%"}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconButton size='large'>
                        <MenuIcon fontSize='medium' />
                    </IconButton>
                    <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="keep-logo" />
                    <Typography display={"inline"} variant='h5'>Keep</Typography>
                </Box>
                <TextField fullWidth placeholder='Search' InputProps={{ startAdornment: (<IconButton size='large' sx={{ marginRight: "10px" }}><SearchIcon /></IconButton>) }} sx={{ borderRadius: "10px" }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: "16%" }}>
                <Box width={"55%"} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <IconButton size='large'>
                        <Refresh />
                    </IconButton>
                    {islist ? <IconButton size='large' onClick={listchange}><ViewListIcon fontSize='medium' /></IconButton> : <IconButton size='large' onClick={listchange}><GridViewIcon fontSize='medium' /></IconButton>}
                    <IconButton size='large'>
                        <SettingsIcon />
                    </IconButton>
                </Box>
                <Avatar alt='Profile' src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' />
            </Box>
        </Box>
    )
}

export default Navbar;