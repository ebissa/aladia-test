import ButtonComponent from '../components/ButtonComponent.vue';

export default {
  title: 'Components/ButtonComponent',
  component: ButtonComponent,
  argTypes: {
    onClick: { action: 'clicked' },
    buttonClass: { control: 'text' },
    iconSrc: { control: 'text' },
    iconAlt: { control: 'text' }
  }
};

const Template = (args) => ({
  components: { ButtonComponent },
  setup() {
    return { args };
  },
  template: '<ButtonComponent v-bind="args">{{ args.slotText }}</ButtonComponent>',
});

export const Default = Template.bind({});
Default.args = {
  slotText: 'Submit',
  buttonClass: 'bg-black text-white p-2 rounded', // Example classes for styling
};

export const FacebookButton = Template.bind({});
FacebookButton.args = {
  slotText: 'Continue with Facebook',
  buttonClass: 'bg-transparent border border-gray-600 p-2 rounded flex items-center justify-center',
  iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
  iconAlt: 'Facebook Logo'
};
