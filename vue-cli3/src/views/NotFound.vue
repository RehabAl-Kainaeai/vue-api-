<template>
  <div class="not-found">
    <h2>Page Not Found</h2>
    <button>
      <router-link :to="{ name: 'home' }">Back to home page</router-link>
    </button>
  </div>
</template>
