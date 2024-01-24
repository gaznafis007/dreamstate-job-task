
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../api/AuthProvider";



const SignUp = () => {
  const {signUp,getProfile,authError,setAuthError} = useContext(AuthContext)
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        signUp(email,password)
        .then(res=>{
          console.log(res.user)
          getProfile(name)
        })
        .catch(error=>{
          setAuthError(error)
          console.log(error)
        })
    }
    const handleGoogleLogIn = () =>{

    }
    return (
        <>
                <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Signup now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
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
          <label className="label">
            <Link to="/login" className="label-text-alt link link-hover">Already have an account please login?</Link>
          </label>
           {/* {
            authError ? <p className="text-xl text-red-500">{authError}</p> : ''
          } */}
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Sign up" className="btn btn-primary" />
        </div>
      </form>
      <div className="divider">OR</div>
      <button onClick={handleGoogleLogIn} className="btn  hover:text-white hover:bg-green-500 m-2">Sign in with Google</button>
    </div>
  </div>
</div>
        </>
    );
};

export default SignUp;