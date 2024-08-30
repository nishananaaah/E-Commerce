import React, { useEffect, useState } from "react";
import "../components/Pages/Style.css";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Register() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [emails,setEmails]=useState([])
  const [focus, setFocus] = useState({
    errName: false,
    errEmail: false,
    errPass: false,
  });

  useEffect(()=>{
    const fetchmail=async ()=>{
      const response =await axios.get("http://localhost:3000/users")
      try {
        setEmails(response.data);
        console.log(emails);
        
      } catch (error) {
        toast.error("not fetched")
        
      }
    }
    fetchmail()
  },[])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value,cart:[] });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const finduser = emails.find((user) => user.email === inputs.email);

    if (finduser) {
      toast.warning("User already exists");
    } else {
      await axios.post("http://localhost:3000/users", inputs);
      toast.success("Registration Successfull");
      navigate("/login");
    }
  };
  console.log(inputs);
  

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img
        alt="Your Company"
        src="https://tailwindui.com/img/logos/mark.svg?color=red-300&shade=600"
        className="mx-auto h-10 w-auto"
      /> */}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSumbit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-red-300"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                value={inputs.username}
                type="text"
                pattern="^[A-Za-z0-9],{2-16}"
                placeholder="  Username"
                onChange={handleChange}
                onBlur={() => setFocus({ ...focus, errName: true })}
                focus={focus.errName.toString()}
                required
                className="block w-full rounded-md border-0 py-1.5 text-red-300 shadow-sm ring-1 ring-inset ring-red-300  focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
              />
              {focus.errName && (
                <span className="text-red-300 font-light">
                  Username should have 3-16 characters
                </span>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-red-300"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                value={inputs.email}
                type="email"
                required
                autoComplete="email"
                placeholder="  Email"
                onChange={handleChange}
                onBlur={() => setFocus({ ...focus, errEmail: true })}
                focus={focus.errEmail.toString()}
                className="block w-full rounded-md border-0 py-1.5 text-red-300 shadow-sm ring-1 ring-inset ring-red-300 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
              />
              {focus.errEmail && (
                <span className="text-red-300 font-light">
                  Enter a valid Email ID
                </span>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-red-300"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-red-300 hover:text-red-300"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                value={inputs.password}
                type="password"
                required
                autoComplete="current-password"
                placeholder="  Password"
                password="(?=^.{8-16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                onChange={handleChange}
                onBlur={() => setFocus({ ...focus, errPass: true })}
                focus={focus.errPass.toString()}
                className="block w-full rounded-md border-0 py-1.5 text-red-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
              />
              {focus.errpass && (
                <span className="text-red-300 font-light">
                  Password must have minimum 8 characters
                </span>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
