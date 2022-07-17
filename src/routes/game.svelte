<script>
  import win from '../images/win.mp3';
  import lose from '../images/lose.mp3';
  const generateTabs = (x,y) => {
    let rand = Math.floor(Math.random(0)*(1,4));
    
    switch (rand) {
      case 0:
      options = [x+y+rand,x+y,x*y,x/y];
        break;
        case 1:
      options = [x-y,x+y,x*y,x/y];
        break;
        case 2:
      options = [x-y,x*y,x+y,x/y];
        break;
        case 3:
      options = [x/y+2,x-y,x*y,x+y];
        break;      
        default:
        options = [x+y/2,x-y+2,x*y,x+y];
        break;
    }
  }
  let x = Math.floor( Math.random(10,100) * (10,20) );
  let y = Math.floor( Math.random(10,100) * (10,20) );
  let options = [];
  let hardness = 0;

  generateTabs(x,y);

console.log(options);

  const check = (val) => {
    if(val == (x+y)){
      hardness +=10;
      var audio = new Audio(win);
      audio.play();
      x = Math.floor( Math.random(10,100) * (10 * hardness,20 * (hardness/2)) );
      y = Math.floor( Math.random(10,100) * (10 * hardness,20 * (hardness/2)) );
      generateTabs(x,y);
    }else{
      var audio = new Audio(lose);
      audio.play();
    }
  }
</script>
<svelte:head>
  <title>Game</title>
</svelte:head>
<h1 align='center'>Game</h1>
<h2 class="text-2xl text-center mt-2">{x}+{y}=?</h2>
<div class="inp mt-2 grid grid-cols-2 md:grid-cols-4">
  {#each options as option}
  <div on:click={check(option)} class="tab w-[200px] h-[200px] p-5">
    <h2>{option}</h2>
  </div>
  {/each}
</div>
