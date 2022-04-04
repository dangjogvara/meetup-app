<script>
  import Header from './UI/Header.svelte';
  import Button from './UI/Button.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import EditMeetup from './Meetups/EditMeetup.svelte';

  // Import store
  import meetups from './Meetups/meetups-store';

  let editMode;

  // Add meetup
  function addMeetup(event) {
    editMode = null;
  }

  function cancelEdit() {
    editMode = null;
  }
</script>

<!-- header component -->
<Header />

<main>
  <div class="meetup-controls">
    <Button on:click={() => (editMode = 'add')}>New Meetup</Button>
  </div>
  {#if editMode === 'add'}
    <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
  {/if}
  <MeetupGrid meetups={$meetups} />
</main>

<style>
  .meetup-controls {
    margin: 1rem;
  }

  main {
    margin-top: 5rem;
  }
</style>
