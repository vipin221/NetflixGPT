import { useRef, useState } from "react"
import Header from "./Header"
import { validateSignInform, validateSignUnform } from "../utils/validateinputs";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { BG_IMG, USER_LOGO } from "../utils/constant";


const LoginPage = () => {


  const [isSignIn, SetIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);


  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const cPass = useRef(null);

  const toggleSignInSignUp = () => {
    SetIsSignIn(!isSignIn);

  }

  const handleClick = () => {

    if (isSignIn) {
      const msg = validateSignInform(email.current.value, password.current.value);
      setErrorMsg(msg);
      if (errorMsg !== null) return;

    } else {
      const msg = validateSignUnform(email.current.value, name.current.value, password.current.value, cPass.current.value);
      setErrorMsg(msg);
      if (errorMsg !== null) return;
    }

    if (!isSignIn) {

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value, photoURL: USER_LOGO
          }).then(() => {}).catch((error) => {
          setErrorMsg(error);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          window.alert(errorCode+ "-" + errorMessage)

        });

    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          window.alert(errorCode + " " + errorMessage)
        });

    }

  }

  return (
    <div className="">
      <div className=" -z-10 fixed top-0 left-0 w-screen h-screen" >
        <img className="w-full h-full object-cover"  alt="bg"
          src={BG_IMG}
        />
      </div>
      <div >
        <Header />
      </div>
      

      <div className=" flex w-full h-fit md:pt-[10%] pt-[30%] px-5 justify-center items-center ">
        <div className="flex md:w-3/12 p-7 min-h-[60%] rounded-xl flex-col bg-opacity-90 text-white bg-black ">

          <h1 className="text-4xl mb-16 font-bold text-white">{isSignIn ? "Sign In" : "Sign Up"}</h1>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-around gap-4  items-start">
            <div className="w-full">

              <input type="text"
                autoComplete="username"
                ref={email}
                className="h-12 bg-[#121110] border-2 rounded-lg bg-opacity-65 w-full p-3 placeholder-white"
                placeholder="Enter Email Address"

              />
              {(errorMsg === "mailerr") ? <span className="text-sm font-bold text-red-500">*enter Valid email</span> : <></>}
            </div>

            <div className="w-full">
              {!isSignIn && <input type="text"
                ref={name}
                className="h-12 bg-[#121110] border-2 rounded-lg bg-opacity-65 w-full p-3 placeholder-white"
                placeholder="Full Name"
              />}
              {(errorMsg === "nameErr") ? <span className="text-sm font-bold text-red-700">*your name not contain any special character or number</span> : <></>}
            </div>

            <div className="w-full">
              <input
                type="password"
                autoComplete="current-password"
                ref={password}
                className="h-12 bg-[#121110] border-2 rounded-lg bg-opacity-65 w-full p-3 placeholder-white"
                placeholder="Password"
              />
              {(errorMsg === "passerr") ? <span className="text-xs font-bold text-red-700">*Enter Valid Pass</span> : <></>}

            </div>

            <div className="w-full">
              {!isSignIn && <input
                type="password"
                ref={cPass}
                className="h-12 bg-[#121110] border-2 rounded-lg bg-opacity-65 w-full p-3 placeholder-white"
                placeholder="Confirm Password"
              />}
              {(errorMsg === "Notmatches") ? <span className="text-xs font-bold text-red-700">*your pass does matches</span> : <></>}
            </div>


            <button onClick={handleClick} className="w-full h-12 bg-red-600 font-bold rounded-md"> {isSignIn ? "Sign In" : "Register Now"}</button>
            <a className="hover:underline text-center w-full" href="https:/google.com">forgot Password? </a>

            <div className="flex gap-1 py-2 justify-center items-center cursor-pointer ">
              <input id="checkbox" type="checkbox" className="h-4 w-4 cursor-pointer" />
              <label htmlFor="checkbox " className="cursor-pointer"> Remember me</label>
            </div>

          </form>


          <div className="text-gray-300 text-sm font-semibold">
            <span>{isSignIn ? "New to Netflix?" : "Already Member?"} </span>
            <button onClick={toggleSignInSignUp}>{isSignIn ? "Sign Up" : "Sign In"}</button>
            <p className="mt-2 text-sm text-gray-400">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.<button className="text-blue-600" href="#"> Learn more.</button>
            </p>

          </div>

        </div>
        <div></div>

      </div>



    </div>
  )
}

export default LoginPage
