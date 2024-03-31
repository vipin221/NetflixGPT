import { useState } from "react"
import Header from "./Header"
const LoginPage = () => {
  const [isSignIn, SetIsSignIn] = useState(true);
  const toggleSignInSignUp = () =>{
    SetIsSignIn(!isSignIn);

  }
  return (
    <div className="">
      <div className="absolute z-10 p-6 bg-gradient-to-b from-black  w-full">
        <Header  />
      </div>
      <div className="" >
        <img className="absolute" alt="bg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>

      <div className="absolute mt-20 flex w-full h-screen  justify-center items-center">
        <div className="flex w-3/12 p-7 min-h-[60%] rounded-xl flex-col bg-opacity-85 text-white bg-black ">

          <h1 className="text-4xl mb-16 font-bold text-white">{isSignIn? "Sign In": "Sign Up"}</h1>

          <form className="flex flex-col justify-around gap-6  items-start">

            <input type="email"
             className="h-12 bg-[#121110] border-2 rounded-lg bg-opacity-65 w-full p-4 placeholder-white"
             placeholder="Email or Phone Number" 
            />
            {!isSignIn && <input type="text"
             className="h-12 bg-[#121110] border-2 rounded-lg bg-opacity-65 w-full p-4 placeholder-white"
             placeholder="Full Name" 
            />}
            <input
             type="password" 
             className="h-12 bg-[#121110] border-2 rounded-lg bg-opacity-65 w-full p-4 placeholder-white" 
             placeholder="Password" 
              />
            {!isSignIn && <input
              type="password"
              className="h-12 bg-[#121110] border-2 rounded-lg bg-opacity-65 w-full p-4 placeholder-white"
              placeholder="Confirm Password"
            />}
            
            <button className="w-full h-12 bg-red-600 font-bold rounded-md"> {isSignIn? "Sign In":"Register Now"}</button>
            <a className="hover:underline text-center w-full"  href="https:/google.com">forgot Password? </a>

            <div className="flex gap-1 py-2 justify-center items-center cursor-pointer ">
              <input id="checkbox"  type="checkbox" className="h-4 w-4 cursor-pointer"/>
              <label for="checkbox " className="cursor-pointer"> Remember me</label>
            </div>
    
          </form>


          <div className="text-gray-300 text-sm font-semibold">
            <span>{isSignIn? "New to Netflix?": "Already Member?"} </span>
            <button onClick={toggleSignInSignUp}>{isSignIn? "Sign Up" : "Sign In"}</button>
            <p className="mt-2 text-sm text-gray-400">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.<button  className="text-blue-600" href="#"> Learn more.</button>
            </p>
            
          </div>

        </div>
        <div></div>

      </div>



    </div>
  )
}

export default LoginPage
