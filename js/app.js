function convertirHoraString(numero){
    if(numero < 10){
       return `0${numero}`
    }else {
        return `${numero}`
    }
}

const retrocedeTemporizador = () => {
    const detalleHora = document.querySelector('#horas')
    const detalleMinutos = document.querySelector('#minutos')
    const detalleSegundos = document.querySelector('#segundos')
    
    segundo --
    //console.log(hora)
    //console.log(minuto)
    //console.log(segundo)
    if(segundo === 0 && minuto === 0 && segundo === 0){
        console.log("pausar")
        pausarTemporizador()
    }else{
        if(segundo > 0){
            detalleHora.value = convertirHoraString(hora)
            detalleMinutos.value = convertirHoraString(minuto)
            detalleSegundos.value = convertirHoraString(segundo)
            }else {
                segundo = 59
                if(minuto > 0){
                    minuto --
                    detalleHora.value = convertirHoraString(hora)
                    detalleMinutos.value = convertirHoraString(minuto)
                    detalleSegundos.value = convertirHoraString(segundo)
                }else{
                    minuto = 59
                if(hora > 0){
                    hora --
                    detalleHora.value = convertirHoraString(hora)
                    detalleMinutos.value = convertirHoraString(minuto)
                    detalleSegundos.value = convertirHoraString(segundo)
                }else {
                    detalleHora.value = convertirHoraString(hora)
                    detalleMinutos.value = convertirHoraString(minuto)
                    detalleSegundos.value = convertirHoraString(segundo)
                }
            }
        }
    }
}
const iniciarTemporizador = (e) =>{
    e.preventDefault();
    if(!funcionando){
        const detalleHora = document.querySelector('#horas')
        const detalleMinutos = document.querySelector('#minutos')
        const detalleSegundos = document.querySelector('#segundos')
        if(detalleHora.value === ""){
            hora = 0
        }else{
            hora = parseInt(detalleHora.value)
        }
        if(detalleMinutos.value === ""){
            minuto = 0
        }else{
            minuto = parseInt(detalleMinutos.value)
        }
        if(detalleSegundos.value === ""){
            segundo = 0
        }else {
            segundo = parseInt(detalleSegundos.value)
        }
        funcionando = true
        intervaloId = setInterval(retrocedeTemporizador, 1000)
    }
}


const pausarTemporizador = () =>{
    if(funcionando){
        funcionando = false
        clearInterval(intervaloId)
    }
    const detalleHora = document.querySelector('#horas')
    const detalleMinutos = document.querySelector('#minutos')
    const detalleSegundos = document.querySelector('#segundos')
    detalleHora.value = convertirHoraString(hora)
    detalleMinutos.value = convertirHoraString(minuto)
    detalleSegundos.value = convertirHoraString(segundo)
}

const reiniciarTemporizador = () =>{
    const detalleHora = document.querySelector('#horas')
    const detalleMinutos = document.querySelector('#minutos')
    const detalleSegundos = document.querySelector('#segundos')
    hora = 0
    minuto = 0
    segundo = 0
    detalleHora.value = "00"
    detalleMinutos.value = "00"
    detalleSegundos.value = "00"
}


let segundo = 0
let minuto = 0
let hora = 0
let funcionando = false
let intervaloId
const btnInciar = document.getElementById('temporizadorForm')
const btnPausar = document.querySelector('.btn-outline-warning')
const btnReiniciar = document.querySelector('.btn-outline-danger')
btnInciar.addEventListener('submit', iniciarTemporizador)
btnPausar.addEventListener('click', pausarTemporizador)
btnReiniciar.addEventListener('click', reiniciarTemporizador)