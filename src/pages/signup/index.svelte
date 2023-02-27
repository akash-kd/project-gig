<script>
	import { slide } from 'svelte/transition'
	import { app } from '../../firebase/app'
    import { navigate } from "svelte-routing"
	import {
		getAuth,
		createUserWithEmailAndPassword,
		updateProfile,
	} from 'firebase/auth'
	import { validateEmail, validatePassword } from '../../helpers/validators'
	import {AuthUser} from '../../stores/User';
	let fullname = ''
	let email = ''
	let password = ''

	const auth = getAuth(app)

	let error = ''

	async function SignUp() {
		console.log(email, password)

		if (fullname && validateEmail(email) && validatePassword(password)) {
            // Login 
			await createUserWithEmailAndPassword(auth, email, password).catch(
				(res) => {
					if (res.message == 'Firebase: Error (auth/email-already-in-use).')
						error = 'User Already Signed Up.'
				},
			)
            // Update Full name
			await updateProfile(auth.currentUser, { displayName: fullname })
				.catch((res) => console.log(res))

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
	<h1 class="heading text-2xl">Sign Up</h1>
	<div
		class="row border-2 bg-gray-50 rounded-lg w-[350px] h-5p mob:w-80p px-2 py-1 dark:text-black"
	>
		<input
			type="text"
			class="bg-transparent outline-none full"
			placeholder="Full Name"
			bind:value={fullname}
		/>
	</div>
	<div
		class="row border-2 bg-gray-50 rounded-lg w-[350px] h-5p mob:w-80p px-2 py-1 dark:text-black"
	>
		<input
			type="email"
			class="bg-transparent outline-none full"
			placeholder="Email"
			bind:value={email}
		/>
	</div>
	<div
		class="row border-2 bg-gray-50 rounded-lg w-[350px] h-5p mob:w-80p px-2 py-1"
	>
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
		on:click|preventDefault={SignUp}
		type="submit"
		value="Sign Up"
		class="w-[350px] h-5p mob:w-80p bg-sky-500 rounded-lg text-white"
	/>
</form>
