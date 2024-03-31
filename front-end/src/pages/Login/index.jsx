import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchUserThunk } from "../../features/authSlice";
import { loginUserThunk } from '../../features/authSlice'
import { useEffect, useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token)
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
      if (token) {
        dispatch(fetchUserThunk(token));
      }
    }, [token, dispatch]);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginUserThunk({ email, password }));
      };
    
      if (isAuthenticated) {
        return <Navigate to="/profile"/>;
      }

    return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={email}  onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">Sign In</button>
        </form>
      </section>
    </main>
    );
};

export default Login