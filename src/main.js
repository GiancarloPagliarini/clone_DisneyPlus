document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero')
    const heightHeroSection = heroSection.clientHeight

    window.addEventListener('scroll', function () {
        const currentPosition = window.scrollY

        if (currentPosition < heightHeroSection) {
            ocultaElementosHeader()
        } else {
            exibeElementosHeader()
        }
    })

    // Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            esconderAbas()
            aba.classList.add('shows__list--is-active')
            removerLinhaBotaoAtivo()
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    // Seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreEfechaResposta)
    }
})

function ocultaElementosHeader() {
    const header = document.querySelector('.header')
    header.classList.add('header--is-hidden')
}

function exibeElementosHeader() {
    const header = document.querySelector('.header')
    header.classList.remove('header--is-hidden')
}

function abreEfechaResposta(element) {
    const classOpen = 'faq__questions__item--is-open'
    const fatherElement = element.target.parentNode

    fatherElement.classList.toggle(classOpen)
}

function esconderAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

function removerLinhaBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}
