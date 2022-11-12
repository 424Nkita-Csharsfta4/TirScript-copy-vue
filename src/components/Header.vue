<script setup lang="ts">


</script>

<template  class="container container-sm">
   <div class="container ">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
     
        <span class="fs-4">TirScript{</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link">
          Главное
        </a></li>
        <li class="nav-item"><a href="#" class="nav-link">О нас</a></li>
        <li class="nav-item"><a href="#" class="nav-link">
          Примеры наших работ
        </a></li>
        <li class="nav-item"><a href="/about" class="nav-link">
          Вакансии
        </a></li>
        <li class="nav-item"><a href="#" class="nav-link">
          Контакты
        </a></li>
      </ul>
    </header>
  </div>

</template>

<style scoped>

.nav{
  gap: 1em;
}
li{
    background-color: rgba(103, 66, 136, 0.782);
    border: 1px solid rgb(238, 208, 208);
    border-radius: 7px;
}

.fs-4{
  color:rgb(241, 235, 235) ;
  font-family: "Cascadia Mono-SemiLight",Menlo,Monaco,Consolas,monospace;
}
li:hover{
  background-color: rgb(236, 232, 223);
}
a{
  color: rgb(236, 232, 223);
}
a:hover{
  transition: 0.6s ease-in-out;
  color: rgb(224, 72, 244);
}
</style>
