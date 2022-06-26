<script>
  export let title = '';
  export let img = '';
</script>
<div class="card flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
      <img class="rounded-t-lg" src={img} alt="{title}"/>
      <h5 class="text-black text-xl font-medium mb-2">{title}</h5>
  </div>
</div>
<style>
  .card{
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: .2s ease-in-out;
  }

  img{
    transition: .1s ease;
    width: 100%;
    height: 100%;
  }

  img:hover{
    transform: scale(1.2);
  }

  .card h5{
    position: absolute;
    bottom:5%;
    left: 10%;
    color: #fff;
  }
</style>