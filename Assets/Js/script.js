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
                $(this).children('p').css('height', '57.6px')
                $(this).children('p').css('opacity', '1')
                $(this).css('height', '250px')
            }, function() {
                $(this).children('p').css('height', '0')
                $(this).children('p').css('opacity', '0')
                $(this).css('height', '180px')
            }
    )
    $('.skills .cards .card').hover(  
        function(){
            $(this).children('.button').css('opacity', '1')
          }, function() {
            $(this).children('.button').css('opacity', '0')
          }
    )
    
    /* SCROLL REVEAL */
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 1400,
        reset: true
    });

    ScrollReveal().reveal('.dowload', { delay: 200 });
    ScrollReveal().reveal('.about', { delay: 250 });
    ScrollReveal().reveal('.contact', { delay: 300 });
    ScrollReveal().reveal('.projects', { delay: 350 });
    ScrollReveal().reveal('.services', { delay: 400 });
    ScrollReveal().reveal('.skills', { delay: 450 });
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