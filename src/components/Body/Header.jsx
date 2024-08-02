import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utility/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../utility/constants/firebase";
import { useNavigate } from "react-router-dom";
import { toggleGptSearchView } from "../../utility/slices/gptSlice";
import { SUPPORTED_LANGUAGES } from "../../utility/constants/constants.js";
import { changeLanguage } from "../../utility/slices/configSlice";
import { TbLanguage } from "react-icons/tb";
import netflixLogo from "../../assets/netflix-logo.png";

const Header = () => {
  const [showBtn, setShowBtn] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const userIconRef = useRef(null);
  const dispatch = useDispatch();

  const handleToggleUser = () => {
    setShowBtn(!showBtn);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGPTSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userIconRef.current && !userIconRef.current.contains(event.target)) {
        setShowBtn(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div
      className={`absolute -top-3 left-0 w-full p-3 flex ${
        user ? "justify-between" : "justify-center sm:justify-between"
      } items-center z-50 bg-opacity-70 `}
    >
      <img src={netflixLogo} alt="netflix-logo" className="w-48 h-20" />

      {user && (
        <div className="relative flex items-center mr-4" ref={userIconRef}>
          {showGptSearch && (
            <select
              className="mr-2 p-1 border border-white bg-black bg-opacity-70 text-white hover:bg-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="bg-black"
                >
                  <TbLanguage /> {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="border border-white bg-black bg-opacity-70 text-white hover:bg-opacity-30 rounded-lg mr-3 px-2 py-1"
            onClick={handleGPTSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <div className="relative">
            <img
              src={user?.photoURL}
              alt="user-icon"
              className="rounded w-9 h-9 cursor-pointer"
              onClick={handleToggleUser}
            />
            {showBtn && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-slate-800 text-white rounded shadow-lg">
                <div className="px-4 py-2 shadow-lg">
                  <h3 className="text-lg text-center">{user?.displayName}</h3>
                </div>
                <button
                  className="w-full text-center px-4 py-2 bg-red-600 hover:bg-red-700 transition-colors rounded-b"
                  onClick={handleSignOut}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
