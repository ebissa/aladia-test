<template>
  <div class="mb-4 flex w-full items-end gap-6 px-4">
    <div class="relative h-24 w-24 rounded border transition-all border-gray-300 hover:border-gray-400">
      <div class="gradient absolute inset-0 opacity-20"></div>
      <img class="absolute inset-0 h-full w-full rounded object-cover" :src="computedProfilePicture" />
      <div class="absolute inset-0 flex items-end justify-center pb-4"></div>
      <input type="file" accept="image/*" @change="onFileChange" class="absolute inset-0 opacity-0" />
    </div>
    <div>
      <div class="mb-1 text-sm font-semibold">Nice to meet you,</div>
      <div class="text-xs text-gray-600">
        Upload a profile picture <br />
        and complete your <br />
        presentation
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePictureComponent',
  props: {
    profilePicture: {
      type: String,
      default: 'https://develop.aladia.io/_nuxt/image.ChQ3biW9.png',
    },
  },
  computed: {
    computedProfilePicture() {
      // Use the prop value if available, otherwise fallback to the default
      return this.profilePicture || 'https://develop.aladia.io/_nuxt/image.ChQ3biW9.png';
    },
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.$emit('update:profilePicture', e.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
