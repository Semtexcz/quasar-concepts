<template>
  <q-page>
    <h1>Row</h1>
    <div class="row">
      <div v-for="n in 24"  class="black q-ma-md" :key="n">
        <p class="text-white">{{n}}</p>
      </div>
    </div>

    <h1>Column</h1>
    <div class="column">
      <div v-for="n in 10"  class="black q-ma-md" :key="n">
        <p class="text-white">{{n}}</p>
      </div>
    </div>

    <h1>Zarovnání</h1>
    <h2>Horizontální zarovnání</h2>
    <h3>Justify start</h3>
    <div class="row justify-start bg-grey-3">
      <div v-for="n in 3"  class="black q-ma-md" :key="n">
        <p class="text-white">{{n}}</p>
      </div>
    </div>

    <h3>Justify end</h3>
    <div class="row justify-end bg-grey-3">
      <div v-for="n in 3"  class="black q-ma-md" :key="n">
        <p class="text-white">{{n}}</p>
      </div>
    </div>

    <h3>Justify center</h3>
    <div class="row justify-center bg-grey-3">
      <div v-for="n in 3"  class="black q-ma-md" :key="n">
        <p class="text-white">{{n}}</p>
      </div>
    </div>

    <h3>Justify between</h3>
    <div class="row justify-between bg-grey-3">
      <div v-for="n in 3"  class="black q-ma-md" :key="n">
        <p class="text-white">{{n}}</p>
      </div>
    </div>

    <h3>Justify around</h3>
    <div class="row justify-around bg-grey-3">
      <div v-for="n in 3"  class="black q-ma-md" :key="n">
        <p class="text-white">{{n}}</p>
      </div>
    </div>

    <h3>Justify evenly</h3>
    <div class="row justify-evenly bg-grey-3">
      <div v-for="n in 3"  class="black q-ma-md" :key="n">
        <p class="text-white">{{n}}</p>
      </div>
    </div>

    <h2>Vertikální zarovnání</h2>
    <h3>Items start</h3>
    <div class="row items-start bg-grey-3">
      <div v-for="n in 3"  :class="getClass(n)" :key="n">
        <p class="text-white">{{n}}</p>
      </div>
    </div>

    <h3>Items end</h3>
    <div class="row items-end bg-grey-3">
      <div v-for="n in 3"  :class="getClass(n)" :key="n">
        <p class="text-white">{{n}}</p>
      </div>
    </div>

    <h3>Items center</h3>
    <div class="row items-center bg-grey-3">
      <div v-for="n in 3"  :class="getClass(n)" :key="n">
        <p class="text-white">{{n}}</p>
      </div>
    </div>

    <h3>Items stretch</h3>
    <div class="row items-stretch bg-grey-3">
      <div v-for="n in 3"  :class="getClass(n)" :key="n">
        <p class="text-white">{{n}}</p>
      </div>
    </div>

    <h3>Items baseline</h3>
    <div class="row items-stretch bg-grey-3">
      <div v-for="n in 3"  :class="getClass(n)" :key="n">
        <p class="text-white">{{n}}</p>
      </div>
    </div>

    <h1>Distribuce velikosti: grid system</h1>
    <div class="row">
      <div class="col-8 black">two thirds</div>
      <div class="col-2 red">one sixth</div>
      <div class="col-auto green">auto size based on content and available space</div>
      <div class="col black">fills remaining available space</div>
    </div>

    <div class="row">
      <div class="col green">1</div>
      <div class="col red">1</div>
      <div class="col black">1</div>
      <!--
         we have 3 children, so equivalent
         to above would be to use `col-4`
         on each of the children
      -->
    </div>

    <div class="row">
      <div class="col-3 shadow">1</div>
      <div class="col-6 pink">2</div>
      <div class="col-3 shadow">1</div>
    </div>

    <h1>Responzivní design</h1>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4 shadow">
        col
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 pink gt-md">
        col
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 shadow">
        col
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: "FlexBoxIntroPage",
  methods: {
    getClass(n) {
      if (n%3 === 0){
        return "green q-ma-md"
      }
      else if(n%2 === 0){
        return "red q-ma-md"
      }
      else
        return "black q-ma-md"
    }
  }
}
</script>

<style scoped>
.black {
  background-color: #1D1D1D;
  color: white;
  height: 100px;
  width: 100px;
}

.green {
  background-color: green;
  height: 180px;
  width: 100px;
}

.red {
  background-color: red;
  height: 50px;
  width: 100px;
}

.shadow {
  background-color: lightgray;
  height: 100px;
}

.pink {
  background-color: lightpink;
  height: 100px
}
</style>
