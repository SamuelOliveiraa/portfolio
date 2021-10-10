$(document).ready(function () {
    //ESCONDE E MOSTRA O MENU HAMBURGUER
    let vpWidth = $(window).width();
    condition(vpWidth)

    $(window).resize(function() {
        let vpWidth = $(window).width();
        condition(vpWidth)
    })
    
    $('header .icon').click(function() {
        $('header .icon').toggleClass("close")
        $('#nav').toggle()
    })

    // TIRA E COLOCA A SOMBRA NO MENU
    const header = document.querySelector('header')
    const navHeight = header.offsetHeight

    window.addEventListener('scroll', function() {
        if(window.scrollY >= navHeight){
            header.classList.add('scroll')
        }else{
            header.classList.remove('scroll')
        }
    })

    /* ANIMAÇÃO DE MAQUINA DE ESCREVER (ORIGAMID) */
    function typeWriter(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = "";
        textoArray.forEach((letra, i) =>{
            setTimeout(() => elemento.innerHTML += letra, 50 * i)
        });
    }

    const texto = document.getElementById('txt');

    typeWriter(texto)

    /* ROLAGEM SUAVE */
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 100
        }, 500);
    });

    $('.services .cards .card').hover(  
          function(){

                $(this).children('p').css('display', 'block')
                $(this).css('height', '250px')
            }, function() {
                $(this).children('p').css('display', 'none')
                $(this).css('height', '180px')
            }
    )
})

function condition(vpWidth) {
    if(vpWidth <= 699) {
        $('header .icon').show()
        $('#nav').hide()
       
        if($('header .icon').hasClass('close')){
            $('header .icon').removeClass('close')
            $('#nav').show()
        }

        $('#nav li a').click(function() {
            $('header .icon').removeClass('close')
            $('#nav').hide()
        })
    }else if(vpWidth >= 700 ){
        $('header .icon').hide()
        $('#nav').show()

        $('#nav li a').click(function() {
            $('#nav').show()
        })
    }
}