$(function() {
    $(".en").click(function() {
        $(".language-selected").text("ENG");
        $(".language-selected").removeClass("change-ru");
        $(".language-selected").removeClass("change-az");
        $(".language-selected").addClass("change-en");

        $(".menu__list-item").children().eq(0).text("Home");
        $(".menu__list-item").children().eq(1).text("About");
        $(".menu__list-item").children().eq(2).text("Hardware");
        $(".menu__list-item").children().eq(3).text("Contact Us");
        
        $(".section_title").eq(0).text("Our Main directions");
        $(".section_title").eq(1).text("How Does It Work?");
        $(".section_title").eq(2).text("Important Things to Consider");
        
        $(".why-lease__item-title").eq(0).text("Data Center");
        $(".why-lease__item-title").eq(1).text("Hardware");
        $(".why-lease__item-title").eq(2).text("Networking");
        $(".why-lease__item-title").eq(3).text("Software");


        $("#title").text("WebPage showing multi-lamguage change");
        $("#description").text("WebPage showing multi-lamguage change");
        $("#span").text("Language-Change");

        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("AboutMenu1");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("AboutMenu2");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("AboutMenu3");

        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("AboutMenu4");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("AboutMenu5");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("AboutMenu6");
    });
});


$(function() {
    $(".ru").click(function() {
        $(".language-selected").text("РУС");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-az");
        $(".language-selected").addClass("change-ru");

        $(".menu__list-item").children().eq(0).text("Главная");
        $(".menu__list-item").children().eq(1).text("О нас");
        $(".menu__list-item").children().eq(2).text("Оборудование");
        $(".menu__list-item").children().eq(3).text("Контакты");

        $(".section_title").eq(0).text("Наши основные направления");
        $(".section_title").eq(1).text("Как это работает?");
        $(".section_title").eq(2).text("Важные моменты на заметку");

        $(".why-lease__item-title").eq(0).text("Датацентр");
        $(".why-lease__item-title").eq(1).text("Оборудование");
        $(".why-lease__item-title").eq(2).text("Сети");
        $(".why-lease__item-title").eq(3).text("Программы");

        $("#title").text("Страница показывающая возможность смены языков");
        $("#description").text("Страница показывающая возможность смены языков");
        $("#span").text("Смена языка");

        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Описание1");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Описание2");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Описание3");

        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Описание4");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Описание5");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Описание6");
    });
});

$(function() {
    $(".az").click(function() {
        $(".language-selected").text("AZE");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-ru");
        $(".language-selected").addClass("change-az");

        $(".menu__list-item").children().eq(0).text("Ana Səhifə");
        $(".menu__list-item").children().eq(1).text("Haqqımızda");
        $(".menu__list-item").children().eq(2).text("Avadanlıq");
        $(".menu__list-item").children().eq(3).text("Əlaqə");

        $(".section_title").eq(0).text("Bizim əsas istigamətlər");
        $(".section_title").eq(1).text("Bu necə işləyir?");
        $(".section_title").eq(2).text("Qeyd edilməli vacib məqamlar ");

        $(".why-lease__item-title").eq(0).text("Məlumat Mərkəzi");
        $(".why-lease__item-title").eq(1).text("Avadanlıqlar");
        $(".why-lease__item-title").eq(2).text("Şəbəkələr");
        $(".why-lease__item-title").eq(3).text("Programlar");

        $("#title").text("Dillerin secimi");
        $("#description").text("Dillerin secimi");
        $("#span").text("Dillerin-secimi");

        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Upppsss1");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Upppsss2");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Upppsss3");

        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Upppsss4");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Upppsss5");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Upppsss6");
    });
});