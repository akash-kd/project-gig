<script>
    import Button from "../Button/index.svelte"
    import { Icon,Menu,Sun,Moon,X} from "svelte-hero-icons";
    import { MenuBarVisible } from "../../stores/MenuBarVisble";


    let darkMode = localStorage.theme == "dark" ? true : false;
    function SwitchTheme() {
        darkMode = !darkMode;
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        darkMode
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');
    }

    let vis = false; 
    MenuBarVisible.subscribe(val => vis = val);
</script>




<main class="w-full h-8p px-10 flex justify-between items-center text-white bg-gradient-to-b from-sky-400 to-sky-500 drop-shadow-lg z-50">
    <Button on:click={()=> MenuBarVisible.update(val => !val)} type="icon" cls="center h-8 w-8 border rounded-lg p-1 bg-white bg-opacity-20 hover:bg-opacity-50" >
        <Icon src={vis ? X : Menu} />
    </Button>
    <h1 class="heading">Project GiG</h1>
    <Button on:click={SwitchTheme} type="icon" cls="center h-8 w-8 border rounded-lg p-1 bg-white bg-opacity-20 hover:bg-opacity-50">
        <Icon src={darkMode ? Sun : Moon} size="1.5rem" />
    </Button>
</main>