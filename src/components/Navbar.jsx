import { FaSearch,
    FaShoppingBag,
   
         
} from 'react-icons/fa';
function Navbar() {
    return (
        <nav className="container flex justify-evenly p-6 items-center sticky top-0 z-30 bg-gray-100">
           
            <a href="">
                <img className="w-6 h-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Logo" width="50" />
            </a>
            <ul className="flex justify-between gap-7 items-center cursor-pointer">
                <li>Store</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Mac</li>
                <li>Watch</li>
                <li>Airpods</li>
                <li>Tv & Home</li>
                <li>Entertainment</li>
                <li>Accessories</li>
                <button><FaSearch/></button>
              <button><FaShoppingBag/></button>
              
            </ul>
        </nav>
    );
}

export default Navbar;