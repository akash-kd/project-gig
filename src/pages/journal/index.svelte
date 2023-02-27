<script>
	import Note from '../../components/Note/index.svelte'
	import { AuthUser } from '../../stores/User';
	import { onMount } from 'svelte';
	import axios from 'axios'
	let URL = import.meta.env.VITE_BE_URL

	let notes = []
		let user = {}
	AuthUser.subscribe((val) => (user = val))

	async function collectNotes(){
		await axios.post(`${URL}/notes/all`,{
			createdBy: user.uid
		}).then((res)=>{
			notes = res.data;
		})
	}
	onMount(()=>collectNotes())
</script>

<div class="grid grid-cols-5 mob:grid-cols-2 p-5 gap-5 place-items-center overscroll-contain">

	{#each notes as note}
		<Note note={note}/>
	{/each}
	
	<Note type="add"/>
</div>
