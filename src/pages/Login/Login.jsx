import { Link, useLocation, useNavigate} from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Login = () => {

    const { login } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log("This is login location",location)

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        console.log(form.get('password'))
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        // login
        login(email, password)
            // .than(result => {
            //     console.log(result.user)

            //     // navigate after login
            //     // navigate(location?.state ? location.state : '/' )
            //     navigate('/')
            // })

            .then(result => {  // fixed typo here
                console.log(result.user);

                // navigate after login
                navigate(location?.state ? location.state : '/');  // corrected navigation fallback
            })

            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-2xl text-center">Please login</h2>

                <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className=" text-center">Do no have a account <Link className="text-blue-600" to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;