import React, { useState } from "react";
import { RegisterAPI } from "../api/AuthAPI";
import LinkedinLogo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
// import "../Sass/LoginComponent.scss";
// import { toast } from "react-toastify";

export default function LoginComponet() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      // toast.success("Signed In to Linkedin!");
      localStorage.setItem("userEmail", res.user.email);
      // navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Credentials");
    }
  };
  return (
    <div className="bg-white p-8 flex items-center justify-center h-screen">
      <div>
      <header className=" flex justify-center items-center">
        <img src={LinkedinLogo} className=" w-28" />
      </header>

      <div className="mx-auto max-w-screen-xl mt-5   sm:px-6 lg:px-8">
        <div className="mx-auto max-w-sm text-start md:rounded-xl md:border md:border-gray-100 md:shadow-xl md:p-8">
          <div className="gap-y-6">
            <p className="text-3xl font-semibold	  sm:text-4xl font-sans ">
              Iniciar Sesion
            </p>

            <p className="text-sm mt-2">
              Mantente al día de tu mundo profesional
            </p>
          </div>

          <div className="mt-6">
            <label className="relative block  overflow-hidden rounded-md border border-gray-600 px-3 pt-4 shadow-sm focus-within:border-blue-800 focus-within:ring-1 focus-within:ring-blue-800">
              <input
                onChange={(event) =>
                  setCredentials({ ...credentails, email: event.target.value })
                }
                type="email"
                id="UserEmail"
                placeholder="Email o Telefono"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                Email o Telefono
              </span>
            </label>
            <label className="relative block overflow-hidden mt-5 rounded-md border border-gray-600 px-3 pt-4 shadow-sm focus-within:border-blue-800 focus-within:ring-1 focus-within:ring-blue-800">
              <input
                onChange={(event) =>
                  setCredentials({
                    ...credentails,
                    password: event.target.value,
                  })
                }
                type="password"
                id="UserEmail2"
                placeholder="Contraseña"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                Contraseña
              </span>
            </label>
          </div>
          <p className="text-blue-600 font-semibold mt-4">
            ¿Has olvidado tu contraseña?
          </p>

          <button  onClick={login} className="w-full p-4 bg-[#0a66c2] mt-4 rounded-3xl text-white font-semibold">
            Iniciar Sesión
          </button>

          <div className="mt-4">
            <fieldset className="border-t border-slate-300">
              <legend className="mx-auto px-4 text-black text-base ">O</legend>
              <div className="text-white"></div>
            </fieldset>
          </div>

          <div className="mt-4 w-full">
            <button
              type="button"
              className=" w-full rounded-3xl justify-center gap-4 border-gray-800 border   focus:ring-4 focus:outline-none hover:opacity-80 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <svg
                className="w-5"
                viewBox="0 0 256 262"
                version="1.1"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M255.878,133.451 C255.878,122.717 255.007,114.884 253.122,106.761 L130.55,106.761 L130.55,155.209 L202.497,155.209 C201.047,167.249 193.214,185.381 175.807,197.565 L175.563,199.187 L214.318,229.21 L217.003,229.478 C241.662,206.704 255.878,173.196 255.878,133.451"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M130.55,261.1 C165.798,261.1 195.389,249.495 217.003,229.478 L175.807,197.565 C164.783,205.253 149.987,210.62 130.55,210.62 C96.027,210.62 66.726,187.847 56.281,156.37 L54.75,156.5 L14.452,187.687 L13.925,189.152 C35.393,231.798 79.49,261.1 130.55,261.1"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M56.281,156.37 C53.525,148.247 51.93,139.543 51.93,130.55 C51.93,121.556 53.525,112.853 56.136,104.73 L56.063,103 L15.26,71.312 L13.925,71.947 C5.077,89.644 0,109.517 0,130.55 C0,151.583 5.077,171.455 13.925,189.152 L56.281,156.37"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M130.55,50.479 C155.064,50.479 171.6,61.068 181.029,69.917 L217.873,33.943 C195.245,12.91 165.798,0 130.55,0 C79.49,0 35.393,29.301 13.925,71.947 L56.136,104.73 C66.726,73.253 96.027,50.479 130.55,50.479"
                    fill="#EB4335"
                  ></path>
                </g>
              </svg>

              <p className="text-black">Sign in with Google</p>
            </button>

            <button
              type="button"
              className=" w-full rounded-3xl justify-center gap-4 border-gray-800 border   focus:ring-4 focus:outline-none hover:opacity-80 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <svg
                className="w-5"
                viewBox="0 0 256 315"
                version="1.1"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
                    fill="#000000"
                  ></path>
                </g>
              </svg>

              <p className="text-black">Sign in with Google</p>
            </button>
          </div>
        </div>
      </div>

      </div>
  
    </div>
  );
}
