import { useEffect, useRef, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signIn, googleSignIn } = useAuth();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => setErrorMessage(error.message));
  };
  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user?.displayName,
          email: user?.email,
          role:"user"
        };
        axiosPublic
          .post("/users", userInfo)
          .then()
          .catch((error) => console.log(error));

        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };
  const handleGithubLogIn = () => {
    console.log("Github login");
  };
  return (
    <>
      <h1 className="text-3xl text-center my-2 text-[#403F3F] font-semibold mb-4">
        Login your account
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-row border border-[#FFF] bg-[#FFF] rounded-md py-7 mx-auto mt-7">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <img
            className="mx-auto"
            src="https://i.ibb.co/TwB2y41/login.jpg"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2">
          <div className="w-full space-y-4 border-b-2 pb-4 p-4">
            <div>
              <form onSubmit={handleLogIn} className="space-y-4">
                <div>
                  <label className="text-md font-semibold text-[#403F3F]">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                    className="input input-bordered bg-white w-full rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="text-md font-semibold text-[#403F3F]">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    className="input input-bordered w-full bg-white rounded-md"
                    required
                  />
                </div>
                <p className="underline cursor-pointer pl-2 mt-2">
                  Forgot password
                </p>
                <div className="mt-5">
                  {errorMessage && (
                    <p className="text-xl font-bold text-[#FF0000]">
                      {errorMessage}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-md font-semibold text-[#403F3F]">
                    Captcha
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    ref={captchaRef}
                    placeholder="Enter captcha here"
                    name="captcha"
                    className="input input-bordered w-full bg-white rounded-md"
                    required
                  />
                </div>
                <button
                  onBlur={handleValidateCaptcha}
                  className="btn btn-outline btn-xs"
                >
                  Validate
                </button>
                <div className="mt-6">
                  <button
                    disabled={disabled}
                    type="submit"
                    className="btn bg-[#8768EE] hover:bg-[#a690f0] text-white w-full rounded-md"
                  >
                    Log In
                  </button>
                </div>
                <div>
                  <p className="text-[#706F6F] text-lg">
                    Do not Have An Account ?
                    <Link
                      className="text-[#FF0000] text-lg font-semibold"
                      to="/signup"
                    >
                      {" "}
                      Sign Up
                    </Link>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={handleGoogleLogIn}
                className="btn btn-primary w-full"
              >
                <FaGoogle className="mr-2" /> Sign in with Google
              </button>
              <button
                onClick={handleGithubLogIn}
                className="btn btn-secondary w-full"
              >
                <FaGithub className="mr-2" /> Sign in with GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
