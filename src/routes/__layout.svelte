<script>
  import "../app.css";
  import { page } from '$app/stores';
  import { theme } from '../store';
  import { onMount } from "svelte";
  import Toggler from "../components/toggler.svelte";
  import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

  NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16
	});


	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}


  onMount(() => {
    if(!localStorage.getItem('theme')){
      localStorage.setItem('theme',JSON.stringify({active:true}))
    }

    theme.update(n => n = !JSON.parse(localStorage.getItem('theme')).active); 
    
  })
</script>
<svelte:head>
  <title>MahaveerK</title>
</svelte:head>

<nav class={`nav flex flex-wrap items-center justify-between px-4`}>
  <a href="/">
    <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
      <svg class="fill-current text-black h-8 mr-2 w-8" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 716 895">
        <path d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885"></path>
        <path class="text-white fill-current" d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"></path>
        <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722"></path>
      </svg>
      <span class="font-semibold text-xl tracking-tight">Mahaveer Amrani</span>
    </div>
  </a>
  <div>
    <Toggler/>
  </div>

  <input class="menu-btn hidden" type="checkbox" id="menu-btn">
  <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
    <span class="navicon bg-grey-darkest flex items-center relative"></span>
  </label>

  <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
    <li class="border-t md:border-none">
      <a href="/" class:active={$page.url.pathname == '/'} class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker ">Home</a>
    </li>
    
    <li class="border-t md:border-none">
      <a href="/about/" class:active={$page.url.pathname == '/about'} class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">About</a>
    </li>
    
    <li class="border-t md:border-none">
      <a href="/blog/" class:active={$page.url.pathname == '/blog'} class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Blog</a>
    </li>
  </ul>
</nav>

<div>
  <slot></slot>
</div>

<footer class="p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
  <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">Mahaveer™</a>. All Rights Reserved.
  </span>
  <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
          <a href="/" class="mr-4 hover:underline md:mr-6 ">Home</a>
      </li>
      <li>
          <a href="/about" class="mr-4 hover:underline md:mr-6">About</a>
      </li>
      <li>
          <a href="/blog" class="mr-4 hover:underline md:mr-6">Blog</a>
      </li>
  </ul>
</footer>
