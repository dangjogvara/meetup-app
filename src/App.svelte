<script>
    import Header from './UI/Header.svelte';
    import MeetupGrid from './Meetups/MeetupGrid.svelte';

    // Generate ID
    import { v4 as uuidv4 } from 'uuid';

    // Variables
    let title = '';
    let subtitle = '';
    let address = '';
    let imageURL = '';
    let email = '';
    let description = '';


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

    // Add meetup
    function addMeetup() {
        const newMeetup = {
            id: uuidv4(),
            title,
            subtitle,
            description,
            imageUrl: imageURL,
            address,
            contactEmail: email,
        };
        meetups = [newMeetup, ...meetups];
    }
</script>

<!-- header component -->
<Header />

<main>
    <form on:submit|preventDefault={addMeetup}>
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" bind:value={title} />
        </div>
        <div class="form-control">
            <label for="subtitle">Subtitle</label>
            <input type="text" id="subtitle" bind:value={subtitle} />
        </div>
        <div class="form-control">
            <label for="address">Title</label>
            <input type="text" id="address" bind:value={address} />
        </div>
        <div class="form-control">
            <label for="imageURL">Image URL</label>
            <input type="text" id="imageURL" bind:value={imageURL} />
        </div>
        <div class="form-control">
            <label for="email">E-Mail</label>
            <input type="email" id="email" bind:value={email} />
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea rows="3" id="description" bind:value={description}></textarea>
        </div>
        <button type="submit">Save</button>
    </form>
    <MeetupGrid {meetups} />
</main>

<style>
    main {
        margin-top: 5rem;
    }
</style>
