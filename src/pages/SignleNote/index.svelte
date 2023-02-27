<script>
	import { AuthUser } from '../../stores/User'
	import { navigate } from 'svelte-routing'
	let URL = import.meta.env.VITE_BE_URL
	let user = {}
	AuthUser.subscribe((val) => (user = val))

	import { onMount } from 'svelte'
	import axios from 'axios'
	export let _id = ''
	export let type = ''
	let emoji = ''
	let content = ''
	$: _id = _id.slice(1, _id.length)

	async function addNote() {
		const res = await axios.post(`${URL}/notes/add`, {
			createdBy: user.uid,
			content: content,
			emoji: emoji
		})
		.catch(res=>console.log(res))

		if (res && res.data._id) navigate(`/journal/:${res.data._id}`)
	}

	async function updateNote() {
		const res = await axios.post(`${URL}/notes/update`, {
			createdBy: user.uid,
			emoji: emoji,
			content: content,
			_id: _id
		})

		if (res && res.data._id) navigate(`/journal/:${res.data._id}`)

	}
	async function fetchNote() {
		const res = await axios.post(`${URL}/notes/get`, {
			createdBy: user.uid,
			_id: _id,
		})

		content = res.data.content
		emoji = res.data.emoji
	}
	onMount(() => fetchNote())
</script>

<div class="full center col space-y-10">
	<div
		class="mob:w-80p w-50p h-50p bg-zinc-100 border-2 drop-shadow-lg rounded-lg p-3"
	>
		<textarea
			bind:value={content}
			class="full bg-transparent placeholder:text-zinc-200 outline-none font-rubik font-semibold text-lg"
			placeholder="Enter the text..."
		/>
	</div>


	{#if content}
	<div class="mob:w-80p w-50p h-10p grid grid-cols-5 center gap-5">
		<button
			on:click={() => (emoji = '🤬')}
			class={`full text-4xl ${
				emoji == '🤬' ? 'bg-sky-500' : 'bg-zinc-200'
			} drop-shadow-sm border rounded-lg font-rubik font-bold text-white`}
			>🤬</button
		>
		<button
			on:click={() => (emoji = '😡')}
			class={`full text-4xl ${
				emoji == '😡' ? 'bg-sky-500' : 'bg-zinc-200'
			} drop-shadow-sm border rounded-lg font-rubik font-bold text-white`}
			>😡</button
		>
		<button
			on:click={() => (emoji = '🙂')}
			class={`full text-4xl ${
				emoji == '🙂' ? 'bg-sky-500' : 'bg-zinc-200'
			} drop-shadow-sm border rounded-lg font-rubik font-bold text-white`}
			>🙂</button
		>
		<button
			on:click={() => (emoji = '😀')}
			class={`full text-4xl ${
				emoji == '😀' ? 'bg-sky-500' : 'bg-zinc-200'
			} drop-shadow-sm border rounded-lg font-rubik font-bold text-white`}
			>😀</button
		>
		<button
			on:click={() => (emoji = '😁')}
			class={`full text-4xl ${
				emoji == '😁' ? 'bg-sky-500' : 'bg-zinc-200'
			} drop-shadow-sm border rounded-lg font-rubik font-bold text-white`}
			>😁</button
		>
	</div>
	{/if}

	<button
		on:click={() => (type == 'add' ? addNote() : updateNote())}
		class="h-10p mob:w-80p w-50p bg-sky-500 drop-shadow-sm border rounded-lg font-rubik font-bold text-lg text-white"
		>Save</button
	>
</div>
