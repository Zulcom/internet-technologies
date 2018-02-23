$(function () {
    $.ajax({
        type: "GET",
        url:'/ajax/5',
        dataType: "json",
        success: function (d, e) {
       console.log(d);
           $('#gallery').text(d.gallery);
           $.each(d.images, function (index, item) {
               $('#img-'+index+' img').attr('src',item.file).attr('alt',item.name).attr('width',400).attr('height',400);
           });
        },
        error: function (e) {
            console.log('error: ' + e.toString())
        }
    });
    lightGallery (document.getElementById('lightgallery'));
});