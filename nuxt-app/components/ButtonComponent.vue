<template>
  <button @click="onClick" :class="buttonClass" class="w-full px-4 py-2 font-semibold text-white rounded-lg flex items-center justify-center hover:bg-gray-800 focus:outline-none">
    <img v-if="iconSrc" :src="iconSrc" :alt="iconAlt" class="w-6 h-6 mr-2" />
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    iconSrc: {
      type: String,
      default: ''
    },
    iconAlt: {
      type: String,
      default: 'icon'
    },
    buttonClass: {
      type: String,
      default: 'bg-black' // Default button style, can be changed for each instance
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  }
};
</script>
