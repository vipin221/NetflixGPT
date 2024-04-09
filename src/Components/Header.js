import { LogIn } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_LOGO, laungauage } from "../utils/constant";
import { setToggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {

  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const isGptpage = useSelector(store => store.gptSearch.toggleGptSearch);
  const navigate = useNavigate();
  const handleClick = () => {
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
    return () => unsubscribe();
  }, [])

  const handleGptSearch = () =>{
    dispatch(setToggleGptSearch());
  }
  

  return (
    <div className=" absolute z-20 md:px-6 pt-3 bg-gradient-to-b from-black h-fit w-full flex items-center flex-col md:flex-row justify-between">
      <div>
        <img className="w-32 md:w-52" src={LOGO}
          alt="logo" />

      </div>
      {user &&
      
        <div className="flex gap-1 md:gap-4 items-center" >
          {isGptpage && <select className="bg-[#4e4d4d] font-semibold text-white rounded-md h-8 md:h-10" onChange={(e)=> dispatch(changeLanguage(e.target.value))} >
          {laungauage.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name} </option>)}
        </select>}
          <button className="bg-red-600 rounded-md bg-opacity-70  px-2  h-8 md:h-10 text-white" onClick={handleGptSearch}>{isGptpage ? <span>Home</span> : <span>Get Movie Suggestion</span>}</button>
          <button onClick={handleClick} className=" flex items-center p-1 rounded-lg text-white  gap-2 " >
            <img className="w-10 h-10 rounded-full border-2 border-white" src={user.photoURL} srcSet={USER_LOGO} alt="userimage" />
            <LogIn />
          </button>

        </div>
      }
    </div>


  )
}

export default Header;
