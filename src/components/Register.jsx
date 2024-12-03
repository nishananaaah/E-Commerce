import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';

// Validation schema
const signupValidation = yup.object({
  username: yup.string().min(3).required("Please enter your name"),
  email: yup.string().email("Please enter a valid email").required("Please enter your email"),
  password: yup.string().min(5).required("Please enter a password"),
  cpassword: yup.string().oneOf([yup.ref("password")], "Password does not match").required("Please confirm your password"),
});

// Initial form values
const initialValues = {
  username: "",
  email: "",
  password: "",
  cpassword: "",
};

const Register = () => {
  const [profileimage, setProfile] = useState(null);
  let navigate = useNavigate();

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema: signupValidation,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("username", values.username);
      formData.append("email", values.email);
      formData.append("password", values.password);
      if (profileimage) {
        formData.append("image", profileimage);
      }

      try {
        const response = await axios.post("http://localhost:3000/api/users/register", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success(response.data.message, "success");
        navigate("/Login");
      } catch (error) {
        toast.error(error.response.data.message, "error");
      }
    },
  });

  const handleImageChange = (e) => {
    setProfile(e.target.files[0]);
  };

  return (
    <div className="flex justify-center bg-red-300 min-h-screen py-12 bg-cover bg-center " style={{ backgroundImage: "url('https://spearmintlove.com/cdn/shop/files/tan-moon-baby-footie_copy.jpg?v=1729626722&width=1600')" }}>
      <div className="bg-black bg-opacity-40 w-full sm:w-96 p-8 rounded-lg shadow-xl space-y-6">
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-6">
            <h3 className="text-3xl font-semibold text-white">Sign Up</h3>
          </div>

          <div className="flex flex-col gap-4">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={values.username}
                onBlur={handleBlur}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-red-300 rounded-md focus:ring-red-300 focus:border-red-300"
              />
              {touched.username && errors.username && (
                <small className="text-red-500">{errors.username}</small>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-red-300 rounded-md focus:ring-red-300 focus:border-red-300"
              />
              {touched.email && errors.email && (
                <small className="text-red-500">{errors.email}</small>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-red-300 rounded-md focus:ring-red-300 focus:border-red-300"
              />
              {touched.password && errors.password && (
                <small className="text-red-500">{errors.password}</small>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="cpassword" className="block text-sm font-medium text-white">
                Confirm Password
              </label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                value={values.cpassword}
                onBlur={handleBlur}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-300 focus:border-red-300"
              />
              {touched.cpassword && errors.cpassword && (
                <small className="text-red-500">{errors.cpassword}</small>
              )}
            </div>

            {/* Profile Image Upload */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-white">
                Upload Profile Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-800 focus:border-amber-800"
              />
              {profileimage && (
                <div className="mt-4 text-center">
                  <img
                    src={URL.createObjectURL(profileimage)}
                    alt="Profile preview"
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                </div>
              )}
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="h-4 w-4 text-amber-800 focus:ring-amber-800 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-white">
                Remember Me
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-amber-800 text-white py-3 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-black"
            >
              Sign Up
            </button>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-sm text-white">
              Already have an account?{" "}
              <a href="/Login" className="text-amber-800 font-semibold">
                Sign In
              </a>
            </p>
          </div>

          {/* Back Button */}
          <div>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full mt-4 bg-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-400"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;





