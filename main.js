const cashEl = document.getElementById('cash')
let cash = 0
let cashPerClick = 5
const computer = document.getElementById('computer')


class Game{
    click(){
        cash+=cashPerClick
        cashEl.innerHTML = '&euro; '+ cash
    }
    changeTheme(theme){
        if(theme == 'light'){
            document.querySelector('nav').style.backgroundColor = '#d6d6d6'
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.style.backgroundColor = '#f0f0f0'

            })
            
            document.querySelectorAll('.menu').forEach(menu =>{
                menu.style.backgroundColor = '#e1e1e1'
            })

            document.querySelectorAll('.icon').forEach(icon => {
                icon.style.filter = 'invert(0%)'
            })
        }
        if(theme == 'dark'){
            document.querySelector('nav').style.backgroundColor = '#111111'
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.style.backgroundColor = '#131313'

            })
            
            document.querySelectorAll('.menu').forEach(menu =>{
                menu.style.backgroundColor = '#1e1e1f'
            })

            document.querySelectorAll('.icon').forEach(icon => {
                icon.style.filter = 'invert(100%)'
            })
        }
    }
}

const game = new Game()