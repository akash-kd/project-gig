<script>
	import Button from '../Button/index.svelte'
	import { Icon, Menu, Sun, Moon, X } from 'svelte-hero-icons'
	import { MenuBarVisible } from '../../stores/MenuBarVisble'
    import { AuthUser } from '../../stores/User'
  import { navigate } from 'svelte-routing'

	let darkMode = localStorage.theme == 'dark' ? true : false
	function SwitchTheme() {
		darkMode = !darkMode
		localStorage.setItem('theme', darkMode ? 'dark' : 'light')
		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark')
	}

	let vis = false
	MenuBarVisible.subscribe((val) => (vis = val))

    let user = {}
    AuthUser.subscribe((val)=> user = val);
</script>

<main
	class="w-full h-8p min-h-[50px] px-10 center text-white bg-gradient-to-b from-sky-400 to-sky-500 drop-shadow-lg z-50"
>
		<!-- <div class="w-1/5">
			<Button
				on:click={() => MenuBarVisible.update((val) => !val)}
				type="icon"
				cls="center h-8 border rounded-lg p-1 bg-white bg-opacity-20 hover:bg-opacity-50"
			>
				<Icon src={vis ? X : Menu} />
			</Button>
		</div> MENU BAR HAMBURGER -->
		<div class="w-2/5 flex justify-start items-start">
			<h1 class="heading">RK</h1>
		</div>
		<div class="w-3/5 flex justify-end space-x-3">
			<Button on:click={()=>{navigate('/')}} text={"🤣"} cls="truncate center h-8 w-10 border rounded-lg p-1 bg-white bg-opacity-20 hover:bg-opacity-50"/>
			<Button on:click={()=>{navigate('/quotes')}} text={"💯"} cls="truncate center h-8 w-10 border rounded-lg p-1 bg-white bg-opacity-20 hover:bg-opacity-50"/> 
		</div>
</main>
