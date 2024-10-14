<template>
  <ButtonComponent @click="$emit('click')">Enter</ButtonComponent>
</template>

<script>
import ButtonComponent from '~/components/ButtonComponent.vue';

export default {
  name: 'SubmitButtonComponent',
  components: {
    ButtonComponent,
  },
};
</script>
