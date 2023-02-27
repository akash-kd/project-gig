<script>
	import { slide } from 'svelte/transition'
	import { navigate } from 'svelte-routing'
	import { MenuBarVisible } from '../../stores/MenuBarVisble.js'
	import { AuthUser } from "../../stores/User"
	let user = {};
	AuthUser.subscribe(val => user = val)
</script>

<div
	class="mob:w-[100vw] flex flex-col w-20p h-full bg-slate-100 dark:bg-gray-700 border dark:border-gray-600 shadow-md drop-shadow-sm font-inter"
>
	<button
		on:click={() => {
			MenuBarVisible.set(false)
			navigate('/')
		}}
		class="h-10p border-b hover:bg-slate-50 dark:border-gray-600 dark:hover:bg-gray-600"
		in:slide={{ delay: 0, duration: 150 }}>🤣</button
	>
	<button
		on:click={() => {
			MenuBarVisible.set(false)
			navigate('/quotes')
		}}
		class="h-10p border-b hover:bg-slate-50 dark:border-gray-600 dark:hover:bg-gray-600"
		in:slide={{ delay: 150, duration: 150 }}>💯</button
	>
	{#if user}
	<button
		on:click={() => {
			MenuBarVisible.set(false)
			navigate('/journal')
		}}
		class="h-10p border-b hover:bg-slate-50 dark:border-gray-600 dark:hover:bg-gray-600"
		in:slide={{ delay: 300, duration: 150 }}>Journal</button
	>
	<button
		on:click={() => {
			MenuBarVisible.set(false)
			navigate('/goals')
		}}
		class="h-10p border-b hover:bg-slate-50 dark:border-gray-600 dark:hover:bg-gray-600"
		in:slide={{ delay: 450, duration: 150 }}>Goals</button
	>
	{/if}
</div>
