$(function() {
    $(".en").click(function() {
        $(".menu__list-item").children().eq(0).text("Home");
        $(".menu__list-item").children().eq(1).text("Services");
        $(".menu__list-item").children().eq(2).text("About");
        $(".menu__list-item").children().eq(3).text("Contact Us");
        $(".language-selected").text("ENG");
        $(".language-selected").removeClass("change-ru");
        $(".language-selected").removeClass("change-az");
        $(".language-selected").addClass("change-en");

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
        $(".menu__list-item").children().eq(0).text("Главная");
        $(".menu__list-item").children().eq(1).text("Услуги");
        $(".menu__list-item").children().eq(2).text("О нас");
        $(".menu__list-item").children().eq(3).text("Контакты");
        $(".language-selected").text("РУС");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-az");
        $(".language-selected").addClass("change-ru");

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
        $(".menu__list-item").children().eq(0).text("Ana Səhifə");
        $(".menu__list-item").children().eq(1).text("Xidmətlərimiz");
        $(".menu__list-item").children().eq(2).text("Haqqımızda");
        $(".menu__list-item").children().eq(3).text("Əlaqə");
        $(".language-selected").text("AZE");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-ru");
        $(".language-selected").addClass("change-az");

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