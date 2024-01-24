

import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import SocialLogin from "../Login/SocialLogin";
import Swal from "sweetalert2";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  // const{createUser} = useContext(AuthContext)
  const{createUser, updateUserProfile} = useAuth()
    const { register, handleSubmit, reset, formState: { errors },} = useForm();
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate();
    
        const onSubmit = (data) => {
            console.log(data)
            createUser(data.email, data.password)
            .then(result => {
              console.log(result.user);
              updateUserProfile(data.name, data.photoUrl)
              .then(() => {
               // create user entry in the database
              const userInfo = {
                name: data.name,
                email: data.email,
                photoUrl: data.photoUrl
              }
              axiosPublic.post('/users', userInfo)
              .then(res => {
                if(res.data.insertedId){
                  console.log("user added to the database");
                  reset()
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1000
                  });
                  navigate('/')
                }
              });
              
              })
              .catch((error) => {
                console.log(error.message);
              });
            })
            .catch(error => {
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
                  {...register("name", { required: true })}
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    PhotoUrl
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    id="photoUrl"
                    {...register("photoUrl")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Photo URL"
                    required=""
                  />
                </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
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
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">
                    Password must be at least 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password not more than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    One Upper case, one lower case , one special character and
                    one number
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-sky-400"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <SocialLogin></SocialLogin>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center mb-6">
                  Already have an account?{" "}
                  <Link
                    to='/login'
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;