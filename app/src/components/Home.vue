<template>
  <div>
    <p>This is HomePage</p>
    <div v-for="item in data">
      <div>{{item.title}}</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        data: [
          {title: "Title1"},
          {title: "Title2"},
          {title: "Title3"},
          {title: "Title4"},
          {title: "Title5"},
        ]
      };
    }
  }
</script>
