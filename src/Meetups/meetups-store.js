import { writable } from 'svelte/store';

import { v4 as uuidv4 } from 'uuid';

const meetups = writable([
  {
    id: uuidv4(),
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
    id: uuidv4(),
    title: 'Drink beer',
    subtitle: 'Friends',
    description: 'In this meetup we will drink beer',
    imageUrl: 'https://picsum.photos/id/237/200/300',
    address: '245th Nerd Road, 900 Vágur',
    contactEmail: 'beer@test.com',
    isFavorite: false,
  },
]);

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  addMeetup: meetupData => {
    const newMeetup = {
      ...meetupData,
    };

    meetups.update(items => {
      return [newMeetup, ...items];
    });
  },
  updateMeetup: (id, meetupData) => {
    meetups.update(items => {
      const meetupIndex = items.findIndex(i => i.id === id);
      const updatedMeetup = { ...items[meetupIndex], ...meetupData };
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    });
  },
  toggleFavorite: id => {
    meetups.update(items => {
      const updatedMeetup = { ...items.find(m => m.id === id) };
      updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
      const meetupIndex = items.findIndex(m => m.id === id);
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    });
  },
  removeMeetup: id => {
    meetups.update(items => {
      return items.filter(item => item.id !== id);
    });
  },
};

export default customMeetupsStore;
