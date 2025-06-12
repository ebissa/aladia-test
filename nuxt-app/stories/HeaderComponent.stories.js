import HeaderComponent from '~/components/HeaderComponent.vue';

export default {
  title: 'Components/HeaderComponent',
  component: HeaderComponent,
};

export const Default = () => ({
  components: { HeaderComponent },
  template: '<HeaderComponent @back="action" />',
  methods: { action: () => alert('Back button clicked!') },
});
