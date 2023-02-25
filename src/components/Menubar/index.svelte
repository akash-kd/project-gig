<script>
    import { slide } from "svelte/transition";
    import { navigate } from "svelte-routing"
</script>

<div class="flex flex-col w-20p h-full bg-slate-100 dark:bg-gray-700 border dark:border-gray-600 shadow-md drop-shadow-sm">
    <button on:click={()=>navigate('/about')} class="h-10p border-b dark:border-gray-600 hover:bg-gray-600" in:slide={{delay:0,duration:150}}>Jokes</button>
    <button class="h-10p border-b dark:border-gray-600 hover:bg-gray-600" in:slide={{delay:150,duration:150}}>Quotes</button>
    <button class="h-10p border-b dark:border-gray-600 hover:bg-gray-600" in:slide={{delay:300,duration:150}}>Journal</button>
    <button class="h-10p border-b dark:border-gray-600 hover:bg-gray-600" in:slide={{delay:450,duration:150}}>Goals</button>
</div>