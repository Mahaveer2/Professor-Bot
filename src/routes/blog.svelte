<script context="module">
  export const prerender = true;
  import {lazyLoad} from "../components/lazyLoad.js";
</script>
<script>
  import {collection,getDocs} from 'firebase/firestore';
  import db from '../firebase';
  let books = [];
  const blogRef = collection(db,'posts');
  
  getDocs(blogRef).then(snapshot => {
    snapshot.docs.forEach((doc) => {
      books.push({...doc.data(),id:doc.id})
      books = books;
    })
  }).catch(err => console.log(err));
  let showLoading = true;
  setTimeout(() => showLoading = false,1000)
</script>
<h1 class="text-gradient text-center text-3xl mt-4">Blog</h1>
<svelte:head>
  <title>Mahaveer Amrani | Blog</title>
</svelte:head>
<div class="flex flex-col-reverse overflow-hidden">

  {#if showLoading}
  <div class="flex w-full justify-center content-center top-[0%] h-[100vh] fixed backdrop-blur-md">
    <img src="/spinner.svg" class="w-20 h-20 absolute top-[45%] backdrop-blur-md" alt="" srcset="">
  </div>
  {/if}
  
  {#each books as post}

  <div class="card p-3">
    <h1 class="text-gray-300">@{post.author}</h1>
    <div class="divider h-[2px] rounded bg-gray-500"></div>
    <h3>{post.body}</h3>
    {#if post.image}
    <img use:lazyLoad="{post.image}" class="w-[300px] rounded-sm" alt="">
    {/if}
  </div>
{/each}
</div>