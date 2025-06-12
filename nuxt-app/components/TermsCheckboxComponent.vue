<template>
  <div class="mb-4 flex items-center gap-2">
    <label class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border transition-all border-gray-400 hover:border-gray-500">
      <input
        type="checkbox"
        v-model="acceptedTerms"
        class="opacity-0 absolute h-4 w-4"
        @change="emitTermsAccepted"
      />
      <span class="flex h-4 w-4 items-center justify-center rounded border border-gray-400 bg-black">
        <i class="fa-solid fa-check text-sm text-white" v-if="acceptedTerms"></i>
      </span>
    </label>
    <div class="text-xs text-gray-600">
      I accept <span class="underline">Terms & Conditions</span> and <span class="underline">Privacy Policy</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermsCheckboxComponent',
  data() {
    return {
      acceptedTerms: false,
    };
  },
  methods: {
    emitTermsAccepted() {
      this.$emit('update:acceptedTerms', this.acceptedTerms);
    },
  },
};
</script>
