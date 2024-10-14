<template>
  <div class="flex justify-center items-center h-screen bg-black">
    <div class="relative z-10 w-full max-w-md p-5 bg-black border border-white rounded-lg shadow-lg">
      <HeaderComponent @back="handleBack" />
      <div class="flex flex-col items-center px-4">
        <ProfilePictureComponent 
          :profilePicture="profilePicture" 
          @update:profilePicture="updateProfilePicture" 
        />
        <p v-if="profilePictureError" class="text-red-500 text-sm">{{ profilePictureError }}</p>
        
        <TermsCheckboxComponent @update:acceptedTerms="updateAcceptedTerms" />
        <p v-if="termsError" class="text-red-500 text-sm">{{ termsError }}</p>

        <div class="mb-4 text-center text-xs">Enter your details</div>
        
        <InputFieldComponent
          placeholder="Name"
          iconClass="fa-solid fa-user text-base text-gray-500"
          v-model="name"
          @keydown.enter.prevent="handleSubmit" 
        />
        <p v-if="nameError" class="text-red-500 text-sm">{{ nameError }}</p>
        
        <InputFieldComponent
          placeholder="Surname"
          iconClass="fa-solid fa-user text-base text-gray-500"
          v-model="surname"
          @keydown.enter.prevent="handleSubmit" 
        />
        <p v-if="surnameError" class="text-red-500 text-sm">{{ surnameError }}</p>
        
        <InputFieldComponent
          placeholder="Email"
          iconClass="fa-solid fa-envelope text-base text-gray-500"
          :inputType="'text'"
          v-model="email"
        />
        <p v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</p>

        <InputFieldComponent
          placeholder="Password"
          iconClass="fa-solid fa-lock text-base text-gray-500"
          :inputType="'password'"
          v-model="password"
          :showToggle="true"
          @keydown.enter.prevent="handleSubmit"
        />
        <p v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</p>
        
        <InputFieldComponent
          placeholder="Confirm Password"
          iconClass="fa-solid fa-lock text-base text-gray-500"
          :inputType="'password'"
          v-model="confirmPassword"
          :showToggle="true"
          @keydown.enter.prevent="handleSubmit" 
        />
        <p v-if="confirmPasswordError" class="text-red-500 text-sm">{{ confirmPasswordError }}</p>

        <ButtonComponent @click="handleSubmit">Enter</ButtonComponent>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '~/components/HeaderComponent.vue';
import ProfilePictureComponent from '~/components/ProfilePictureComponent.vue';
import TermsCheckboxComponent from '~/components/TermsCheckboxComponent.vue';
import InputFieldComponent from '~/components/InputFieldComponent.vue';
import ButtonComponent from '~/components/ButtonComponent.vue';

export default {
  components: {
    HeaderComponent,
    ProfilePictureComponent,
    TermsCheckboxComponent,
    InputFieldComponent,
    ButtonComponent,
  },
  data() {
    return {
      profilePicture: '',
      acceptedTerms: false,
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
      profilePictureError: '', // Optional error, can be removed if not needed
      termsError: '',
      nameError: '',
      surnameError: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: '',
    };
  },
  methods: {
    handleBack() {
      this.$router.push({ name: 'login' });
    },
    updateProfilePicture(newPicture) {
      this.profilePicture = newPicture;
    },
    updateAcceptedTerms(newTerms) {
      this.acceptedTerms = newTerms;
    },
    validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },
    validateForm() {
      let isValid = true;

      // Remove the profile picture validation
      // if (!this.profilePicture) {
      //   this.profilePictureError = 'Profile picture is required';
      //   isValid = false;
      // } else {
      //   this.profilePictureError = ''; // Clear error message
      // }

      if (!this.acceptedTerms) {
        this.termsError = 'You must accept the terms and conditions';
        isValid = false;
      } else {
        this.termsError = ''; // Clear error message
      }

      if (!this.name) {
        this.nameError = 'Name is required';
        isValid = false;
      } else {
        this.nameError = ''; // Clear error message
      }

      if (!this.surname) {
        this.surnameError = 'Surname is required';
        isValid = false;
      } else {
        this.surnameError = ''; // Clear error message
      }

      if (!this.email) {
        this.emailError = 'Email is required';
        isValid = false;
      } else if (!this.validateEmail(this.email)) {
        this.emailError = 'Invalid email format';
        isValid = false;
      } else {
        this.emailError = ''; // Clear error message
      }

      if (!this.password) {
        this.passwordError = 'Password is required';
        isValid = false;
      } else if (this.password.length < 6) {
        this.passwordError = 'Password must be at least 6 characters long';
        isValid = false;
      } else {
        this.passwordError = ''; // Clear error message
      }

      if (this.confirmPassword !== this.password) {
        this.confirmPasswordError = 'Passwords do not match';
        isValid = false;
      } else {
        this.confirmPasswordError = ''; // Clear error message
      }

      console.log('Form validation result:', isValid); // Debugging
      return isValid;
    },
    handleSubmit() {
      console.log('Submit button clicked'); // Debugging
      if (this.validateForm()) {
        console.log('Form submitted with:', {
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password,
        });
        this.$router.push({ name: 'welcome' }); // Redirect to welcome
      } else {
        console.log('Validation errors found'); // Debugging
      }
    },
  },
};
</script>
