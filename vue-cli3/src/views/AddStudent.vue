<template>
  <div class="add-student">
    <h2>Add Student</h2>
    <h4>Please enter the data you want to add :</h4>
    <br />
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
        <label for="male">Male: </label>
        <input
          v-model="student.gender"
          value="male"
          type="radio"
          name="male"
          id="male"
        />
        <label for="female">Female: </label>
        <input
          v-model="student.gender"
          value="female"
          type="radio"
          name="female"
          id="female"
        />
      </div>
      <div>
        <label for=""> Favourit Sports: </label>
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
      </div>
      <div style="width: 100%">
        <input style="width: 50%" type="submit" value="Add" />
      </div>
    </form>
    <ul>
      <li v-for="student in students" :key="student.id">
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
    };
  },
  methods: {
    addSport() {
      this.student.favouritSports.push(this.sport);
      this.sport = "";
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
  },
  //   async mounted() {
  //     await this.getStudents();
  //   },
};
</script>
<style scoped lang="scss">
.add-student {
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
