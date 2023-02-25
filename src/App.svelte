<script>

    // Dark Mode Config
  if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
      document.documentElement.classList.add('dark');
  } else {
      document.documentElement.classList.remove('dark');
  }

  // Components
  import Navbar from './components/Nav/index.svelte'
  import MenuBar from './components/Menubar/index.svelte'

  // Svelte
  import { Router, Route } from 'svelte-routing'

  // Stores
  import { MenuBarVisible } from './stores/MenuBarVisble';

  let vis = false;
  MenuBarVisible.subscribe(value => vis = value);
</script>


<main class="w-full h-full flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
  <Navbar />
  <div class="w-full h-full flex">
    {#if vis}
      <MenuBar />
    {/if}

    <!-- MAIN CONTENT -->
    <div class="w-full h-full">
      <Router>
        <Route>
          <div class="w-full h-full bg-white center dark:bg-gray-900">
            Home
          </div>
        </Route>

        <Route path="/about">
            About
        </Route>
      </Router>
    </div>
  </div>
</main>

