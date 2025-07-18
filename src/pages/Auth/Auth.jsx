import "./auth.scss";
import { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerOne, authFadeInUpVariants, modalVariants, authPageFadeInVariants } from "../../motionUtils";
import { LOGO_URL, SIGNIN_BGIMG_URL } from "../../requests.js";
import { useSelector } from "react-redux";
import { selectAuthErrors } from "../../redux/auth/auth.selectors";

const Auth = () => {
	const [isSignedUp, setIsSignedUp] = useState(true);
	const authError = useSelector(selectAuthErrors);

	return (
		<motion.div
			className="Auth"
			variants={authPageFadeInVariants}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<div className="Auth__opacityLayer" />
			<div className="Auth__bgLayer" style={{ backgroundImage: `url(${SIGNIN_BGIMG_URL})` }} />
			<Link to="/" className="Auth__logo">
				<img className="Auth__logo--img" src={LOGO_URL} alt="Fakeflix_logo" />
			</Link>
			<motion.div
				className="Auth__content"
				variants={modalVariants}
				initial="hidden"
				animate="visible"
				exit="hidden"
			>
				<motion.div variants={staggerOne} initial="initial" animate="animate" exit="exit">
					<motion.h2 variants={authFadeInUpVariants} className="Auth__content--title">
						{isSignedUp ? "Sign In" : "Sign Up"}
					</motion.h2>
					{/* <motion.small variants={authFadeInUpVariants} className="Auth__content--disclaimer">
						{`Pay attention: this is not the original Netflix ${isSignedUp ? "sign in" : "sign up"}. Don't insert your real credentials here!`}
					</motion.small> */}
					{isSignedUp ? <SignIn /> : <SignUp />}
					{authError && <motion.p variants={authFadeInUpVariants} className='Auth__content--errors'>{authError}</motion.p>}
					<motion.hr variants={authFadeInUpVariants} className="Auth__content--divider" />
					<motion.small variants={authFadeInUpVariants} className="Auth__content--toggleView">
						{isSignedUp
							? `Haven't you registered yet? `
							: "Do you already have an account? "}
						<span className="toggler" onClick={() => setIsSignedUp(!isSignedUp)}>
							{isSignedUp ? "Sign Up" : "Sign In"}
						</span>
					</motion.small>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Auth;


// Auth.jsx

// import "./auth.scss";
// import { useState, useEffect } from "react"; // Import useEffect
// import SignIn from "../../components/SignIn/SignIn";
// import SignUp from "../../components/SignUp/SignUp";
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
// import { motion } from "framer-motion";
// import { staggerOne, authFadeInUpVariants, modalVariants, authPageFadeInVariants } from "../../motionUtils";
// import { LOGO_URL, SIGNIN_BGIMG_URL } from "../../requests.js";
// import { useSelector } from "react-redux";
// import { selectAuthErrors } from "../../redux/auth/auth.selectors";

// // Import getRedirectResult and auth from your firebaseUtils.js
// import { getRedirectResult, auth, createUserProfileDocument } from '../../firebase/firebaseUtils';

// const Auth = () => {
// 	const [isSignedUp, setIsSignedUp] = useState(true);
// 	const authError = useSelector(selectAuthErrors);
// 	const navigate = useNavigate(); // Hook for programmatic navigation

// 	useEffect(() => {
// 		const handleAuthRedirectResult = async () => {
// 			try {
// 				// Check if the current URL is a result of a redirect operation
// 				const result = await getRedirectResult();

// 				if (result && result.user) {
// 					// User successfully signed in via redirect!
// 					console.log("Signed in with Google via redirect:", result.user);

// 					// If you need to create/update user profile in Firestore after sign-in
// 					await createUserProfileDocument(result.user);

// 					// Now, navigate the user away from the authentication page
// 					// For example, to your main app dashboard or home page
// 					navigate('/'); // Adjust this route as needed
// 				}
// 			} catch (error) {
// 				// Handle errors during redirect sign-in
// 				console.error("Error during Google redirect sign-in:", error);
// 				// You can dispatch an action to update your Redux authError state here if you have one
// 			}
// 		};

// 		// Call the function to check for redirect result on component mount
// 		handleAuthRedirectResult();

// 		// Optionally, you can also set up an onAuthStateChanged listener here
// 		// that will fire any time the user's sign-in state changes.
// 		// This can be useful for managing persistent login states.
// 		const unsubscribe = auth.onAuthStateChanged(async user => {
// 			if (user) {
// 				// User is signed in (could be from this redirect, or a previous session)
// 				console.log("Auth state changed: User is logged in:", user.uid);
// 				// You might want to automatically navigate away if they're already logged in
// 				if (window.location.pathname === '/auth') { // Only redirect if on the auth page
// 					navigate('/');
// 				}
// 			} else {
// 				// User is signed out
// 				console.log("Auth state changed: User is logged out.");
// 			}
// 		});

// 		// Cleanup function for useEffect: unsubscribe from the auth state listener
// 		return () => unsubscribe();
// 	}, [navigate]); // Add navigate to dependency array for useEffect

// 	return (
// 		<motion.div
// 			className="Auth"
// 			variants={authPageFadeInVariants}
// 			initial="initial"
// 			animate="animate"
// 			exit="exit"
// 		>
// 			<div className="Auth__opacityLayer" />
// 			<div className="Auth__bgLayer" style={{ backgroundImage: `url(${SIGNIN_BGIMG_URL})` }} />
// 			<Link to="/" className="Auth__logo">
// 				<img className="Auth__logo--img" src={LOGO_URL} alt="Fakeflix_logo" />
// 			</Link>
// 			<motion.div
// 				className="Auth__content"
// 				variants={modalVariants}
// 				initial="hidden"
// 				animate="visible"
// 				exit="hidden"
// 			>
// 				<motion.div variants={staggerOne} initial="initial" animate="animate" exit="exit">
// 					<motion.h2 variants={authFadeInUpVariants} className="Auth__content--title">
// 						{isSignedUp ? "Sign In" : "Sign Up"}
// 					</motion.h2>
// 					<motion.small variants={authFadeInUpVariants} className="Auth__content--disclaimer">
// 						{`Pay attention: this is not the original Netflix ${isSignedUp ? "sign in" : "sign up"}. Don't insert your real credentials here!`}
// 					</motion.small>
// 					{isSignedUp ? <SignIn /> : <SignUp />}
// 					{authError && <motion.p variants={authFadeInUpVariants} className='Auth__content--errors'>{authError}</motion.p>}
// 					<motion.hr variants={authFadeInUpVariants} className="Auth__content--divider" />
// 					<motion.small variants={authFadeInUpVariants} className="Auth__content--toggleView">
// 						{isSignedUp
// 							? `Haven't you registered yet? `
// 							: "Do you already have an account? "}
// 						<span className="toggler" onClick={() => setIsSignedUp(!isSignedUp)}>
// 							{isSignedUp ? "Sign Up" : "Sign In"}
// 						</span>
// 					</motion.small>
// 				</motion.div>
// 			</motion.div>
// 		</motion.div>
// 	);
// };

// export default Auth;


