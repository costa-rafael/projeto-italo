<template>
  <q-page padding>

    <q-form class="row justify-center" @submit.prevent="handlePasswordReset">
      <p class="col-12 text-h5 text-center q-pt-lg">Resetar Senha</p>

      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">

        <q-input
          label="Nova Senha"
          outlined rounded
          v-model="password"
        />


        <div class="q-gutter-y-md q-gutter-y-sm">
          <q-btn
            label="Resetar Email Agora"
            outline
            rounded
            color="primary"
            class="full-width"
            size="lg"
            type="submit"
          />


        </div>
      </div>
    </q-form>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import {useRouter, userRoute} from 'vue-router'
export default defineComponent( {
  name: 'PageResetePassword',
  setup() {
    const {resetPassword} = useAuthUser()
    const router = useRouter ()
    const route = useRoute ()
    const token = route.query.token

    const password = ref('')

    const handlePasswordReset = async () =>{
      await resetPassword (token, password.value)
      router.push({name: 'login'})
    }
    return{
      password,
      handlePasswordReset
    }
  }
})
</script>
