import useForms from "../03-custom-hooks/forms.hook";


export default function Register() {
	const [values, handleChange] = useForms({
		email: 'yariv@nerdeez.com',
		password: '',
		repeat: ''
	})
	
	const handleSubmit = (event) => {
		console.log(`my email: ${emailValue} password: ${passwordValue}`);
		event.preventDefault();
	}
	
	return (
		<form noValidate onSubmit={handleSubmit}>
			<input 	
				name="email"			
				value={values.email}
				onChange={handleChange}	
				type="email" placeholder="Enter your email" />
			<input 
				name="password"
				value={values.password}
				onChange={handleChange}
				type="password" 
				placeholder="Enter your password" />
			<input 
				name="repeat"
				value={values.repeat}
				onChange={handleChange}
				type="password" 
				placeholder="Repeat your password" />
			
			<button type="submit">
				Login
			</button>
		</form>
	)
}


/**

{
	amiram: 'hello',
	['amiram' + Math.random()]: 'someValue'
}

 */