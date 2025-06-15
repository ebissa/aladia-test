import SocialLoginComponent from '../components/SocialLoginComponent.vue';

export default {
  title: 'Components/SocialLoginComponent',
  component: SocialLoginComponent,
  argTypes: {
    handleGoogleLogin: { action: 'Google login clicked' },
    handleFacebookLogin: { action: 'Facebook login clicked' },
    handleAppleLogin: { action: 'Apple login clicked' }
  }
};

const Template = (args, { argTypes }) => ({
  components: { SocialLoginComponent },
  props: Object.keys(argTypes),
  template: '<SocialLoginComponent v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
