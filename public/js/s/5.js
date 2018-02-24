$(function () {
    $.ajax({
        type: "GET",
        url:'/ajax/5',
        dataType: "json",
        success: function (d, e) {
           $('#gallery').text(d.gallery);
           $.each(d.images, function (index, item) {
               $('#img-'+index+' img').attr('src',item.file).attr('alt',item.name).attr('width',400).attr('height',400);
               $('#img-'+index).attr('href',item.file).attr('title',item.name);
           });
        },
        error: function (e) {
            console.log('error: ' + e.toString())
        }
    });
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        }
    });
});