<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Ops. Nada aqui...
      </div>

      <q-btn
        class="q-mt-xl"
        color="primary"
        text-color="white"

        outline
        rounded
        to="/"
        label="Voltar para Home"

      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
