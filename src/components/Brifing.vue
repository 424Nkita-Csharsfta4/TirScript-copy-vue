<style>

.form-control.dropdown{
    background-color: rgba(23, 20, 20, 0.648);
    border: none;
    border-radius: 10px;
}
.form-control {
    width: 50%;
    padding: 10px;
  }
.primary-btn{
  color: whitesmoke;
    background-color: rgba(103, 66, 136, 0.782);
    border: 1px solid rgb(238, 208, 208);
    border-radius: 7px;
}
.primary-btn:hover{
  background-color: rgb(236, 232, 223);
  color:rgba(103, 66, 136, 0.782);
}
.form-floating,.btn{
  margin-top: 2em;
}
.mega{
  width: 600px;
  height: 600px;
}
</style>
<template class="container container-sm">
    <div class="container container-sm">
    <h1>Заполните бриф онлайн</h1>
   
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Ваше имя</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Имя">
  <label for="exampleFormControlInput1" class="form-label">Ваша почта</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email">
</div>
<h2>Помощь по тегам</h2>
<TagInput v-model="tags" />
<div class="form-floating">
  <textarea class="form-control mega" placeholder="Опишите свой проект" id="floatingTextarea"></textarea>
 
</div>
<div class="btn primary-btn">Отправить</div>
</div>
</template>
<script lang="js">
import TagInput from "./TagInput.vue";
export default {
  name: "App",
  components: {
    TagInput: TagInput,
  },
  data() {
    return {
      tags: ["Интернет - магазин", "Корпоративный сайт"],
      tags2: ["Мобильное приложение"],
      tags3: ["Стартап"],
      tags4: ["Перенести существующий сайт"],
      tags5: ["SEO - продвижение"],
      tags6: ["Интернет - портал"],
      tags7: ["Landing page"]
    }; 
  },
};
console.log(TagInput);
</script>