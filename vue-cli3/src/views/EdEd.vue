<template>
  <div class="ed-ed">
    <h4>Add Student</h4>
    <form action="" @submit.prevent="addStudent">
      <div>
        <label for=""> Name: </label>
        <input v-model="student.name" type="text" />
      </div>
      <div>
        <label for="">Age: </label>
        <input v-model="student.age" type="number" />
      </div>
      <div>
        <label for="grade">Grade: </label>
        <select v-model="student.grade" name="grade" id="grade">
          <option value="one">First Grade</option>
          <option value="two">Seconde Grade</option>
          <option value="three">Third Grade</option>
          <option value="four">Fourth Grade</option>
        </select>
      </div>
      <div>
        <h3>Gender</h3>
        <label for="male">Male</label>
        <input
          v-model="student.gender"
          value="male"
          type="radio"
          name="male"
          id="male"
        />
        <label for="female">Female</label>
        <input
          v-model="student.gender"
          value="female"
          type="radio"
          name="female"
          id="female"
        />
      </div>
      <div>
        <label for=""> Favourit Sports </label>
        <input type="text" v-model="sport" />
        <button type="button" @click="addSport">Add Sport</button>
        <div style="margin-left: 50px; margin-top: 10px">
          <span
            style="margin-right: 10px"
            v-for="(sport, i) in student.favouritSports"
            :key="i"
          >
            {{ sport }}
          </span>
        </div>
        <div>
          <h3>To Update Student</h3>
          <label for="">Age</label>
          <input type="number" v-model="changeAge" />
          <label for="">ID</label>
          <input type="number" v-model="changeId" />
          <button type="button" @click="updatedStudent">Update</button>
        </div>
      </div>
      <div style="width: 100%">
        <input style="width: 50%" type="submit" value="Add" />
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
        <span
          @click="($event) => deleteStudent(student.id)"
          style="cursor: pointer; font-size: 25px; color: red"
          >x</span
        >
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
    addSport() {
      this.student.favouritSports.push(this.sport);
      this.sport = "";
    },
    async getStudents() {
      await fetch("https://course-backend.onrender.com/")
        .then((res) => res.json())
        .then((data) => (this.students = data));
    },
    async addStudent() {
      const requestData = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(this.student),
      };
      await fetch(
        "https://course-backend.onrender.com/add-student",
        requestData
      )
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
.ed-ed {
  h4 {
    color: red;
  }
  p {
    color: rgba(90, 84, 99, 0.726);
  }
  form {
    display: flex;
    flex-wrap: wrap;
    div {
      width: 45%;
      margin-bottom: 20px;
    }
  }
}
</style>
