jQuery(document).ready(() => {

  // Событие клик при нажатии на кнопку отображения или скрытие сериалов сериалов
  $(".sort-bar__trigger-button").on("click", function() {
    $(this).toggleClass("active");

    // отображение либо скрытие сериалов
    if (!$(this).hasClass("active")) {
      $(".card-preview.series").css({ "display": "none"})
    } else {
      $(".card-preview.series").css({ "display": "block"})
    }
  });

    // Переключатель отображения контента
  $(".sort-bar__card-item").on("click", function () {
    $(".sort-bar__card-item").removeClass("active");
    $(this).toggleClass("active");

    if ($(this).hasClass("sort-bar__card-line")) {
      $(".card-preview").addClass("style1")
      $(".card-preview").removeClass("style2")
    }

    if ($(this).hasClass("sort-bar__card-average")) {
      $(".card-preview").addClass("style2")
      $(".card-preview").removeClass("style1")
    }

    if ($(this).hasClass("sort-bar__card-small")) {
      $(".card-preview").removeClass("style1")
      $(".card-preview").removeClass("style2")
    }
  })

  // событие на нажатии на название филтра 
  $(".sort-bar__filter-name").on("click", function() {
    $(this).toggleClass("active");
  });


  // Меняет отображение иконок в карточе при клике
  $(".card-preview__toggle-btn .iconify").on("click", function() {
    $(this).toggleClass("active");
  })


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
      curtain.on("click", function () {
        $(".sidebar").toggleClass("active");
        $(".header-burger").toggleClass("active");
        $(this).remove();
      })

      $(".sidebar").parent().append(curtain);
    }
    
    $(this).toggleClass("active");
    $(".sidebar").toggleClass("active");
  });


  // отпкрывает поисковую форму в шапке
  $(".header-search-form-mini").on("click", function() {
    $(".header-search-form .search-form").toggleClass("active")
  });
});
