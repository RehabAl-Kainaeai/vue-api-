<template>
  <div class="my-main">
    <h1>This Is Product Page</h1>
    <div class="products">
      <ul>
        <li v-for="product in products" :key="product.id">
          <p>Title:{{ product.title }}</p>
          <p>Brand:{{ product.brand }}</p>
          <p>Category:{{ product.category }}</p>
          <p>Description:{{ product.description }}</p>
          <p>Price:{{ product.price }}</p>
          <p>Rating:{{ product.rating }}</p>
          <p>Stock:{{ product.stock }}</p>
          <img :src="product.thumbnail" width="100" alt="" />
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "my-main",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getproducts() {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => (this.products = data.products));
    },
  },
  async mounted() {
    await this.getproducts();
  },
};
</script>
<style scoped lang="scss">
.my-main {
  h2 {
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
