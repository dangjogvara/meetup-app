<script>
  import { createEventDispatcher } from 'svelte';
  import TextInput from '../UI/TextInput.svelte';
  import Button from '../UI/Button.svelte';
  import Modal from '../UI/Modal.svelte';

  // Variables
  let title = '';
  let subtitle = '';
  let address = '';
  let imageUrl = '';
  let email = '';
  let description = '';

  const dispatch = createEventDispatcher();

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
</script>

<Modal title="Edit Meetup Data" on:cancel>
  <form on:submit|preventDefault={submitForm}>
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

    <!-- Submit button -->
    <!-- <Button type="submit">Save</Button> -->
  </form>
</Modal>

<style>
  form {
    width: 100%;
  }
</style>
