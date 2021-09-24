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

/* FUNÇÃO HOVER PARA OS ICONES DO INSTAGRAM, LINKEDIN E GITHUB */
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

//      DARK/LIGHT THEME
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

const container = document.querySelector('.container2')
const social = document.querySelector('.social-media')


// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  container.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    container.classList.toggle(darkTheme)
    social.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

    /* TIRA E COLOCA A ESTILIZAÇÃO DOS ICONES SE O MODO ESCURO ESTA ATIVO OU NÃO */
    if($('.container2').hasClass("dark-theme")){
        
        $('#instagram').attr('color', 'white')
        
        $('#github').attr('color', 'white')
        
        $('#linkedin').attr('color', 'white')

        $('#instagram').hover(
            function(){
                $('#instagram').attr('color', '#499CFE')
            },
            function(){
                $('#instagram').attr('color', 'white')
            }
        );
        
        $('#github').hover(
            function(){
                $('#github').attr('color', '#499CFE')
            },
            function(){
                $('#github').attr('color', 'white')
            }
        );
        
        $('#linkedin').hover(
            function(){
                $('#linkedin').attr('color', '#499CFE')
            },
            function(){
                $('#linkedin').attr('color', 'white')
            }
        );
    }else{
        $('#instagram').attr('color', 'black')
        
        $('#github').attr('color', 'black')
        
        $('#linkedin').attr('color', 'black')

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
    }
})

