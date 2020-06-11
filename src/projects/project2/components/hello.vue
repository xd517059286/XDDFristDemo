<template>
  <div>
   <div class="btn w-16 mx-auto">1<span class="banana">anniu</span></div>
    <div class="border rounded">
      <div v-for="item in items" class="border-b last:border-b-0 odd:bg-blue-300">
        {{ item }}
      </div>
    </div>
    <input type="text" class="bg-main-colour">
    <router-link to="">123</router-link>
    <div class="bg-gray-200 p-4 grid  grid-cols-3 text-left gap-4 w-full inset-0 relative">
      <div class="bg-gray-500  px-4 py-2 text-gray-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloribus expedita explicabo natus reiciendis soluta unde! Consequatur dicta excepturi perferendis quia. Aliquam ipsa minus nesciunt quia quo quos, vel velit?</div>
      <div class="bg-gray-500  px-4 py-2 text-gray-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias at dolore est illo nam non repudiandae tempore. Ad aspernatur error, est nesciunt nobis sapiente sequi sunt voluptate. Obcaecati, quibusdam!</div>
      <div class="bg-gray-500  px-4 py-2 text-gray-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque delectus dolore ea eaque eius eos eveniet impedit laborum magnam nam, nisi nulla obcaecati quasi quod repudiandae temporibus unde veritatis.</div>
    </div>
    <div  class="ces">
      <div></div>
      <div></div>
      <div></div>
<!--      <div></div>-->
<!--      <div></div>-->
<!--      <div></div>-->
    </div>
  </div>
</template>

<script>
  import {getCounting} from '../api/hello'

  export default {
    name: "hello",
    data() {
      return {
        items: [1, 2, 3],
        disabled:false,
      }
    },
    created() {
      var arr = [1, 2, 3];
      console.log(this.length(arr))
      getCounting().then(res => {
        console.log(res)
      })
    }
  }
</script>

<style scoped>
  .btn{
    margin-bottom: 10px;
  }
  .gap-4{
    gap:1rem;
  }
  .ces{
    @apply grid grid-cols-3 bg-gray-200 gap-4 border p-4 mx-4 ;
    >div:first-child{
      @apply col-span-3 bg-gray-500 h-10;
    }
    >div:last-child{
      @apply col-span-2 bg-gray-500 h-10;
    }
  }
</style>
