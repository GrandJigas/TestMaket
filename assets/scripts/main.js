jQuery(document).ready(() => {

  // Событие клик при нажатии на кнопку отображения сериалолв
  $(".sort-bar__trigger-button").on("click", function() {
    $(this).toggleClass("active");
  });

    // Переключатель отображения контента
  $(".sort-bar__card-item").on("click", function () {
    $(".sort-bar__card-item").removeClass("active");
    $(this).toggleClass("active");
  })

  // событие на нажатии на название филтра 
  $(".sort-bar__filter-name").on("click", function() {
    $(this).toggleClass("active");
  });


  // переключение между вкладками в форме авторизации
  $("#modalAuthorization").on("click", ".tab", function() {
    if($(this).hasClass("active")) {
      return;
    }

    let form = $("#modalAuthorization").find(".form").toggleClass("active");
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
  });

  // событие для отображения панели навигации
  $(".header-burger").on("click", function() {
   

    if ($(".sidebar").hasClass("active")) {
      $(".sidebar").parent().find(".curtain-bg").remove();
    } else {
      let curtain = $("<div></div>").addClass("curtain-bg");
      $(".sidebar").parent().append(curtain);
    }
    
    $(this).toggleClass("active");
    $(".sidebar").toggleClass("active");
  });
});
