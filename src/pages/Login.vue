<template>
  <q-page class="padding">
    <div class="r-content">
      <q-form class="r-form row justify-center" @submit.prevent="handleLogin">


        <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
          <p class="col-12 text-h5 text-center q-pt-lg">login</p>
          <q-input
            label="Email"
            outlined rounded
            v-model="form.email"
          />

          <q-input
            label="Senha"
            outlined rounded
            v-model="form.password"
          />

          <div class="q-gutter-y-md">
            <q-btn
              label="Login"
              outline
              rounded
              color="primary"
              class="full-width"
              size="lg"
              type="submit"
            />
          </div>

          <div class="full-width q-gutter-y-sm">
            <q-btn
              label="Cadastre-se"
              flat
              color="primary"
              class="full-width"
              to="/register"
              size="sm"
            />

            <q-btn
              label="Esqueceu sua senha?"
              flat
              color="primary"
              class="full-width"
              :to="{name: 'forgout-password'}"
              size="sm"
            />
          </div>
        </div>
      </q-form>

      <div class="r-box">

      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue"
import useAuthUser from "src/composables/UseAuthUser"
import { useRouter } from "vue-router"

export default defineComponent({
  name: "PageLogin",

  setup() {
    const router = useRouter()

    const { login } = useAuthUser()

    const form = ref({
      email: "",
      password: ""
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        router.push({ name: "me" })
      } catch (error) {
        alert(error.message)
      }
    }

    return {
      form,
      handleLogin
    }
  }
})
</script>
