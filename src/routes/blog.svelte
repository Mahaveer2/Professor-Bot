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
</script>
<h1 class="text-gradient text-center text-3xl mt-4">Blog</h1>
<svelte:head>
  <title>Mahaveer Amrani | Blog</title>
</svelte:head>
<div class="flex flex-col-reverse">
  {#each books as post}

  <div class="card p-3">
    <h1 class="tex-red-200">author: {post.author}</h1>
    <h3>{post.body}</h3>
    {#if post.image}
    <img use:lazyLoad="{post.image}" class="w-[300px] rounded-sm" alt="">
    {/if}
  </div>
{/each}
</div>