import TermsCheckboxComponent from '~/components/TermsCheckboxComponent.vue';

export default {
  title: 'Components/TermsCheckboxComponent',
  component: TermsCheckboxComponent,
};

export const Default = () => ({
  components: { TermsCheckboxComponent },
  template: '<TermsCheckboxComponent @update:acceptedTerms="updateAcceptedTerms" />',
  methods: {
    updateAcceptedTerms(accepted) {
      alert(`Accepted terms: ${accepted}`);
    },
  },
});
