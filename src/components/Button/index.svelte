<script>
    export let cls = "";
    export let text = "";
    export let type = "normal";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function sayHello() {
        dispatch('click');
    }
</script>

{#if type == "normal"}
    <button class={cls} on:click={sayHello}>{text}</button>
{:else if type == "icon"}
    <button class={cls} on:click={sayHello}>
        <slot></slot>
    </button>
{/if}
