import EmailInputComponent from '../components/EmailInputComponent.vue';

export default {
  title: 'Components/EmailInputComponent',
  component: EmailInputComponent,
  argTypes: {
    email: { control: 'text' },
    onInput: { action: 'input' }
  }
};

const Template = (args, { argTypes }) => ({
  components: { EmailInputComponent },
  props: Object.keys(argTypes),
  template: '<EmailInputComponent v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  email: 'example@example.com',
};
