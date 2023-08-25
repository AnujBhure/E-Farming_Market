import { Link } from "react-router-dom";
import Wholesalers from "./Wholesaler";
import Order from "./Order";
import Farmerview from "./Farmer";
export default function Admin() {
    return (
        <div>
            <nav className='navbar navbar-expand-sm bg-light mb-3'>
                <div className='container-fluid'>
                    <ul class="nav navbar">
                        <li class="nav-item">
                            <Link to="/Wholesalers" className='nav-link px-3'>Wholesalers</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Farmerview" className='nav-link px-3'>Farmer Details</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Order" className='nav-link px-3'>View customers</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/home" className='nav-link px-3'>Log Out</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}