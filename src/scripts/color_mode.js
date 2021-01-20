css_colormode = document.getElementsByClassName('css_colormode')[0]
color_mode = document.getElementsByClassName('color_mode')[0]


color_mode.addEventListener('click', () => {
    if (css_colormode.getAttribute("href") == '') {
        css_colormode.href = 'styles/white.css'
        color_mode.src = './assets/svg/sun_black.svg'

    }
    else{
        css_colormode.href = ''
        color_mode.src = './assets/svg/sun_white.svg'
    }
})