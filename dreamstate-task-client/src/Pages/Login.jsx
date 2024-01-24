
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }
    const handleGoogleLogIn = () =>{
      console.log('googleLogin')
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
            <Link to="/signup" className="label-text-alt link link-hover">New to our website please register?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Login" className="btn btn-primary" />
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

export default Login;