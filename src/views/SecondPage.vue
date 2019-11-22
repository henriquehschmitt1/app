<template>
    <v-container>
        <v-form>
            <v-row>
                {{ apiData }}
                <v-col class="centerLabel" cols="1" md="1">
                    <v-label>Header</v-label>
                </v-col>
                <v-col cols="11" md="11">
                    <v-btn class="mx-2" fab dark color=green>
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </v-col>
                <v-col class="centerLabel" cols="1" md="1">
                    <v-label>Param</v-label>
                </v-col>
                <v-col cols="11" md="11">
                    <v-btn class="mx-2" fab dark color=green>
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </v-col>
                <v-col class="centerLabel" cols="1" md="1">
                    <v-label>Query</v-label>
                </v-col>
                <v-col cols="11" md="11">
                    <v-btn class="mx-2" fab dark color=green>
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </v-col>
                <v-col class="centerLabel" cols="1" md="1">
                    <v-label v-if="apiData.apiMethod !== 'DELETE' && apiData.apiMethod !== 'GET'" >Body</v-label>
                </v-col>
                <v-col cols="11" md="11">
                    <v-btn class="mx-2" fab dark color=green v-if="apiData.apiMethod !== 'DELETE' && apiData.apiMethod !== 'GET'">
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </v-col>
                <v-col class="text-center" cols="12" md="12">
                    <v-btn rounded="" color="success">Proximo</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
export default {
        computed:{
            apiData(){
                return this.$store.state.apiData
            }
        }
    }
</script>
<style>
.centerLabel{
    padding-top: 1.75rem
}
</style>