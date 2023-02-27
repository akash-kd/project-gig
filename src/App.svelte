<script>
	// Components
	import Navbar from './components/Nav/index.svelte'
	import MenuBar from './components/Menubar/index.svelte'

	// Pages
	import Login from './pages/login/index.svelte'
	import SignUp from './pages/signup/index.svelte'
	import Jokes from './pages/jokes/index.svelte'
	import Quotes from './pages/quotes/index.svelte'
	import Goals from './pages/goals/index.svelte'
	import Journal from './pages/journal/index.svelte'
	import SingleNote from './pages/SignleNote/index.svelte'

	// Svelte
	import { Router, Route } from 'svelte-routing'

	// Stores
	import { MenuBarVisible } from './stores/MenuBarVisble'
	import { AuthUser } from './stores/User'

	let vis = false
	MenuBarVisible.subscribe((value) => (vis = value))

	let user = {}
	AuthUser.subscribe((val) => (user = val))
	console.log(user)
</script>

<main
	class="w-full h-full flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white overflow-y-auto"
>
	<Navbar />
	<div class="w-full h-full flex">
		<!-- {#if vis}
			<MenuBar />
		{/if} -->

		<!-- MAIN CONTENT -->
		<div class={`w-full h-full ${vis ? "mob:hidden" : ""}`}>
			<Router>
				<Route path=""><Jokes /></Route>
				<Route path="/login"><Login /></Route>
				<Route path="/signup"><SignUp /></Route>
				<Route path="/quotes"><Quotes /></Route>
				<Route path="/goals"><Goals /></Route>
				<Route path="/journal"><Journal /></Route>
				<Route path="/journal/:_id" let:params><SingleNote _id={params._id} /></Route>
				<Route path="/journal/add"><SingleNote type="add" /></Route>
			</Router>
		</div>
	</div>
</main>
