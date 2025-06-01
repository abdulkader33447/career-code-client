import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerLottie from "../../../../assets/lotties/register.json";
import { AuthContext } from "../../../../context/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import SocialLogin from "../../../SignIn/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);
const navigate=useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // create user
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully registered",
          showConfirmButton: false,
          timer: 3000,
        });
        navigate('/')
        // console.log(result);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "200px" }}
            animationData={registerLottie}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <h1 className="sm:text-5xl text-3xl font-bold">
                  Register now!
                </h1>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div></div>
                <button className="btn btn-neutral mt-4">Register</button>
                
                <span>
                  Already have an account? please{" "}
                  <Link to="/signIn" className="text-blue-500 underline">
                    Log In
                  </Link>
                </span>
              </fieldset>
            </form>
            <SocialLogin/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
