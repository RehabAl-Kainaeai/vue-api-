<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <h1 class="navbar-nav mr-auto mb-2 mb-lg-0">Examples of API</h1>
    <div id="link" class="navbar-nav mr-auto mb-2 mb-lg-0">
      <ul
        style="
          list-style: none;
          display: flex;
          justify-content: center;
          gap: 50px;
        "
      >
        <li v-for="link in myRoutes" :key="link.name">
          <!-- <router-link :to="link.path">{{ link.meta.title }} </router-link> -->
          <router-link v-if="link.name != 'not_found'" :to="{ name: link.name }"
            >{{ link.meta.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>

  <router-view />
</template>
<script>
export default {
  name: "ListStudents",
  data() {
    return {
      myRoutes: [],
    };
  },
  mounted() {
    this.myRoutes = this.$router.options.routes;
  },
  computed: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #909aa4;
  margin-top: 60px;
}

nav {
  a {
    font-weight: bold;
    color: #909aa4;

    &.router-link-exact-active {
      color: #729d88;
    }
  }
}
ul {
  list-style: none;
}
#link {
  display: flex;
  margin-left: -390px;
  font-style: italic;
}
</style>
