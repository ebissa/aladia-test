import ProfilePictureComponent from '~/components/ProfilePictureComponent.vue';

export default {
  title: 'Components/ProfilePictureComponent',
  component: ProfilePictureComponent,
};

export const Default = () => ({
  components: { ProfilePictureComponent },
  data() {
    return { profilePicture: 'https://via.placeholder.com/150' };
  },
  template: '<ProfilePictureComponent :profilePicture="profilePicture" @update:profilePicture="updateProfilePicture" />',
  methods: {
    updateProfilePicture(newPicture) {
      alert(`New profile picture: ${newPicture}`);
    },
  },
});
