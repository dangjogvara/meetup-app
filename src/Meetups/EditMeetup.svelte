<script>
    import { createEventDispatcher } from 'svelte';
    import TextInput from '../UI/TextInput.svelte';
    import Button from '../UI/Button.svelte';
    import Modal from '../UI/Modal.svelte';
    import { isEmpty } from '../helpers/validation';

    // Variables
    let title = '';
    let titleValid = false;
    let subtitle = '';
    let address = '';
    let imageUrl = '';
    let email = '';
    let description = '';

    const dispatch = createEventDispatcher();

    $: titleValid = !isEmpty(title);

    function submitForm() {
        dispatch('save', {
            title,
            subtitle,
            address,
            imageUrl,
            email,
            description,
        });
    }

    function cancel() {
        dispatch('cancel');
    }
</script>

<Modal title="Edit Meetup Data" on:cancel>
    <form on:submit|preventDefault={submitForm}>
        <TextInput
                id="title"
                label="Title"
                valid={titleValid}
                validityMessage="Please enter a valid title."
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
                id="imageUrl"
                label="Image URL"
                value={imageUrl}
                on:input={event => (imageUrl = event.target.value)}
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
    </form>
    <div slot="footer">
        <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
        <Button type="button" on:click={submitForm}>Save</Button>
    </div>
</Modal>

<style>
    form {
        width: 100%;
    }
</style>
