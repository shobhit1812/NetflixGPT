import { useState, useRef } from "react";
import { checkValidData } from "../../utility/constants/validate";
import { auth } from "../../utility/constants/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../utility/slices/userSlice";
import { NETFLIX_ICON } from "../../utility/constants/constants";
import { LOGIN_PAGE_CONSTANTS } from "../../utility/constants/languageConstants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validErrorMsg, setValidErrorMsg] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const changeLanguage = useSelector((store) => store.config.lang);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);

    if (message) setValidErrorMsg(message);

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: NETFLIX_ICON,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              alert(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-20 p-4">
      <div className="bg-black bg-opacity-80 p-12 md:p-12 rounded shadow-md max-w-md w-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col text-white"
        >
          <h1 className="text-3xl mb-8 font-bold">
            {isSignInForm
              ? LOGIN_PAGE_CONSTANTS[changeLanguage]?.signIn
              : LOGIN_PAGE_CONSTANTS[changeLanguage]?.signUp}
          </h1>
          {!isSignInForm && (
            <input
              id="name"
              ref={name}
              type="text"
              placeholder={LOGIN_PAGE_CONSTANTS[changeLanguage]?.name}
              className="p-3 mb-8 rounded bg-slate-600 bg-opacity-30 border border-white"
              autoComplete="name"
            />
          )}
          <input
            id="email"
            ref={email}
            type="text"
            placeholder={LOGIN_PAGE_CONSTANTS[changeLanguage]?.email}
            className="p-3 mb-8 rounded bg-slate-600 bg-opacity-30 border border-white"
            autoComplete="email"
          />
          <input
            id="password"
            ref={password}
            type="password"
            placeholder={LOGIN_PAGE_CONSTANTS[changeLanguage]?.password}
            className="p-3 mb-8 rounded bg-slate-600 bg-opacity-30 border border-white"
            autoComplete="current-password"
          />
          <button
            className="bg-red-600 py-3 rounded font-semibold text-lg mb-4 hover:bg-red-700 transition duration-200"
            onClick={handleButtonClick}
          >
            {isSignInForm
              ? LOGIN_PAGE_CONSTANTS[changeLanguage]?.signIn
              : LOGIN_PAGE_CONSTANTS[changeLanguage]?.signUp}
          </button>
          <p className="text-red-500 mb-2">{validErrorMsg}</p>
          <p className="text-red-500 mb-5">{errorMessage}</p>
          <div className="flex items-center mb-8">
            <input type="checkbox" id="remember" className="mr-2 w-4 h-4" />
            <label htmlFor="remember" className="text-sm">
              {LOGIN_PAGE_CONSTANTS[changeLanguage]?.remember}
            </label>
          </div>
          <h2 className="text-sm mt-3">
            {isSignInForm
              ? LOGIN_PAGE_CONSTANTS[changeLanguage]?.signIn_tag
              : LOGIN_PAGE_CONSTANTS[changeLanguage]?.signUp_tag}
            <span
              className="cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? LOGIN_PAGE_CONSTANTS[changeLanguage]?.signUpNow
                : LOGIN_PAGE_CONSTANTS[changeLanguage]?.signIn}
            </span>
            .
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Login;
