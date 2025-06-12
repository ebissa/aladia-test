<template>
  <div class="group relative mb-6 flex h-10 w-full rounded bg-white">
    <div class="flex w-10 items-center justify-center text-xl">
      <i :class="iconClass"></i>
    </div>
    <input
      v-model="internalValue" 
      maxlength="100"
      class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
      :type="inputType"
      :placeholder="placeholder"
    />
    <i v-if="showToggle" @click="toggleVisibility" class="fa-solid absolute right-3 top-[0.7rem] scale-100 cursor-pointer text-base text-gray-500 transition-all active:scale-90" :class="toggleIcon"></i>
  </div>
</template>

<script>
export default {
  name: 'InputFieldComponent',
  props: {
    placeholder: String,
    iconClass: String,
    inputType: {
      type: String,
      default: 'text',
    },
    modelValue: String, // Use modelValue for v-model compatibility in Vue 3
    showToggle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      internalValue: this.modelValue, // Set the internal value from modelValue
    };
  },
  computed: {
    toggleIcon() {
      return this.inputType === 'password' ? 'fa-eye-slash' : 'fa-eye';
    },
  },
  methods: {
    toggleVisibility() {
      this.inputType = this.inputType === 'password' ? 'text' : 'password';
    },
    emitValue() {
      this.$emit('update:modelValue', this.internalValue); // Emit the event for v-model binding
    },
  },
  watch: {
    internalValue() {
      this.emitValue();
    },
    modelValue(newValue) {
      this.internalValue = newValue; // Watch for changes in modelValue
    },
  },
};
</script>
