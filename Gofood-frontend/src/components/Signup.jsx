import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className=" flex items-center justify-center h-screen">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-2xl">Signup</h3>
              <div className="space-y-2 mt-4">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  name="text"
                  id="name"
                  placeholder="Enter your name"
                  className="outline-none border py-1 rounded-md w-80 px-3 "
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="space-y-2 mt-4">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="outline-none border py-1 rounded-md w-80 px-3 "
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="space-y-2 mt-4">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                  className="outline-none border py-1 rounded-md w-80 px-3  "
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex justify-around mt-6 text-center items-center">
                <button className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
                  Signup
                </button>
                <h3>
                  Have account?{" "}
                  <NavLink
                    to="/"
                    className="underline text-blue-600 cursor-pointer"
                  >
                    Login
                  </NavLink>
                </h3>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
