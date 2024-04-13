import { Link } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.png"
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../features/authSlice';
import './style.css'


const Header = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const userData = useSelector((state) => state.auth.userData)
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
        isAuthenticated && userData && userData.body &&(
            <div className="sign-out">
                <i className="fa fa-user-circle"></i>
                <span className="firstname">{userData.firstName ? userData.firstName : userData.body.firstName }
                    </span>
                <i onClick={handleLogout} className="fa fa-sign-out"></i>
            </div> )}
           {!isAuthenticated && (
            <Link className="main-nav-logo" to="/login">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link >
        )}
        </div>
        </nav>
    );
};
    
export default Header