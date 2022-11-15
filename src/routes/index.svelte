<script>
   import Card from "../components/card.svelte";
   import PageTransition from "../components/PageTransition.svelte";
   import logo from '../images/chat.png';
</script>
<svelte:head>
  <title>Home</title>
</svelte:head>


  <div class="hero">
  </div>
  <PageTransition>
    <div class="mt-[80vh] ml-[12%] flex justify-between items-center">
      <h1 class="text-4xl text-gradient w-[53%] ">Welcome to my portfolio</h1>
        <p class="w-[40%] ">
          I am an indie web developer</p>
    </div>
      <div class="grid w-[80%] ml-auto ml-[6%] mr-auto grid-cols-1 lg:grid-cols-3 gap-[20px] p-5 mt-5 card-grid">
        <a target="_blank" href="https://mkvchatapp.herokuapp.com/">
        <Card
      title='Python Django Chat app'
      img={logo}
      />
    </a>
      <a target="_blank" href="https://nextjsmemer.vercel.app/">
      <Card
      title='Nextjs Twitter clone'
      img='https://9to5mac.com/wp-content/uploads/sites/6/2019/07/twitter-desktop-dark-mode-new-design.jpeg?quality=82&strip=all'
      />
      </a>
      <a href="#noPreveiwAvailable">
      <Card
      title='Django Social Network'
      img='https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/686321/retina_1708x683_staging.toptal.net_designers_ux_minimalist-brutalist-web-design-92ef53170f74a492eecb6562729c5d24.png'
      />
    </a>
    <a target="_blank" href="https://badsituationgames.netlify.app/">
      <Card
    title='Games made with Unity'
    img='https://cdn.mos.cms.futurecdn.net/ikAXid4d5CLbmXcWCfRJqm.jpeg'
    />
  </a>
    <a target="_blank" href="https://moviesappbya.netlify.app/">
    <Card
    title='Vuejs movie app'
    img='https://s.studiobinder.com/wp-content/uploads/2020/04/Best-Movies-of-2017-Featured.jpg'
    />
    </a>
    <a href="#noPreveiwAvailable">
    <Card
    title='Django LMS'
    img='https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/686321/retina_1708x683_staging.toptal.net_designers_ux_minimalist-brutalist-web-design-92ef53170f74a492eecb6562729c5d24.png'
    />
  </a>
      </div>
  </PageTransition>