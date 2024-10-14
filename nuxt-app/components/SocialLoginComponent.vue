<template>
  <div class="space-y-2">
    <ButtonComponent :iconSrc="googleLogo" :iconAlt="'Google Logo'" @click="handleGoogleLogin">Continue with Google</ButtonComponent>
    <ButtonComponent :iconSrc="facebookLogo" :iconAlt="'Facebook Logo'" buttonClass="bg-transparent border border-gray-600" @click="handleFacebookLogin">Continue with Facebook</ButtonComponent>
    <ButtonComponent :iconSrc="appleLogo" :iconAlt="'Apple Logo'" buttonClass="bg-transparent border border-gray-600" @click="handleAppleLogin">Continue with Apple</ButtonComponent>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
  components: {
    ButtonComponent
  },
  data() {
    return {
      googleLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
      facebookLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      appleLogo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    };
  },
  methods: {
    handleGoogleLogin() {
      console.log('Google Login');
      // Handle Google login
    },
    handleFacebookLogin() {
      console.log('Facebook Login');
      // Handle Facebook login
    },
    handleAppleLogin() {
      console.log('Apple Login');
      // Handle Apple login
    }
  }
};
</script>
