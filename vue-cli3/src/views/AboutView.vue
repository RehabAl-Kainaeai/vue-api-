<template>
  <div class="about-view">
    <h2>Data Students</h2>
    <p>l</p>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul
        style="
          list-style: none;
          display: flex;
          justify-content: center;
          gap: 20px;
          font-weight: bold;
        "
      >
        <li>
          <router-link :to="{ name: 'ListStudents' }"
            >List Students</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'AddStudent' }">Add Student</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'EditStudent' }">Edit Student</router-link>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
};
</script>
