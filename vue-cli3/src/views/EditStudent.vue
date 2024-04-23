<template>
  <div class="edit-student">
    <h2>To Update Student</h2>

    <form>
      <div>
        <h4>Please enter the data you want to modify :</h4>
        <br />
        <label for="">ID: </label>
        <input type="number" v-model="changeId" />
        <br />
        <br />

        <label for="">Age: </label>
        <input type="number" v-model="changeAge" />
        <br />
        <br />

        <div style="width: 100%">
          <button type="button" @click="updatedStudent">Update</button>
        </div>
      </div>
    </form>
    <ul>
      <li v-for="student in students" :key="student.id">
        <p>ID:{{ student.id }}</p>
        <p>Name:{{ student.name }}</p>
        <p>Age:{{ student.age }}</p>
        <p>Gender:{{ student.gender }}</p>
        <p>Grade:{{ student.grade }}</p>
        <p>
          FavouritSports:
          <strong v-for="(sport, i) in student.favouritSports" :key="i">
            {{ sport }} <br />
          </strong>
        </p>
        <hr />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "my-form",
  data() {
    return {
      sport: "",
      student: {
        name: "",
        age: "",
        favouritSports: [],
      },
      students: [],
      changeAge: "",
      changeId: "",
    };
  },
  methods: {
    async getStudents() {
      await fetch("https://course-backend.onrender.com/")
        .then((res) => res.json())
        .then((data) => (this.students = data));
    },
    async updatedStudent() {
      if (!this.changeAge || !this.changeId) {
        return;
      }
      const requestData = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          age: this.changeAge,
        }),
      };
      await fetch(
        `https://course-backend.onrender.com/update-student/${this.changeId}`,
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
.edit-student {
  h4 {
    color: red;
  }
  p {
    color: rgba(90, 84, 99, 0.726);
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    div {
      width: 45%;
      margin-bottom: 20px;
    }
  }
}
</style>
