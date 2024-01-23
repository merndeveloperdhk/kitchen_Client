import {  useEffect,  useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const LogIn = () => {
    // const{login} = useContext(AuthContext)
    
    const{login} = useAuth()
    const [disable, setDisable] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/' ;
    console.log("state in the location", location.state);

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user =  {email, password};
        console.log(user);
        login(email, password)
        .then(result => {
            console.log(result.user);
           navigate(from, {replace:true})
        })
        .catch(error => {
            console.log(error.message);
        })
        
    }
    const validate = (e) => {
        const captchaValidate = e.target.value;
        console.log(captchaValidate);
         if(validateCaptcha(captchaValidate)){
           setDisable(false)
        } else{
          setDisable(true)
        }
        
    }
  return (
    <div>
        <Helmet>
            <title>Misams Kitchen | Login</title>
        </Helmet>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse mt-16">
          <div className="text-center lg:text-left md:w-1/2">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <p className="py-6 text-center">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:w-1/2">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                onBlur={validate}
                  type="text"
                  name="captcha"
                  placeholder="Type Captcha"
                  className="input input-bordered"
                  required
                />
               {/* <button onClick={validate} className='btn btn-outline btn-xm mt-2'>Validate</button> */}
              </div>
              <div className="form-control mt-6">
                <input disabled={disable}   className="btn bg-sky-400" type="submit" value="Login" />
              </div>
            </form>
            <p className='-mt-7 px-8 mb-4'><small>New here? <Link className='text-orange-500' to='/register'>Create an account</Link></small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
