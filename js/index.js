$(document).ready(function(){

    $.get('', function(xml){

        $('body').append('<h2>Miembros de la Justice League<h2>');
        $('body').append('<dl/>');

        $(xml).find('personaje').each(function(){
            var nombre_personaje = $(this).find('nombre').text();
            var imagen = $(this).children().attr('imagenurl');
            var descripcion = $(this).find('descripcion').text();

            var html = '<dt><p>'+nombre_personaje+'</p></dt>';
            html += '<dt><img src='+imagen+'></dt>';
            html += '<p>'+descripcion+'</p>'

            $('dl').append($(html));
        });
    });
});