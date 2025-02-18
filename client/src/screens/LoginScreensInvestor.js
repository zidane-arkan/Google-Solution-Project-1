import React, { useRef, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth-context";

const LoginScreensInvestor = () => {
	const ctx = useContext(AuthContext);
	const emailInputRef = useRef(null);
	const passwordInputRef = useRef(null);
	const [message, setMessage] = useState(null);
	const [getValidForm, setValidForm] = useState(true);
	useEffect(() => {
		if (
			emailInputRef.current.value.trim().length === 0 ||
			passwordInputRef.current.value.trim().length < 6 ||
			!(
				emailInputRef.current.value.includes("@") &&
				emailInputRef.current.value.includes(".")
			)
		) {
			setValidForm(false);
		} else {
			setValidForm(true);
		}
	}, [emailInputRef.current.value, passwordInputRef.current.value]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = emailInputRef.current.value;
		const password = passwordInputRef.current.value;
		if (!getValidForm) {
			setMessage("Please enter a valid email and password");
			return;
		}
		ctx.investorLogin(email, password);
	};

	return (
		<div className="min-h-screen bg-[#E6EDE9] flex">
			<div className="hidden lg:block relative w-0 flex-1">
				<img
					className="absolute inset-0 h-full w-100 object-cover"
					src="../../../assets/bg-investor.png"
					alt=""
				/>
			</div>
			<div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
				<div className="mx-auto w-full max-w-sm lg:w-96">
					<div className="p-1 mb-5">
						<Link to="/logininvestor">
							<button
								type="submit"
								className="bg-white hover:bg-gray-100 text-green-800 poppins font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
							>
								Sign In as Investor Account
							</button>
						</Link>
					</div>
					<div className="p-1">
						<Link to="/loginbusiness">
							<button
								type="submit"
								className="bg-white hover:bg-gray-100 text-green-800 poppins font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
							>
								Sign In as Business Account
							</button>
						</Link>
					</div>
					<h2 className="mt-6 text-3xl font-extrabold text-gray-900 poppins">
						Sign in Investor
					</h2>
					<div className="mt-8">
						<div className="mt-6">
							<form
								autoComplete="off"
								onSubmit={handleSubmit}
								className="space-y-6"
							>
								{message && <p>{message}</p>}
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 poppins"
									>
										Email
									</label>
									<div className="mt-1">
										<input
											id="email"
											name="email"
											type="text"
											autoComplete="email"
											placeholder="Email"
											ref={emailInputRef}
											required
											className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>
								</div>

								<div className="space-y-1">
									<label
										htmlFor="password"
										className="block text-sm font-medium text-gray-700 poppins"
									>
										Password
									</label>
									<div className="mt-1">
										<input
											id="password"
											name="password"
											type="password"
											autoComplete="off"
											placeholder="Password"
											ref={passwordInputRef}
											required
											className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm poppins"
										/>
									</div>
								</div>

								<div className="flex justify-center">
									<button
										type="submit"
										className="w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-500 hover:bg-[#6DFBAA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 poppins"
									>
										Sign In
									</button>
								</div>
							</form>
							&nbsp;&nbsp;
							<Link to="/signup">
								<h1 className="absolute px-24 text-[#008C41] font-bold poppins">
									Create an Account
								</h1>
							</Link>
							<h1 className="poppins">New Here?</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden lg:block relative w-0 flex-1"></div>
		</div>
	);
};

export default LoginScreensInvestor;
