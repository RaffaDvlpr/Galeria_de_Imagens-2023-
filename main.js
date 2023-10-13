//os comentários (//) são na verdade funções que talvez eu venha a ajustar futuramente, assim como algumas outras que não estão 100% ainda

$(document).ready(function() {
    $('#nova-imagem-botao').click(function(botaoNovaImagem) {
        $('#formInserir').slideDown();
        $('#formRetirar').slideUp();
        //$('#recolher-form').fadeIn();
    })

    $('#bt-cancel-inserir').click(function(BTC){
        $('#formInserir').slideUp();
        //$('#recolher-form').fadeOut();
    })

    //$('#recolher-form').click(function(BTC){const limparAoRecolher = $('#new-URL').val('');$('#formRetirar').slideUp();$('#formInserir').slideUp();$('#recolher-form').fadeOut();})

    $('#formInserir').submit(function(adURL) {
        adURL.preventDefault();
        const novaURL = $('#new-URL').val();
        const novaImagem = $('<li style="display: none"></li>');
        $(`<div>
            <a href="${novaURL}" class="links-imgs" target="_blank">Ver em tamanho real</a>
            <a href="${novaURL}" target="_blank">
                <img src="${novaURL}" class="img-class" title="Ver imagem em tamanho real"/>
            </a>
        </div>`).appendTo(novaImagem);
        $(novaImagem).appendTo('ul');
        $(novaImagem).fadeIn(700);
        $('#new-URL').val('');
    })

    $('#retirar-imagem-botao').click(function(botaoRetirarImagem) {
        $('#formRetirar').slideDown();
        $('#formInserir').slideup();
        //$('#recolher-form').fadeIn();
    })

    $('#bt-cancel-retirar').click(function(BTC){
        $('#formRetirar').slideUp();
        //$('#recolher-form').fadeOut();
    })

    //$('#recolher-form').click(function(BTC){const limparAoRecolher = $('#new-URL').val('');$('#formInserir').slideUp();$('#recolher-form').fadeOut();})

    $('#formRetirar').submit(function(delImg){
        delImg.preventDefault();
        const imgDel = $('#del-URL').val();
    })
})