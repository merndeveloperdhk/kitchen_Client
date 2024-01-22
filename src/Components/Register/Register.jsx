
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
  const{createUser} = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors },} = useForm();
    
        const onSubmit = (data) => {
            console.log(data)
            createUser(data.email, data.password)
            .then(result => {
              console.log(result.user);
            })
            .then(error => {
              console.log(error.message);
            })
        };
   
    

    return (
        <div>
        <Helmet>
            <title>Misams Kitchen | Register</title>
        </Helmet>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2">
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
            <p className="py-6 text-center">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", {required:true})}
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email" , {required:true})}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && <span>Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {required:true, minLength:6, maxLength:20, 
                    pattern:/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                     
                })}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {
                    errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>
                }
                {
                    errors.password?.type === 'minLength' && <p className="text-red-600">Password must be at least 6 characters</p>
                }
                {
                    errors.password?.type === 'maxLength' && <p className="text-red-600">Password not more than 20 characters</p>
                }
                {
                    errors.password?.type === 'pattern' && <p className="text-red-600">One Upper case, one lower case , one special character and one number</p>
                }
              
              </div>
            
              <div className="form-control mt-6">
                <input  className="btn bg-sky-400" type="submit" value="Register" />
              </div>
            </form>
            <p className='-mt-7 px-8 mb-4'><small>Already have an account? <Link className='text-orange-500' to='/login'>Please Login</Link></small></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;