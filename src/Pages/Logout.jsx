import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-background text-primary">
                <h1 className="text-4xl font-bold mb-8">Application is Logged Out</h1>
                <Link to="/mymoves" className="hover:bg-orange-600 bg-orange-500 text-white text-primary-foreground px-8 py-4 rounded-lg shadow-md hover:bg-primary/80 transition-colors">Login To Continue</Link>
            </div>
        </div>
    )
}

export default Logout