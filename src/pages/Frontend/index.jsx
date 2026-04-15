import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Todos from './Todos'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Frontend = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/todos' element={<Todos />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default Frontend