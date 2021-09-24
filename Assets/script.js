//ESCONDE E MOSTRA AS PERGUNTAS DA SEÇÃO AKS    
$('#tit1').click(function(){
    $('#tit1').toggleClass('show')
    $('#par1').toggle()

    remove('#tit2', '#par2')
    remove('#tit3', '#par3')
    remove('#tit4', '#par4')
    remove('#tit5', '#par5')
});

$('#tit2').click(function(){
    $('#tit2').toggleClass('show')
    $('#par2').toggle()

    remove('#tit1', '#par1')
    remove('#tit3', '#par3')
    remove('#tit4', '#par4')
    remove('#tit5', '#par5')
});

$('#tit3').click(function(){
    $('#tit3').toggleClass('show')
    $('#par3').toggle()

    remove('#tit2', '#par2')
    remove('#tit1', '#par1')
    remove('#tit4', '#par4')
    remove('#tit5', '#par5')
});

$('#tit4').click(function(){
    $('#tit4').toggleClass('show')
    $('#par4').toggle()

    remove('#tit2', '#par2')
    remove('#tit3', '#par3')
    remove('#tit1', '#par1')
    remove('#tit5', '#par5')
});
$('#tit5').click(function(){
    $('#tit5').toggleClass('show')
    $('#par5').toggle()

    remove('#tit2', '#par2')
    remove('#tit3', '#par3')
    remove('#tit4', '#par4')
    remove('#tit1', '#par1')
});

function remove(idTitulo, idPar){
    $(idTitulo).removeClass('show')
    $(idPar).hide()
}

$('#instagram').hover(
    function(){
        $('#instagram').attr('color', '#499CFE')
    },
    function(){
        $('#instagram').attr('color', 'black')
    }
);

$('#github').hover(
    function(){
        $('#github').attr('color', '#499CFE')
    },
    function(){
        $('#github').attr('color', 'black')
    }
);

$('#linkedin').hover(
    function(){
        $('#linkedin').attr('color', '#499CFE')
    },
    function(){
        $('#linkedin').attr('color', 'black')
    }
);

$('#tit1').hover(
    function() {
        
    }
);