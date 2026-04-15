import { Button, message } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        setUser(user)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("user");
        message.success("Logout Successfully")
        setUser(null)
        navigate("/auth/login")
    }

    return (
        <header className="bg-gray-50 border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Logo Section */}
                <div className="shrink-0 font-bold text-xl text-blue-600">
                    <Link to="/">HR</Link>
                </div>

                {/* Desktop Links  */}
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                    <Link to="/about" className="hover:text-blue-600 transition">About</Link>
                    <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
                    <Link to="/todos" className="hover:text-blue-600 transition">Todos</Link>
                </ul>

                {/* Desktop Buttons  */}
                <div className="hidden md:flex items-center gap-4">
                    {!user
                        ? <>
                            <Link to="/auth/login" className="text-sm font-medium border-2 border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                                Login
                            </Link>
                            <Link to="/auth/register" className="text-sm font-medium bg-blue-600 border-2 border-blue-600 text-white px-5 py-2 rounded-lg hover:shadow-md transition-all">
                                Register
                            </Link>
                        </>
                        : <>
                            <Link to="/dashboard" className="text-sm font-medium border-2 border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                                Dashboard
                            </Link>
                            <Button size="large" type="primary" danger onClick={handleLogout}>Logout </Button>
                        </>
                    }
                </div>

                {/* Mobile Menu Button (Visible only on Mobile) */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 hover:text-blue-600 focus:outline-none"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar/Menu (Conditional Rendering) */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1">
                    <Link to="/" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">Home</Link>
                    <Link to="/about" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">About</Link>
                    <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">Contact</Link>
                    <Link to="/todos" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">Todos</Link>
                    <hr className="my-2" />
                    <div className="flex flex-col gap-2">
                        {!user
                            ? <>
                                <Link to="/auth/login" className="text-sm font-medium border-2 border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                                    Login
                                </Link>
                                <Link to="/auth/register" className="text-sm font-medium bg-blue-600 border-2 border-blue-600 text-white px-5 py-2 rounded-lg hover:shadow-md transition-all">
                                    Register
                                </Link>
                            </>
                            : <>
                                <Link to="/dashboard" className="text-sm font-medium border-2 border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                                    Dashboard
                                </Link>
                                <Button size="large" type="primary" danger onClick={handleLogout}>Logout </Button>
                            </>
                        }
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;