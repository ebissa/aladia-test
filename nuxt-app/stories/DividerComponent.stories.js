import DividerComponent from '../components/DividerComponent.vue';

export default {
  title: 'Components/DividerComponent',
  component: DividerComponent
};

const Template = (args, { argTypes }) => ({
  components: { DividerComponent },
  template: '<DividerComponent />',
});

export const Default = Template.bind({});
