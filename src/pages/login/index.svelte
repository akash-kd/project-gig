<script>
	import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword}from "firebase/auth"
	import {validateEmail,validatePassword} from "../../helpers/validators";
	import {navigate} from "svelte-routing"
	import {app} from '../../firebase/app';
	import { slide } from 'svelte/transition'
	import {AuthUser} from '../../stores/User';


	export const auth = getAuth(app);
	let email = "";
	let password = "";
	let error = "";

	async function Login() {
		console.log(email, password)
		if (validateEmail(email) && validatePassword(password)) {
            // Login 
			await signInWithEmailAndPassword(auth, email, password).catch(
				(res) => {
					if (res.message == 'Firebase: Error (auth/email-already-in-use).')
						error = 'User Already Signed Up.'
				},
			)

			if(auth.currentUser){
				localStorage.setItem('user',JSON.stringify(auth.currentUser));
				AuthUser.set(auth.currentUser);
				navigate('/');
			}      
		} else if (!validateEmail(email)) error = 'Email is not valid'
		else if (!validatePassword(password))
			error = 'Password must contain a digit and length > 5'
	}
</script>

<form class="full center col space-y-3 font-rubik" autocomplete="off">
	<h1 class="heading text-2xl">Login</h1>
	<div class="row border-2 bg-gray-50 rounded-lg w-[350px] h-5p mob:w-80p px-2 py-1 dark:text-black">
		<input
			type="email"
			class="bg-transparent outline-none full"
			placeholder="Email"
			bind:value={email}
		/>
	</div>
	<div class="row border-2 bg-gray-50 rounded-lg w-[350px] h-5p mob:w-80p px-2 py-1">
		<input
			type="password"
			class="bg-transparent outline-none full"
			placeholder="Password"
			bind:value={password}
		/>
	</div>
	{#if error}
		<div
			class="center h-5p mob:w-80p py-1 bg-red-50 rounded-lg border-2 border-red-500 text-red-500"
			transition:slide
		>
			{error}
		</div>
	{/if}

	<input
		on:click|preventDefault={Login}
		type="submit"
		value="Login"
		class="w-[350px] h-5p mob:w-80p bg-sky-500 rounded-lg text-white"
	/>
</form>
