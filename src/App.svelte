<script>
  import Header from './UI/Header.svelte';
  import Button from './UI/Button.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import EditMeetup from './Meetups/EditMeetup.svelte';

  // Generate ID
  import { v4 as uuidv4 } from 'uuid';

  // mock data
  let meetups = [
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn to code',
      description: 'In this meetup we will learn to code',
      imageUrl:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?bEhcYQAShJnLf0Mtu4JYq8YzICfhz2rB&size=770:433',
      address: '24th Nerd Road, 100 Tórshavn',
      contactEmail: 'learntocode@test.com',
      isFavorite: false,
    },
    {
      id: 'm2',
      title: 'Drink beer',
      subtitle: 'Frends',
      description: 'In this meetup we will drink beer',
      imageUrl: 'https://picsum.photos/id/237/200/300',
      address: '245th Nerd Road, 900 Vágur',
      contactEmail: 'beer@test.com',
      isFavorite: false,
    },
  ];

  let editMode;

  // Add meetup
  function addMeetup(event) {
    const newMeetup = {
      id: uuidv4(),
      title: event.detail.title,
      subtitle: event.detail.title,
      description: event.detail.description,
      imageUrl: event.detail.imageUrl,
      address: event.detail.address,
      contactEmail: event.detail.email,
    };
    meetups = [newMeetup, ...meetups];
    editMode = null;
  }

  function toggleFavorite(event) {
    const id = event.detail;
    const updatedMeetup = { ...meetups.find(m => m.id === id) };
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    const meetupIndex = meetups.findIndex(m => m.id === id);
    const updatedMeetups = [...meetups];
    updatedMeetups[meetupIndex] = updatedMeetup;
    meetups = updatedMeetups;
  }
</script>

<!-- header component -->
<Header />

<main>
  <div class="meetup-controls">
    <Button on:click={() => (editMode = 'add')}>New Meetup</Button>
  </div>
  {#if editMode === 'add'}
    <EditMeetup on:save={addMeetup} />
  {/if}
  <MeetupGrid {meetups} on:togglefavorite={toggleFavorite} />
</main>

<style>
  .meetup-controls {
    margin: 1rem;
  }

  main {
    margin-top: 5rem;
  }
</style>
