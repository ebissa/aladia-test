import TopCardComponent from '../components/TopCardComponent.vue';

export default {
  title: 'Components/TopCardComponent',
  component: TopCardComponent
};

const Template = (args, { argTypes }) => ({
  components: { TopCardComponent },
  template: '<TopCardComponent />',
});

export const Default = Template.bind({});
