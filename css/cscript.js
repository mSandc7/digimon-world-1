//Funções após a leitura do documento
$(document).ready(function() {
    //Select para mostrar e esconder divs
    $('.hack').on('click',function(){
        var SelectValue='.'+$(this).val();
        $('.code div').hide();
        $(SelectValue).toggle();
    });
});