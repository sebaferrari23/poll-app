<script>
  import { polls, searchTerm, fetchPolls } from "../stores/PollStore.js";
  import PollCard from "../components/PollCard.svelte";

  let filteredPolls = [];
  $: {
    if($searchTerm){
      filteredPolls = $polls.filter( poll => poll.question.toLowerCase().includes($searchTerm.toLowerCase()));
    }
    else {
      filteredPolls = [...$polls];
    }
  }

  fetchPolls();
</script>

{#if filteredPolls.length > 0}
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPolls as poll (poll.id)}
    <PollCard {poll} />
  {/each}
</div>
{:else}
<p>There's not polls yet</p>
{/if}