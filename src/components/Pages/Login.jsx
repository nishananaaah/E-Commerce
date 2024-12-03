import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import userApi from '../../API/userInter';

// Validation schema
const signupValidation = yup.object({
  email: yup.string().email("Please enter a valid email").required("Please enter email"),
  password: yup.string().min(5).required("Please enter password"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  let navigate = useNavigate();

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema: signupValidation,
    onSubmit: async (values) => {
      try {
        const response = await userApi.post("/login", {
          email: values.email,
          password: values.password,
        });

        if (response.status === 200) {
          const { token, user } = response.data;

          localStorage.setItem('tocken', token);
          localStorage.setItem('user', JSON.stringify(user));

          navigate('/');
          toast.success('Login completed successfully');
        }
      } catch(error) {
        toast.error("Invalid email or password");
        console.log(error);
        
      }
    }
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/459905/pexels-photo-459905.jpeg?cs=srgb&dl=pexels-pixabay-459905.jpg&fm=jpg')" }}>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign In</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {touched.email && errors.email && <small className="text-red-500">{errors.email}</small>}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {touched.password && errors.password && <small className="text-red-500">{errors.password}</small>}
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember Me</label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-sm text-gray-600">
            Dont have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer font-semibold"
              onClick={() => navigate('/Register')}
            >
              Sign Up
            </span>
          </div>

          {/* Back Button */}
          <div className="text-center">
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

export default Login;


