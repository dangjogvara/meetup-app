<script>
    import Header from './UI/Header.svelte';
    import MeetupGrid from './Meetups/MeetupGrid.svelte';
    import TextInput from './UI/TextInput.svelte';
    import Button from './UI/Button.svelte';

    // Generate ID
    import { v4 as uuidv4 } from 'uuid';

    // Variables
    let title = '';
    let subtitle = '';
    let address = '';
    let imageURL = '';
    let email = '';
    let description = '';

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
            isFavorite: false
        },
        {
            id: 'm2',
            title: 'Drink beer',
            subtitle: 'Frends',
            description: 'In this meetup we will drink beer',
            imageUrl: 'https://picsum.photos/id/237/200/300',
            address: '245th Nerd Road, 900 Vágur',
            contactEmail: 'beer@test.com',
            isFavorite: false
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
            contactEmail: email
        };
        meetups = [newMeetup, ...meetups];
    }

    function toggleFavorite(event) {
        const id = event.detail;

    }
</script>

<!-- header component -->
<Header />

<main>
    <form on:submit|preventDefault={addMeetup}>
        <TextInput
                id="title"
                label="Title"
                value={title}
                on:input={event => (title = event.target.value)}
        />
        <TextInput
                id="subtitle"
                label="Subtitle"
                value={subtitle}
                on:input={event => (subtitle = event.target.value)}
        />
        <TextInput
                id="address"
                label="Address"
                value={address}
                on:input={event => (address = event.target.value)}
        />
        <TextInput
                id="imageURL"
                label="Image URL"
                value={imageURL}
                on:input={event => (imageURL = event.target.value)}
        />
        <TextInput
                id="email"
                label="E-Mail"
                value={email}
                type="email"
                on:input={event => (email = event.target.value)}
        />
        <TextInput
                id="description"
                label="Description"
                value={description}
                controlType="textarea"
                on:input={event => (description = event.target.value)}
        />

        <!-- Submit button -->
        <Button type="submit" caption="Save" />
    </form>
    <MeetupGrid {meetups} on:togglefavorite={toggleFavorite} />
</main>

<style>
    main {
        margin-top: 5rem;
    }

    form {
        width: 30rem;
        max-width: 90%;
        margin: auto;
    }
</style>
