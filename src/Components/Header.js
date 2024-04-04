import { LogIn } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_LOGO } from "../utils/constant";


const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const handleClick = () =>{
    signOut(auth).then(() => { }).catch((error) => {  
    });
  }

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL }));
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return ()=> unsubscribe();
  }, [])

  return (
    <div className="absolute z-50 px-6 py-3  bg-gradient-to-b from-black  w-full flex items-center justify-between">
      <div>
        <img className="w-52" src={LOGO}
          alt="logo" />

      </div>
      { user &&<div >

        <button onClick={handleClick} className=" flex items-center p-1 rounded-lg text-white  gap-2 " >
          <img className="w-10 h-10 rounded-full border-2 border-white" src={user.photoURL} srcSet={USER_LOGO} alt="userimage" />
          <LogIn /></button>

      </div>
}
    </div>


  )
}

export default Header;
