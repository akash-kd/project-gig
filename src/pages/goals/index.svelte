<script>
	import axios from 'axios'
	import { Icon, CheckCircle, XCircle } from 'svelte-hero-icons'
	import { onMount } from 'svelte'
	import { AuthUser } from '../../stores/User.js'
	import { Goals } from '../../stores/Goals'

	let URL = import.meta.env.VITE_BE_URL

	let user = {}
	AuthUser.subscribe((val) => (user = val))

	let text

	let goals = []
	Goals.subscribe((val) => (goals = val))

	onMount(() => collectAllGoals())
	async function collectAllGoals() {
		await axios
			.post(`${URL}/goal/all`, { createdBy: user.uid })
			.then((res) => {
				goals = res.data
				console.log(goals)
				Goals.set(goals)
			})
			.catch((res) => console.error(res))
	}
	async function addGoal() {
		if (text && user.uid) {
			await axios.post(`${URL}/goal/add`, {
				goal: text,
				createdBy: user.uid,
			})
			collectAllGoals()
			text = ''
		}
	}
	async function updateGoal(_id) {
		if (user.uid) {
			await axios.post(`${URL}/goal/done`, {
				_id: _id,
				createdBy: user.uid,
			})
			collectAllGoals()
			text = ''
		}
	}
	async function deleteGoal(_id) {
		if (user.uid) {
			await axios.post(`${URL}/goal/delete`, {
				_id: _id,
				createdBy: user.uid,
			})
			collectAllGoals()
			text = ''
		}
	}
</script>

<div class="w-full h-full p-20 px-48 mob:px-10 space-y-10">
	<div class="min-h-[90%] w-full col space-y-5 overscroll-contain">
		{#each goals as { done, goal, _id }}
			<div
				class="flex w-full h-10p  bg-zinc-100 border-2 drop-shadow-sm items-center px-5 rounded-lg"
			>
				<button on:click={() => updateGoal(_id)}
					><Icon
						on:click={() => updateGoal(_id)}
						class={`${
							done ? 'text-green-400' : 'text-zinc-300'
						} hover:text-zinc-500`}
						src={CheckCircle}
						size="30px"
					/></button
				>
				<h1 class="ml-5 font-rubik text-lg w-full">{goal}</h1>
				<button on:click={() => deleteGoal(_id)}>
					<Icon class={`text-zinc-500`} src={XCircle} size="30px" />
				</button>
			</div>
		{/each}
	</div>

	<input
		bind:value={text}
		on:keypress={(e) => (e.charCode == 13 ? addGoal() : 0)}
		class="h-10p w-full bg-slate px-10 border-2 rounded-lg drop-shadow-lg font-rubik font-semibold outline-none"
		placeholder="Enter your goals"
	/>
</div>
