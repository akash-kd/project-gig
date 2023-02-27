<script>
	import { Icon, Plus } from 'svelte-hero-icons'
	import { navigate } from 'svelte-routing'
	export let type = 'normal'
	export let note = {};
</script>

{#if type == 'normal'}
	<div
		on:click={() => navigate(`/journal/:${note._id}`)}
		class="w-40 h-40 bg-zinc-100 border-2 drop-shadow-sm rounded-lg font-rubik text-wrap"
	>
		<div
			class="w-40 h-40 p-3 text-clip break-words overflow-hidden leading-snug"
		>{note.content}</div>
	</div>
{:else if type == 'add'}
	<div
		on:click={() => navigate('/journal/add/')}
		class="w-40 h-40 center bg-zinc-100 border-2 drop-shadow-sm rounded-lg font-rubik text-wrap"
	>
		<Icon src={Plus} size="40px" class="text-zinc-500" />
	</div>
{/if}
