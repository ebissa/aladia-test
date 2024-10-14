// stories/LoginForm.stories.js
import LoginForm from '../pages/index.vue';

export default {
  title: 'Example/LoginForm',
  component: LoginForm,
};

const Template = (args) => ({
  components: { LoginForm },
  setup() {
    return { args };
  },
  template: '<LoginForm v-bind="args" />',
});

// Create a mock email input and submission handler for the story
export const Default = Template.bind({});
Default.args = {
  email: '',
  handleEmailInput: (value) => {
    Default.args.email = value; // Update email in the args
  },
  handleSubmit: () => {
    console.log('Submitted Email:', Default.args.email);
  },
};
