$(document).ready(function()
{
    setInterval(function(){
        $(".Title").fadeOut(3000);
        $(".Title").fadeIn(1000);
    });

    $("#Calcular").click(function(){
        Calcular('frmBags');
    });

    $("input[type='text']").focus(function () {
        OnFocus(this);
    });

    $("input[type='text']").blur(function () {
        OnBlur(this);
    });

    $("input[type='text']").keypress(function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
           //display error message
           $("#errormsg" + this.id).html("Apenas numeros sao aceitos").css("color", "red").show().fadeOut(3500);
                  return false;
       }
    });
});

function Calcular(form)
{
    var QuantidadeDry = 0;
    var QuantidadeWet = 0;
    var QuantidadeFragile = 0;
    var retorno = false;

    var elements = document.getElementById(form).elements;
    console.log(elements);
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        if(!item.value == "" || !item.value == null)
        {
            obj[item.name] = item.value;
            console.log(obj[item.name]);
        }
        else
        {
            console.log('"' + item.id + '"');
            $("#" + item.id).css("background-color", "red");
            $("#" + item.id).css("color", "white");
            $("#" + item.id).attr("placeholder", "Atencao, preencher com 0, se nao houver valores");
            $("#" + item.id).addClass('Placeholder');
            retorno = true;
        }
    } 

    if(retorno == true)
    {
        alert("Campo(s) faltando valores, preencher com 0 caso nao tenha produtos!");
        return;
    }

    QuantidadeDry = Math.ceil(obj['QuantityDivisionDry'] / obj['QuantityPutDry']);
    QuantidadeWet = Math.ceil(obj['QuantityDivisionWet'] / obj['QuantityPutWet']);
    QuantidadeFragile = Math.ceil(obj['QuantityDivisionFragile'] / obj['QuantityPutFragile']);
    
    alert('Quantidade de sacolas que o cliente precisa e de: \n Itens Secos: ' + obj['QuantityDivisionDry'] + ' Divididos em: ' + QuantidadeDry + ' sacolas.\n Itens Molhados: ' + obj['QuantityDivisionWet'] + ' Divididos em: ' + QuantidadeWet + ' sacolas.\n Itens Frageis: ' + obj['QuantityDivisionFragile'] + ' Divididos em: ' + QuantidadeFragile + ' sacolas.\n');
}

function OnHoverMouse(text)
{
    var texto = document.getElementById(text);
    texto.style.background = "blue";
}

function OnOutMouse(text)
{
    var texto = document.getElementById(text);
    texto.style.background = "";
}

function OnFocus(element)
{console.log("focus");
    $("#" + element.id).css("background-color", "black");
    $("#" + element.id).css("color", "white");
}

function OnBlur(element)
{console.log("hover");
    $("#" + element.id).css("background-color", "white");
    $("#" + element.id).css("color", "black");
}