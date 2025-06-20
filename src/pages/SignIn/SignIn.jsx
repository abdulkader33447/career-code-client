import Lottie from "lottie-react";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import signInLottie from "../../assets/lotties/logIn.json";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  // console.log("location in sign in page", location);
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // sign in user
    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign in successful",
          showConfirmButton: false,
          timer: 3000,
        });
        navigate(from)
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
            style={{ width: "300px" }}
            animationData={signInLottie}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <h1 className="sm:text-5xl text-3xl font-bold">Sign In now!</h1>
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
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Sign In</button>

                <span>
                  Don't have an account? please{" "}
                  <Link to="/register" className="text-blue-500 underline">
                    Register
                  </Link>
                </span>
              </fieldset>
            </form>
            <SocialLogin from={from}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
