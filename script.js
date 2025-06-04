function toggleMode(){
    const html = document.documentElement
    
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'texto alternativo light')
    } else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'texto alernativo dark')
    }
}

/* html.classList.toggle("light") - adiciona e remove a classe, função pronta*/

 /*  if(html.classList.contains('light')){
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }*/