<template>
  <div class="list-student">
    <h2>List Student</h2>
    <h4>Here's thr student information available to us :</h4>
    <div class="students">
      <ul>
        <div class="search">
          <img src="@/assets/search_icon.png" alt="" @click="emitEvent" />
          <input
            type="search"
            id="search-input"
            placeholder="search for student"
            v-model="search"
          />
        </div>
        <li v-for="student in searchStudent" :key="student.id">
          <p>ID:{{ student.id }}</p>
          <p>Name:{{ student.name }}</p>
          <p>Age:{{ student.age }}</p>
          <p>Gender:{{ student.gender }}</p>
          <p>Grade:{{ student.grade }}</p>
          <p>
            Favourit Sports:
            <strong v-for="(sport, i) in student.favouritSports" :key="i">
              {{ sport }} <br />
            </strong>
          </p>
          <span
            @click="($event) => deleteStudent(student.id)"
            style="cursor: pointer; font-size: 25px; color: red"
            >x</span
          >
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListStudents",
  data() {
    return {
      sport: "",
      student: {
        name: "",
        age: "",
        grade: "",
        gender: "",
        favouritSports: [],
      },
      students: [],
      search: "",
    };
  },
  computed: {
    searchStudent() {
      return this.students.filter((students) =>
        students.name.match(this.search)
      );
    },
  },
  methods: {
    addSport() {
      this.student.favouritSports.push(this.sport);
      this.sport = "";
    },
    async getStudents() {
      await fetch("https://course-backend.onrender.com")
        .then((res) => res.json())
        .then((data) => (this.students = data));
    },
    async deleteStudent(id) {
      const requestData = {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
      };
      await fetch(
        `https://course-backend.onrender.com/delete-student/${id}`,
        requestData
      )
        .then((res) => res.json())
        .then((data) => (this.students = data));
    },
  },
  async mounted() {
    await this.getStudents();
  },
};
</script>
<style scoped lang="scss">
.list-student {
  h4 {
    color: red;
  }
  p {
    color: rgba(90, 84, 99, 0.726);
  }
  img {
    width: 30px;
    margin-right: 10px;
    position: relative;
    top: 0;
    left: 0;
  }
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search input {
    width: 200px;
    position: relative;
    top: 0;
    left: 0;
  }
}
</style>
