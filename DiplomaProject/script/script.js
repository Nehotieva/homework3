$(".about-items > div").on("click", function(){
    $(this).children(".about-icon").toggleClass("about-rotate-icon");
    $(this).parent(".about-items").toggleClass('change-color');
    $(this).next(".about-text").slideToggle(300);

})
$(".about_leads_items > div"). on("click", function(){
    $(this).parent(".about_leads_items").toggleClass("about_leads_blue");
    $(this).children(".about_leads_pretitle").toggleClass("change_color_leads");
    $(this).next(".about_leads_text").slideToggle(300);
})