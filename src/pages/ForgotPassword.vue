<template>
  <q-page padding>

  <q-form class="row justify-center" @submit.prevent="handleForgotPassword">
    <p class="col-12 text-h5 text-center q-pt-lg">Resetar Senha</p>

    <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">

      <q-input
        label="Email"
        outlined rounded
        v-model="email"
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

        <q-btn
          label="Voltar"
          flat
          rounded
          color="dark"
          class="full-width"
          size="lg"
          :to="{ name: 'login'}"
        />
      </div>
    </div>
  </q-form>

  </q-page>
</template>

<script>
import { format } from 'quasar'
import { defineComponent, ref} from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'

export default defineComponent({
  setup(){
    const {  sendPassworRestEmail}  = useAuthUser()

    const email = ref('')

    const handleForgotPassword = async () =>{

        await sendPassworRestEmail(email.value)
        alert('Password reset email sent to: ${email.value}')
    }

    return{
      email,
      handleForgotPassword
    }
  }
})

</script>
