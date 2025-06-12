import InputFieldComponent from '~/components/InputFieldComponent.vue';

export default {
  title: 'Components/InputFieldComponent',
  component: InputFieldComponent,
};

export const Text = () => ({
  components: { InputFieldComponent },
  data() {
    return { value: '' };
  },
  template: '<InputFieldComponent placeholder="Enter text" iconClass="fa-solid fa-user" v-model="value" />',
});

export const Password = () => ({
  components: { InputFieldComponent },
  data() {
    return { value: '' };
  },
  template: '<InputFieldComponent placeholder="Password" iconClass="fa-solid fa-lock" :inputType="\'password\'" v-model="value" :showToggle="true" />',
});
