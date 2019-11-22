<template>
  <v-container>
    <v-form>
      <v-row>
        {{ apiData }}
        <v-col cols="12" md="12">
          <v-text-field v-model="apiData.apiName" label="API name" counter="15" maxlength="15"  color="success" ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field v-model="apiData.apiDoc" label="API documentation" counter="20" maxlength="20"  color="success" ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field prefix="/" v-model="apiData.apiPath" label="API path" counter="10" maxlength="10"  placeholder="Exemplo: home" color="success"></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-select v-model="apiData.apiMethod" :items="metodos" label="API method"></v-select>
        </v-col>
        <v-col class="text-center" cols="12" md="12">
          <v-btn rounded="" :disabled="!checkForm()" @click="navigate" color="success">Proximo</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
  
</template>

<script>
export default {
  data: ()=>({
    metodos: ['GET', 'PUT','POST', 'DELETE'],
    camposDefault: false,
  }),
  methods: {
    checkForm() {
      return this.apiData.apiName !== '' && this.apiData.apiDoc !== '' && this.apiData.apiPath !== '' && this.apiData.apiMethod !== ''
    },
    verifyPath(){
      if(this.apiData.apiPath.charAt(0) !== '/'){
        this.apiData.apiPath = '/' + this.apiData.apiPath
      }
    },
    navigate(){
      this.verifyPath()
      this.$router.push('/page2')
    },
  },
  computed: {
    apiData(){
      return this.$store.state.apiData
    }
  }
};
</script>
