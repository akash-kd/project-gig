<script>
	import { onMount } from 'svelte'
	import axios from 'axios'
    import { fade } from 'svelte/transition';
	let quotes
	let x = 0
	let n = 0;

	async function fetchJoke() {
		quotes = {}
		try {
			const res = await axios.get(`https://type.fit/api/quotes`)
			quotes = res.data
			console.log(quotes)
		} catch (e) {
			console.log(e)
		}
	}
	onMount(async () => fetchJoke())
	let gradient = [
        "background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);",
        "background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);",
        "background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);",
        "background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);",
        "background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);",
        "background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);",
        "background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);",
        "background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);",
        "background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);",
        "background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);",
    ]
</script>

{#if quotes !== undefined}
	<div class="full center col space-y-10 bg-gradient-to-br" style={gradient[n]}>
		<div
			transition:fade class={`border drop-shadow-md w-50p h-50p mob:w-80p bg-white rounded-lg center text-black font-rubik text-5xl text-center p-5 px-8 mob:px-5 mob:text-xl`}
		>
			{quotes[x] ? quotes[x].text : 'Loading...'}
		</div> 
		<button
			on:click={() => {x = x+1;n = Math.floor(Math.random() * 10)}}
			class="border border-slate-400 drop-shadow-md h-10p w-50p rounded-lg font-rubik text-white text-xl bg-sky-500"
			>Next ></button
		>
	</div>
{/if}
