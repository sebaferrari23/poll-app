<script>
  export let poll;
  console.log(poll);
</script>

<div class="bg-white shadow-xl p-5 rounded-md">

  <h3>{poll.question}</h3>
  <ul>
    {#each poll.choices as choice, i}
      <li>{ choice.choice }</li>
    {/each}
  </ul>
</div>