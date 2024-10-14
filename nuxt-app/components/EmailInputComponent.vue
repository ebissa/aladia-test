<template>
  <div>
    <p class="text-sm text-center text-white mb-4">Enter your email</p>
    <input type="email" :value="email" @input="onInput($event.target.value)" required placeholder="you@example.com"
      class="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
  </div>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: ''
    },
    onInput: {
      type: Function,
      default: () => {}
    }
  }
};
</script>
