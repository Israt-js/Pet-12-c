
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from './Firebase/Firebase.config';
import { AuthContext } from './Provider/AuthProvider';

const Login = () => {
    // const authInfo = { user, createUser, signInUser, logOut, loading, signInWithGithub };
  const { signInUser, signInWithGithub } = useContext(AuthContext);
  const [user, setUser] = useState('')
  const [loginError, setLoginError] = useState('');
  const [success, setSuccess] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  console.log('location in login page',location)

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        setSuccess('Successfully created User');
        toast.success('Successfull!', {
  
        });
        e.target.reset();
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.log(error);
        setLoginError(error.message);
      })
  };

  const handleLogInWithPopup = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(result => {
        // const user = result.user;
        console.log(result.user)
        setUser(user);
    })
    .catch(error => {
        console.log('error', error.message)
    })
  }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200 flex">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl ml-80 mr-24">
        <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-orange-400 text-white">Login</button>
            </div>
          </form>
          <ToastContainer></ToastContainer>
          {loginError && <p className="text-red-600 text-xl">{loginError}</p>}
          <div className="">
            <button  className='btn w-full bg-orange-400 mb-2' onClick={handleLogInWithPopup}> <FaGoogle /> Google login</button>
            <button onClick={signInWithGithub} className='btn w-full bg-orange-400 text-white'> <FaGithub></FaGithub> Github</button>
      </div>
      <p className='text-2xl font-medium text-center p-5'>Don't have an account? <Link to={'/register'}>Register</Link></p>
        </div>
        <div className="">
           <img className="h-96 w-96" src="https://i.ibb.co/dBPg1Yw/438065230-462939463083308-3398277295200122591-n-removebg-preview.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
