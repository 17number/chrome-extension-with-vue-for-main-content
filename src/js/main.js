(function () {
  'use strict';
  document.querySelector('form').insertAdjacentHTML(
    "beforeEnd",
    `
    <div id="vue-app">
      <div>
        Hello {{ name }} from vue
      </div>
      <input type="text" v-model="name">
    </div>
    `
  );
  let vm = new Vue({
    el: "#vue-app",
    data: {
      name: "world"
    }
  });
})();
