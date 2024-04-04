import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Archive from '../pages/Archive'
import Recycle from '../pages/Recycle'
import EditLabel from '../pages/EditLabel'
import Notes from '../pages/Notes'
import Reminders from '../pages/Reminders'

const MainRoutes = () => {
    return (
        // api: https://google-keep-bz4w.onrender.com
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/archive' element={<Archive />} />
            <Route path='/bin' element={<Recycle />} />
            <Route path='/edit' element={<EditLabel />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/reminder' element={<Reminders />} />
        </Routes>
    )
}

export default MainRoutes