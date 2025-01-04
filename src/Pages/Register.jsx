import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const Register = () => {
  const { createUser, updateUserProfile, singWithGoogle } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const axiosPublic = UseAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    createUser(data.email, data.password).then((res) => {
      updateUserProfile(data.name, data.photoURL).then((res) => {
        // create user in the database!
        const userInfo = {
          name: data.name,
          email: data.email,
        };

        axiosPublic.post("users", userInfo).then((res) => {
          if (res.data) {
            reset();
            toast.success("user resigter successful.");
          }
        });
      });
      navigate(from, { replace: true }).catch((err) =>
        console.log(err.message)
      );
    });
  };

  // google sign up!
  const handelGoolgeSubmit = () => {
    singWithGoogle().then((result) => {
      console.log("user signin with google", result);

      const userInfo = {
        name: result.user?.email,
        email: result.user?.displayName,
      };

      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });

      toast.success("Sign In Successfull!");
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="border max-w-5xl mx-auto rounded-xl mb-8 mt-16 sm:mt-14">
      <h2 className="text-center font-bold text-5xl pt-4">Register Now!</h2>
      <div className="form-control px-8 mt-6">
        <button
          onClick={handelGoolgeSubmit}
          className="btn bg-white border hover:bg-white"
        >
          <FcGoogle className="text-2xl"></FcGoogle> Sign Up With Google Google
        </button>
      </div>
      <div className="divider px-8">or</div>
      <div className="w-full sm:flex items-center justify-center gap-5">
        <div className="sm:w-1/2 ">
          {/* <Lottie className="w-full" animationData={resturant}></Lottie> */}
        </div>
        <div className="sm:w-1/2 ">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                {...register("name", { required: true })}
                type="Name"
                placeholder="Name"
                className="input input-bordered"
                // required
              />
              {errors.name && (
                <span className="text-xs text-rose-500">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">email</span>
              </label>
              <input
                name="email"
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
                // required
              />
              {errors.email && (
                <span className="text-xs text-rose-500">email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                type="text"
                placeholder="password"
                className="input input-bordered"
                // required
              />
              {errors.password && (
                <span className="text-xs text-rose-500">
                  password is required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-xs text-rose-500">
                  password must be 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-xs text-rose-500">
                  password must be 20 characters
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                name="photo"
                {...register("photoURL", { required: true })}
                type="url"
                placeholder="photo Url"
                className="input input-bordered"
                // required
              />
              {errors.photoURL && (
                <span className="text-xs text-rose-500">
                  photoUrl is required
                </span>
              )}
            </div>
            {/* 
            <div className=" flex items-center justify-start">
              <Checkbox />
              <p>Accept Our Terms And Condition</p>
            </div> */}
            <div className="form-control mt-6">
              <button className="btn bg-blue-600 text-white hover:bg-blue-700 ">
                Submit
              </button>
            </div>
            <div className="form-control mt-6">
              <p className="text-center">
                Already Have An Accont?{" "}
                <Link to="/login" className="hover:text-red-600 underline">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
