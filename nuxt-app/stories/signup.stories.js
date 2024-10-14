// src/stories/SignupForm.stories.js

import SignupForm from '../pages/signup.vue'; // Adjust the import path as necessary

export default {
  title: 'Components/SignupForm',
  component: SignupForm,
};

const Template = (args) => ({
  components: { SignupForm },
  setup() {
    return { args };
  },
  template: '<SignupForm v-bind="args" />',
});

// Default story
export const Default = Template.bind({});
Default.args = {
  profilePicture: '',
  acceptedTerms: false,
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
  profilePictureError: '',
  termsError: '',
  nameError: '',
  surnameError: '',
  emailError: '',
  passwordError: '',
  confirmPasswordError: '',
};
