<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-black/80 to-black/90">
    <div class="w-full max-w-md p-8 space-y-6 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-xl">
      <TopCardComponent />

      <EmailInputComponent :email="email" :onInput="handleEmailInput" />

      <ButtonComponent @click="handleSubmit">Enter</ButtonComponent>

      <DividerComponent />

      <SocialLoginComponent />

      <p class="text-xs text-center text-gray-400">
        By continuing, you agree to our <a href="#" class="text-blue-500 hover:underline">Terms and Conditions</a>.
      </p>
    </div>
  </div>
</template>

<script>
import TopCardComponent from './TopCardComponent.vue';
import EmailInputComponent from './EmailInputComponent.vue';
import DividerComponent from './DividerComponent.vue';
import SocialLoginComponent from './SocialLoginComponent.vue';
import ButtonComponent from './ButtonComponent.vue';

export default {
  components: {
    TopCardComponent,
    EmailInputComponent,
    DividerComponent,
    SocialLoginComponent,
    ButtonComponent
  },
  data() {
    return {
      email: ''
    };
  },
  methods: {
    handleEmailInput(value) {
      this.email = value;
    },
    handleSubmit() {
      console.log('Email:', this.email);
      // Submit email or handle login logic here
    }
  }
};
</script>
