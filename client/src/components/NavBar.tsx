// Add onHomeClick to the component's props
const NavBar = ({ onHomeClick }) => {
    return (
        <nav className="bg-gray-900 shadow-md relative z-10">
            <div className="flex justify-between items-center px-6 py-4">
                {/* Potentially add your logo/brand here */}

                <div className="flex space-x-4">
                    {/* Code Share Button */}
                    <button
                        className="text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-200 ease-in-out"
                    >
                        Code Share
                    </button>

                    {/* Home Button - Add onClick handler */}
                    <button
                        className="text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-200 ease-in-out"
                        onClick={onHomeClick} // Call the passed function when clicked
                    >
                        Home
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;