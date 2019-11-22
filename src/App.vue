<template>
  <v-app>
    <v-app-bar app color="black" dark>
        <span class="mr-2">DOC</span>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
  },

  data: () => ({
    //
  })
};
</script>
