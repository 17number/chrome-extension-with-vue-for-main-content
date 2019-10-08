<template>
  <div class="hello">
    <div>
    Hello {{ name }} from vue
    </div>
    <input type="text" v-model="name">
  </div>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      name: "ワールド"
    };
  }
};
</script>
