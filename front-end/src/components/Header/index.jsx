import { Link } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.png"
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../features/authSlice';

const Header = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
            <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
        {
        isAuthenticated ? 
            <button onClick={handleLogout}>Logout</button>
            : 
            <Link className="main-nav-logo" to="/login">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link >
        }
        </div>
        </nav>
    );
};
    
export default Header