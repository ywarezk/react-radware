import { useState } from "react"


export default function Login() {
	// controlled
	
	const [emailValue, setEmailValue] = useState('yariv@nerdeez.com');
	
	const [passwordValue, setPasswordValue] = useState('12345');
	
	const handleSubmit = (event) => {
		console.log(`my email: ${emailValue} password: ${passwordValue}`);
		event.preventDefault();
	}
	
	const handleEmailChange = (event) => {
		setEmailValue(event.target.value);
	}
	
	const handlePasswordChange = (event) => {
		setPasswordValue(event.target.value)
	}
	
	return (
		<form noValidate onSubmit={handleSubmit}>
			<input 				
				value={emailValue}
				onChange={handleEmailChange}	
				type="email" placeholder="Enter your email" />
			<input 
				value={passwordValue}
				onChange={handlePasswordChange}
				type="password" 
				placeholder="Enter your password" />
			
			<button type="submit">
				Login
			</button>
		</form>
	)
}