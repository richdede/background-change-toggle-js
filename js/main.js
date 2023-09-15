$(".custom-toggle").each(function (i){
    var classes = $(this).attr("class"),
    id = $(this).attr("id"),
    name = $(this).attr("name");

    $(this).wrap('<div class="custom-toggle" id="' + name + '"></div');
    $(this).after('<label for="custom-toggle-' + i + '"></label>');
    $(this).attr("id", "custom-toggle-" + i);
    $(this).attr("name", name);

});

$(".custom-toggle input").change(function (){
        $("body").toggleClass("change");
});