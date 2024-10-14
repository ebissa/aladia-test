import SubmitButtonComponent from '~/components/SubmitButtonComponent.vue';

export default {
  title: 'Components/SubmitButtonComponent',
  component: SubmitButtonComponent,
};

export const Default = () => ({
  components: { SubmitButtonComponent },
  template: '<SubmitButtonComponent @click="submit" />',
  methods: {
    submit() {
      alert('Submit button clicked!');
    },
  },
});
