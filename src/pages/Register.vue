<template>
  <q-page padding>

    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h5 text-center q-pt-lg">Registre-se</p>

      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="Nome"
          outlined rounded
          v-model="form.name"
        />

        <q-input
          label="Email"
          outlined rounded
          v-model="form.email"
        />

        <q-input
          label="Senha"
          outlined rounded
          v-model="password"
        />

        <div class="q-gutter-y-md q-gutter-y-sm">
          <q-btn
            label="Cadastrar agora"
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
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'
import { Router } from 'express'
//import { Router } from 'express'

export default defineComponent({
  name: 'PageRegister',

  setup (){
    const router = useRouter()
    const {register} = useAuthUser()


    const form = ref ({
      name: '',
      email:'',
      password:''
    })

    const handleRegister = async () =>{
      try {
        await register(form.value)
        router.push({
          name: 'email-confrimation',
          query: { email: form.value.email }
        })
      } catch(error){
        alert(error)
      }
    }

    return{
      form,
      handleRegister
    }
  }
})
</script>
