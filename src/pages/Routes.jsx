import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Auth'
import Frontend from './Frontend'
import Dashboard from './Dashboard'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Index = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/*" element={<Frontend />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/auth/*" element={<Auth />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Index