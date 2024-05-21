var botScroll = document.querySelectorAll(".botao-carrossel .button_cx");
for (var x = 0; x < botScroll.length; x++) {
    (function (x) {
        botScroll[x].onclick = function () {
            moveScroll(x, cxAtiva().box_ativo, cxAtiva().img_width);
        }
    })(x);
}

function cxAtiva() {
    var ele = document.querySelectorAll(".conteudocaixas");
    for (var x = 0; x < ele.length; x++) {
        if (ele[x].parentNode.style.display == "block") break;
    }

    return {
        box_ativo: x, // retorna a galeria visível (ativa)
        img_width: ele[x].querySelector("img").offsetWidth // retorna a largura das imagens
    }
}

function moveScroll(idx, cca, wid) {
    var ele = document.querySelectorAll(".conteudocaixas");
    var ccs = ele[cca];
    var ccs_s = ccs.scrollLeft;
    // idx == 1 significa que segundo botão foi clicado (para a direita)
    scrollSuave(ccs_s, idx == 1 ? wid + ccs_s : ccs_s - wid, 0, ccs);
}