<template>
  <div class="q-pa-md">
    <h1>
      Bottom shadow
    </h1>
    <div
      class="flex inline shadow-box flex-center"
      v-for="n in 24" :key="n"
      :class="`shadow-${n}`"
    >
      .shadow-{{ n }}
    </div>
    <h1>
      Top shadow
    </h1>
    <div
      class="flex inline shadow-box flex-center"
      v-for="n in 24" :key="n"
      :class="`shadow-up-${n}`"
    >
      .shadow-up-{{ n }}
    </div>
    <h1>
      Inset shadow
    </h1>
    <div class="inset-shadow flex inline shadow-box flex-center doc-inset-shadow">
      .inset-shadow
    </div>

    <div class="inset-shadow-down flex inline shadow-box flex-center doc-inset-shadow">
      .inset-shadow-down
    </div>
  </div>
</template>

<style lang="sass" scoped>
.shadow-box
  width: 90px
  height: 90px
  margin: 25px
  border-radius: 50%
  font-size: 12px
</style>
