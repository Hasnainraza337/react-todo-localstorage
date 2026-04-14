import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const Auth = () => {
    return (
        <main>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </main>
    )
}

export default Auth