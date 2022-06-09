<template>
  <q-page class="q-pa-xl">
    <div class="row justify-center items-end">
      <div class="q-pa-sm col-3">
        <q-input v-model="text" label="Zadej text..."/>
      </div>
      <div class="q-pa-sm col-1" @click="submit">
        <q-btn :loading="submitting" label="Submit" glossy/>
      </div>
    </div>
    <div class="row justify-center">
      <q-card class="my-card">
        <q-card-section>
          {{ cardText }}
        </q-card-section>
      </q-card>
    </div>
    <button @click="getApiCall()">API</button>
  </q-page>
</template>

<script>
import {ref} from "vue";
import { api } from 'boot/axios'

export default {
  name: "ComponentPage",
  setup() {
    let text = ref('')
    let cardText = ref('')

    const submitting = ref(false)

    function submit() {
      submitting.value = true
      setTimeout(() => {
        cardText.value = text.value
        submitting.value = false
      }, 3000)
    }

    return {
      text,
      cardText,
      submitting,
      submit
    }
  },
  methods: {
    getApiCall(){
      api.get('https://reqres.in/api/users')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
  }
}
</script>

<style scoped>

</style>
