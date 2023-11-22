//os comentários começados com $ são na verdade funções que talvez eu venha a ajustar futuramente, assim como algumas outras que não estão 100% ainda

$(document).ready(function() {
    $('#nova-imagem-botao').click(function(botaoNovaImagem) { //no click no #id abre a função que deverá baixar o #id2 e recolher o #id3 se estiver baixado 
        $('#formInserir').slideDown();
        $('#formRetirar').slideUp();
        //$('#recolher-form').fadeIn();
    })

    $('#bt-cancel-inserir').click(function(BTC){
        $('#formInserir').slideUp();
        //$('#recolher-form').fadeOut();
    })

    //$('#recolher-form').click(function(BTC){const limparAoRecolher = $('#new-URL').val('');$('#formRetirar').slideUp();$('#formInserir').slideUp();$('#recolher-form').fadeOut();})

    $('#formInserir').submit(function(adURL) {  //ao enviar
        adURL.preventDefault();    //previno a função padrão de envio e recarregamento de página
        const novaURL = $('#new-URL').val();    //defino que a const será = o valor inserido num no input pelo usuário
        const novaImagem = $('<li style="display: none"></li>');    //defino uma const como um novo elemento de lista <li> e seus atributos
                                                                //você pode pensar que esse elemento ainda não foi "codado no html"
                                                                //por enquanto ele flutua, não fixo, no JS, e ao chamar a const
                                                                //estarei chamando ele, já que a const tem por valor, ele
                                                                //basicamente a minha const novaImagem é uma linha de código que
                                                                //por enquanto só existe no JS sem qualquer função

        $(`<div>
            <a href="${novaURL}" class="links-imgs" target="_blank">Ver em tamanho real</a>
            <a href="${novaURL}" target="_blank">
                <img src="${novaURL}" class="img-class" title="Ver imagem em tamanho real"/>
            </a>
        </div>`).appendTo(novaImagem);

        //acima eu criei "dinamicamente" uma string de html usando " `` ". A sintaxe basica para isso é $(``)
        //essa string (embora seja de html), assim como a <li> acima, está atualmente apenas flutuando pelo JS
        //a diferença entre $('') e $(``) se dá porque a primeira me permite escrever apenas como se eu estivesse escrevendo no
        //arquivo html mesmo, a segunda me permite "interpolar códigos", melhor dizendo: me permite usar a sintaxe do JS
        //para anexar elementos, valores e expressões prórpias apenas do JS, ao código (por isso o "dinamicamente"),
        //seja diretamentente à um elemento do HTML pelo appendTo ou em uma linha ainda flutuante no JS que por sua vez irá para o HTML

        //com ${novaURL} eu só estou puxando minha const que por sua vez puxa o valor inserido pelo usuário, no input
        //após concluída a string, com o appendTo eu digo que tudo aquilo deverá ser inserido no <li> ainda flutuante, por enquanto
        //nesse momento, const novaImagem é igual a 
        
        //  $('<li style="display: none">
        //          <div>
        //              <a href="${novaURL}" class="links-imgs" target="_blank">Ver em tamanho real</a>
        //              <a href="${novaURL}" target="_blank">
        //                  <img src="${novaURL}" class="img-class" title="Ver imagem em tamanho real"/>
        //              </a>
        //          </div>
        //     </li>');

        $(novaImagem).appendTo('ul'); //aqui digo que o código acima deve ser inserido dentro do elemento "ul" do HTML
                                    //faço isso mencionando a const com o valor que defini acima e usando o .appendTo
                                    //poderia também mencionar um #id ou .class no lugar de ul (apenas para constar)
        $(novaImagem).fadeIn(700);//como o elemento se mostrará na tela após inserido no código, aqui apenas defino o efeito e tempo da aparição
        $('#new-URL').val(''); //por fim, depois que o elemento já foi incorporado ao código, limpo o campo de input
                                //retornando minha primeira const a zero
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