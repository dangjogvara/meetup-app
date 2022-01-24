<script>
  import Header from './UI/Header.svelte';
  import MeetupItem from './Meetups/MeetupItem.svelte';

  const meetups = [
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn to code',
      description: 'In this meetup we will learn to code',
      imageUrl:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?bEhcYQAShJnLf0Mtu4JYq8YzICfhz2rB&size=770:433',
      address: '24th Nerd Road, 100 Tórshavn',
      contactEmail: 'learntocode@test.com',
    },
    {
      id: 'm2',
      title: 'Drink beer',
      subtitle: 'Frends',
      description: 'In this meetup we will drink beer',
      imageUrl: 'https://picsum.photos/id/237/200/300',
      address: '245th Nerd Road, 900 Vágur',
      contactEmail: 'beer@test.com',
    },
  ];
</script>

<!-- header component -->
<Header />

<section id="meetups">
  <!-- render meetup items -->
  {#each meetups as meetup (meetup.id)}
    <MeetupItem
      title={meetups.title}
      subtitle={meetup.subtitle}
      description={meetup.description}
      imageUrl={meetup.imageUrl}
      address={meetup.address}
      email={meetup.contactEmail}
    />
  {/each}
</section>

<style>
  #meetups {
    margin-top: 5rem;
  }
</style>
