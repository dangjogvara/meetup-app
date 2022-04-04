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
    const meetupData = {
      title: event.detail.title,
      subtitle: event.detail.title,
      description: event.detail.description,
      imageUrl: event.detail.imageUrl,
      address: event.detail.address,
      contactEmail: event.detail.email,
    };
    meetups.addMeetup(meetupData);
    editMode = null;
  }

  function toggleFavorite(event) {
    const id = event.detail;
    meetups.toggleFavorite(id);
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
  <MeetupGrid meetups={$meetups} on:togglefavorite={toggleFavorite} />
</main>

<style>
  .meetup-controls {
    margin: 1rem;
  }

  main {
    margin-top: 5rem;
  }
</style>
