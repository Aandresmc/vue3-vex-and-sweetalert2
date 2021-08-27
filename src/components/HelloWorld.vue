<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>In Vue3: Composition API</h3>
    <ul>
      <li>
        <a href="#" @click="simple">simple</a>
      </li>
      <li>
        <a href="#" @click="success">success</a>
      </li>
      <li>
        <a href="#" @click="error">error</a>
      </li>
      <li>
        <a href="#" @click="toastTopEnd">toastTopEnd</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { useSwal } from "../plugins/useSwal";
import { useVex } from "../plugins/useVex";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const Swal = useSwal();
    const Vex = useVex();

    // const simple = () => Swal.fire("Hello world!");

    const simple = () => Vex.dialog.alert("Hello there");

    const success = () =>
      Swal.fire({
        icon: "success",
        title: "Hello",
        text: "Hello brave new world!",
      });

    const error = () =>
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });

    const toastTopEnd = () =>
      Swal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        icon: "success",
        title: "Hi man",
        text: "is a good day!",
      });

    return {
      simple,
      success,
      error,
      toastTopEnd,
    };
  },
  mounted() {
    const Vex = useVex();
    Vex.dialog.alert("Hello there");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
