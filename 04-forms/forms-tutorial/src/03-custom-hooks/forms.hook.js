/**

We have repeating logic when handling form in the state

let's have a custom hook the we will place the repeating logic in the custom hook

 */
 
export default function useForms(initialValues) {
	const [values, setValues] = useState(initialValues);
		
	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	}
	
	return [values, handleChange];
}