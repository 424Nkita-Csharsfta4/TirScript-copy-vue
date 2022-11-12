<template class="container container-sm">
<div id="carouselExampleCaptions" class="carousel slide container-sm" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
   
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.sibkray.ru/upload/iblock/dce/dceeeb05917a15809bff48b0bcb30f10.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>
         Передовые решения бизнес задач с
         помощью веб-технологий.</h5>
        <p>Создание сайтов. Landing page. Продвижение.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.aucxis.com/site/files/images/bedrijf/Aucxis_Software_Ontwikkeling.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Создать сайт для любого клиента, сделать проект живым, успешно функционирующим и эффективным в медиасреде</h5>
        <p>Задача, которую мы решаем ежедневно..</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style scoped>
.carousel-item{
width: 80%;

  align-items: center;
 align-content: center;
  

}
.carousel-caption.d-none.d-md-block,h5,p{
  position: none;
  margin-left: 0 auto;
  background-color: rgb(50, 46, 46);
  color: #c897ff;
  padding-left: 7em;
  border-radius: 10px;
}
.carousel-caption{
  position: relative;
  bottom: 0;
  left: 2%;
}
.carousel.slide{
  margin-left: auto;
    margin-right: auto;
}
.d-block{
  margin-right: 0 auto;
  margin-left: 8.5em;
}

</style>
