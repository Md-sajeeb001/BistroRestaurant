import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import UseAuth from "../Hooks/UseAuth";
import { Helmet } from "react-helmet-async";
// import { FcGoogle } from "react-icons/fc";
// import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";

const SignIn = () => {
  // const { signInUser, singWithGoogle } = UseAuth();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const { signInUser } = UseAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log('state from the location', location.state)

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handelCaptchaValue = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  // sign in with email and password
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // create user
    signInUser(email, password)
      .then((res) => {
        console.log(res);
        if (res) {
          toast.success("Sign In Successfully!");
        }
        navigate(from, { replace: true });
      })
      .catch((err) => {
        if (err) {
          toast.error(err.message);
        }
      });
  };

  // // google sign up!
  // const handelGoolgeSubmit = () => {
  //   singWithGoogle().then((resutl) => {
  //     console.log(resutl);
  //     navigate("/");
  //   });
  // };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Sign In</title>
      </Helmet>
      <div className="border max-w-3xl mx-auto rounded-xl mb-8 mt-16 sm:mt-14">
        <h2 className="text-center font-bold text-5xl pt-4">Sign In Now!</h2>
        <div className="divider px-6">or</div>
        <div className="form-control px-6 mt-6">
          {/* <button
          onClick={handelGoolgeSubmit}
          className="btn bg-white border hover:bg-white"
        >
          <FcGoogle className="text-2xl"></FcGoogle> Sign In With Google
        </button> */}
        </div>
        <form onSubmit={handelSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <LoadCanvasTemplate />
            </label>
            <input
              onBlur={handelCaptchaValue}
              name="captcha"
              type="text"
              placeholder="type the captcha above"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="text"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
          <div className="form-control mt-6">
            <button
              disabled={disabled}
              className="btn bg-blue-600 text-white hover:bg-blue-700 "
            >
              Submit
            </button>
          </div>

          <div className="form-control mt-6">
            <p className="text-center">
              Dont Have An Account?{" "}
              <Link to="/register" className="hover:text-red-600 underline">
                Register Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
