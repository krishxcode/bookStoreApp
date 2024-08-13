import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_model_3").closest()}
              >
                ✕
              </Link>
              <h3 className="font-bold text-2xl">Login</h3>
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
                <span>Email</span>
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
                  Login
                </button>
                <h3>
                  Not registered?{" "}
                  <NavLink
                    to="/signup"
                    className="underline text-blue-600 cursor-pointer"
                  >
                    Signup
                  </NavLink>
                </h3>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
