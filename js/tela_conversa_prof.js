document.addEventListener('DOMContentLoaded',function(){
    

    bot = document.querySelector('.botao-enviar')
    main = document.querySelector('main')
    mensagem = document.querySelectorAll('.msg-usuario')
    cabecalho=document.querySelector('.cabecalho')
    cabecalho.style.background = '#F22B0C'
    contato=document.querySelector('.contato')
    contato.style.background= '#F22B0C'
    bolhausu=document.querySelectorAll('.bolha-usuario')
    for(z=0;z<=bolhausu.length - 1;z++){
        bolhausu[z].style.backgroundColor = '#E66000'
        bolhausu[z].style.borderColor = '#E66000' 

    }
    bolhares=document.querySelectorAll('.bolha-resposta')
    for(z=0;z<=bolhares.length - 1;z++){
        bolhares[z].style.backgroundColor = '#FC950D' 
        bolhares[z].style.borderColor = '#FC950D' 
    }
    botaoenviar=document.querySelector('.botao-enviar')
    botaoenviar.style.background= '#FC4D0D'
    men = document.createElement('section')
    div1 = document.createElement('div')
    div2 = document.createElement('div')
    div1.classList.add('msg-titulo')
    div2.classList.add('bolha-usuario')
    h2_n=document.createElement('h2')
    h3 = document.createElement('h3')
    p_n = document.createElement('p')


    
    men_2 = document.createElement('section')
    div1_2 = document.createElement('div')
    div2_2 = document.createElement('div')
    div1_2.classList.add('msg-titulo-invertida')
    div2_2.classList.add('bolha-resposta')
    h2_n_2=document.createElement('h2')
    h3_2 = document.createElement('h3')
    p_n_2 = document.createElement('p')



    bot.addEventListener('click',function(event){
        
        
        main.appendChild(men)
        men.classList.add('msg-usuario')
        men.appendChild(div1)
        men.appendChild(div2)
        div1.appendChild(h2_n)
        div1.appendChild(h3)
        h3.innerHTML = 'Horário'
        div2.appendChild(p_n)

        main.appendChild(men_2)
        men_2.classList.add('msg-resposta')
        men_2.appendChild(div1_2)
        men_2.appendChild(div2_2)
        div1_2.appendChild(h2_n_2)
        div1_2.appendChild(h3_2)
        h3_2.innerHTML = 'Horário'
        div2_2.appendChild(p_n_2)
        
        

        h2 = document.querySelectorAll('h2')
        h2[h2.length -2].innerHTML = 'Ana'
        h2[h2.length -1].innerHTML = 'Lúcia'
        p = document.querySelectorAll('p')
        p[p.length - 2].innerHTML = 'Gostaria de desmarcar a aula'
        p[p.length - 1].innerHTML = 'Ok! Pode se direcionar para o calendário, clicar no dia da aula e desmarcar lá!'
        bolhausu = document.querySelectorAll('.bolha-usuario')
        bolhares = document.querySelectorAll('.bolha-resposta')
        bolhares[bolhares.length - 1].style.backgroundColor = '#FC950D' 
        bolhares[bolhares.length - 1].style.borderColor = '#FC950D' 
        bolhausu[bolhausu.length - 1].style.borderColor = '#E66000'
        bolhausu[bolhausu.length - 1].style.backgroundColor = '#E66000' 
        
        


    })

    
    

    

    
    





    
    img = document.querySelector('.img-usuario')

    img.src = 'img/minimalist.png'
})