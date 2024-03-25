"use client";
import Image from "next/image";
import logo from "../../../../public/noavatar.png";
import { Label, Button, TextInput } from "flowbite-react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useAuth } from "../../../AuthContext";
import { useRouter } from "next/navigation";
import BASE_URL from "../../../urlConfig/urlConfig";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //const router = useRouter();
  // const storeTokenInLS = useAuth();
  // Handle input change for all form fields
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    debugger;
    event.preventDefault();
    console.log(`${BASE_URL}/Login/login`);
    try {
      const response = await fetch(`${BASE_URL}/Login/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (response.ok) {
        alert("Logged In successfully");
        const message = await response.text();
        console.log(`Your response: ${message}`);
        // const response_data = await response.json();
        // storeTokenInLS.setItem(response_data.token);
        toast.success("Successfully Logged In!", {
          position: "top-left",
        });
        // router.push("/"); // Redirect to dashboard
      } else {
        const errorMessage = await response.text();
        console.error(`Failed to submit form data: ${errorMessage}`);
        toast.warning("Validation Error!", {
          position: "top-left",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Server Error!", {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <div className="max-auto rounded overflow-hidden shadow-lg bg-slate-50">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              className="mx-auto w-44 h-44"
              src={logo}
              alt="Your Company"
              width={200}
              height={200}
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Log in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </Label>
                <div className="mt-2">
                  <TextInput
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </Label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-cyan-600 hover:text-cyan-950"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <TextInput
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Button type="submit">Sign in</Button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <a
                href="/register"
                className="font-semibold leading-6 text-rose-600 hover:text-indigo-500"
              >
                Register Now
              </a>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
