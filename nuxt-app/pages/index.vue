<template>
  <div class="flex items-center justify-center min-h-screen bg-black">
    <div class="w-full max-w-md p-8 space-y-6 bg-cover bg-center rounded-lg shadow-xl border border-white border-opacity-30"
         style="background-image: url('/background.jpg');">
      <TopCardComponent />

      <InputFieldComponent
        placeholder="Email"
        iconClass="fa-solid fa-envelope text-base text-gray-500"
        :inputType="'text'"
        v-model="email"
      />
      <!-- Error message -->
      <p v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</p>

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
import TopCardComponent from '~/components/TopCardComponent.vue';
import EmailInputComponent from '~/components/EmailInputComponent.vue';
import DividerComponent from '~/components/DividerComponent.vue';
import SocialLoginComponent from '~/components/SocialLoginComponent.vue';
import ButtonComponent from '~/components/ButtonComponent.vue';
import InputFieldComponent from '~/components/InputFieldComponent.vue';

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
      email: '',
      emailError: '' // Holds the error message
    };
  },
  methods: {
    validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },
    handleSubmit() {
      // Validate the email
      if (!this.validateEmail(this.email)) {
        this.emailError = 'Please enter a valid email address';
        return;
      }

      // Clear the error and proceed if valid
      this.emailError = '';
      console.log('Email:', this.email);
      this.$router.push('/signup');
      // Submit email or handle login logic here
    }
  }
};
</script>
