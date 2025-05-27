<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
    <div class="text-center p-10 max-w-2xl mx-auto">
      <!-- Logo Section -->
      <div class="mb-8">
        <img src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png" alt="Aladia Logo" class="w-24 h-24 mx-auto" />
      </div>

      <!-- Welcome Text Section -->
      <h1 class="text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
        Welcome to <span class="text-yellow-400">Aladia</span>
      </h1>

      <p class="text-lg text-gray-300 opacity-90 mb-8">
        Your ultimate learning platform, where you can explore thousands of courses 
        tailored to your interests. Join a community of learners and expand your 
        skills with <span class="text-yellow-400 font-bold">Aladia</span>.
      </p>

      <!-- Tagline -->
      <h2 class="text-2xl text-gray-400 italic mb-6">
        "Learn. Grow. Succeed."
      </h2>

      <!-- Decorative Elements -->
      <div class="mt-12 flex justify-center space-x-4">
        <i class="fa-solid fa-star text-3xl text-yellow-400"></i>
        <i class="fa-solid fa-heart text-3xl text-red-500"></i>
        <i class="fa-solid fa-rocket text-3xl text-white"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
};
</script>

<style>
html, body {
  font-family: 'Poppins', sans-serif;
}
</style>
