if(window.SimpleSlide){



new SimpleSlide({
    slide: "quote",

    auto: true,
    time: 5000

})
new SimpleSlide({
    slide: "portfolio",
    auto: false,
    time: 5000,
    nav: true

})

}
if (window.SimpleAnime){
    new SimpleAnime();
}

const funcionamento = document.querySelector('[data-semana]')
const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
const horaSemana = funcionamento.dataset.hora.split(',').map(Number)

const horaAhora= new Date().getHours()
const diaAgora = new Date().getDay()

const diaAberto = diasSemana.indexOf(diaAgora) !== -1;
const horaAberta = horaAhora >= horaSemana[0] && horaAhora < horaSemana[1]

if(diaAberto && horaAberta) {
    funcionamento.classList.add('aberto')
}