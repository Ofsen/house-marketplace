import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Components
import { toast } from 'react-toastify';
// Auth
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';
import OAuth from '../components/OAuth';

export default function SignIn() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const navigate = useNavigate();

	const onChange = (e) => {
		setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const auth = getAuth();

			const userCredential = await signInWithEmailAndPassword(auth, email, password);

			if (userCredential.user) {
				toast.success('Logged-in Successfully!');
				navigate('/');
			}
		} catch (err) {
			toast.error('Bad user credentials');
		}
	};

	return (
		<>
			<div className='pageContainer'>
				<header>
					<p className='pageHeader'>Welcome Back!</p>
				</header>

				<main>
					<form onSubmit={onSubmit}>
						<input
							type='email'
							className='emailInput'
							placeholder='Email'
							id='email'
							value={email}
							onChange={onChange}
						/>
						<div className='passwordInputDiv'>
							<input
								type={showPassword ? 'text' : 'password'}
								className='passwordInput'
								placeholder='Password'
								id='password'
								onChange={onChange}
							/>
							<img
								src={visibilityIcon}
								className='showPassword'
								alt='show password'
								onClick={() => setShowPassword((prevState) => !prevState)}
							/>
						</div>
						<Link to='/forgot-password' className='forgotPasswordLink'>
							Forgot password
						</Link>

						<div className='signInBar'>
							<p className='signInText'>Sign In</p>
							<button className='signInButton'>
								<ArrowRightIcon fill='#fff' width='34px' height='34px' />
							</button>
						</div>
					</form>

					<OAuth />

					<Link to='/sign-up' className='registerLink'>
						Sign Up Instead
					</Link>
				</main>
			</div>
		</>
	);
}
