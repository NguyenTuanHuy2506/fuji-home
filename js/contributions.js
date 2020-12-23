$(document).ready(function () {
    var widthDevice = $(window).width();
    if (widthDevice < 500) {
       equalHeightCorporation(1, 1);
    }
    else if (widthDevice < 768) {
       equalHeightCorporation(1, 2);
    } else {
       equalHeightCorporation(1, 3);
    }

    //Resize window
    $(window).resize(function () {
       var widthDevice = $(window).width();
       resetElementCorporation();
       if (widthDevice < 500) {
          equalHeightCorporation(1, 1);
       }
       else if (widthDevice < 768) {
          equalHeightCorporation(1, 2);
       } else {
          equalHeightCorporation(1, 3);
       }
    })

 });

 function resetElementCorporation() {
    //Reset class when resize window
    $(".c-listpost01__item").removeClass(function (index, css) {
       return (css.match(/(^|\s)row\S+/g) || []).join(' ');
    });

    //Reset css when resize windown
    $(".c-listpost01__item .ttl").css({ "height": "auto" });
    $(".c-listpost01__item .ttl ~ p").css({ "height": "auto" });
 }
 function getAllHeightOfRow(elm) {
    var arr = [];
    $(elm).each(function () {
       arr.push($(this).height());
    })
    return arr;
 }

 function equalHeightCorporation(rowIndex, itemPerRow) {
    $(".c-listpost01__item").each(function (i) {
       if (parseInt(i) < itemPerRow * rowIndex) {
          $(this).addClass("row" + rowIndex);
       } else {
          rowIndex = rowIndex + 1;
          $(this).addClass("row" + rowIndex);
       }
    });

    var totalRow = Math.ceil($(".c-listpost01").children().length / itemPerRow);

    var arrHeightTitle = [];
    var arrHeightDetail = [];

    for (var i = 1; i <= totalRow; i++) {
       var arrHeightTitle = getAllHeightOfRow(".row" + i + " .ttl");
       var arrHeightDetail = getAllHeightOfRow(".row" + i + " .ttl ~ p");

       var maxHeightTitle = Math.max.apply(null, arrHeightTitle);
       var maxHeightDetail = Math.max.apply(null, arrHeightDetail);

       $(".row" + i + " .ttl").height(maxHeightTitle);
       $(".row" + i + " .ttl ~ p").height(maxHeightDetail);
    }
 }