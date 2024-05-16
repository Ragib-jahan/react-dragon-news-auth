import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        console.log(form.get('password'))
        const email = form.get('email')
        const password = form.get('password')

        // Create User
        createUser(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-2xl text-center">Register Now</h2>

                <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="Photo Url" className="input input-bordered" required />
                    </div>
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
                <p className=" text-center">Already have a account <Link className="text-blue-600" to='/login'>Register</Link></p>
            </div>
        </div>
    );
};

export default Register;