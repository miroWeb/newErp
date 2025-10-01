import { useState } from "react";
import { FcGoogle } from "react-icons/fc"; // Google icon

function Login() {

    const [formData, setFormData] = useState({ email: "", password: "" });

  // input o'zgarishini ushlash
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // formani yuborish
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // bu yerda API chaqirasiz masalan: axios.post("/login", formData)
  };

  const handleGoogleLogin = () => {
    console.log("Google bilan login bosildi");
    // bu yerda Google Auth ishlatishingiz mumkin
  };


  return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] bg-white flex flex-col justify-center items-center p-8 rounded-2xl shadow-xl"
      >
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Login</h3>

        <div className="mb-4 w-full">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6 w-full">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
        >
          Login
        </button>

        <div className="my-4 flex items-center w-full">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-xl" />
          <span className="font-medium">Continue with Google</span>
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Don’t have an account?
          <a href="#" className="text-blue-500 hover:underline ml-1">Register</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
