const userCardTemplate = document.querySelector("[data-user-template")
const userCardContainer = document.querySelector("[data-user-cards-container-whatsapp")
const searchInputW = document.querySelector("[data-search-whatsapp]")
const cardsGruposW = document.querySelector("[data-user-cards-container-whatsapp]").children
const searchInputT = document.querySelector("[data-search-telegram]")
const cardsGruposT = document.querySelector("[data-user-cards-container-telegram]").children

/////////////////////////////////////////////////////////////////////////

const tituloGrupo0W = cardsGruposW[0]
const tituloGrupo1W = cardsGruposW[1]
const tituloGrupo2W = cardsGruposW[2]
const tituloGrupo3W = cardsGruposW[3]
const tituloGrupo4W = cardsGruposW[4]
const tituloGrupo5W = cardsGruposW[5]
const tituloGrupo6W = cardsGruposW[6]
const tituloGrupo7W = cardsGruposW[7]
const tituloGrupo8W = cardsGruposW[8]
const tituloGrupo9W = cardsGruposW[9]

/////////////////////////////////////////////////////////////////////////

const tituloGrupo0T = cardsGruposT[0]
const tituloGrupo1T = cardsGruposT[1]
const tituloGrupo2T = cardsGruposT[2]
const tituloGrupo3T = cardsGruposT[3]
const tituloGrupo4T = cardsGruposT[4]
const tituloGrupo5T = cardsGruposT[5]
const tituloGrupo6T = cardsGruposT[6]
const tituloGrupo7T = cardsGruposT[7]
const tituloGrupo8T = cardsGruposT[8]
const tituloGrupo9T = cardsGruposT[9]
/////////////////////////////////////////////////////////////////////////
// const teste0 = tituloGrupo0.querySelector("[data-header-gr]").textContent
// const teste1 = tituloGrupo1.querySelector("[data-header-gr]").textContent
// const teste2 = tituloGrupo2.querySelector("[data-header-gr]").textContent
// const teste3 = tituloGrupo3.querySelector("[data-header-gr]").textContent
// const teste4 = tituloGrupo4.querySelector("[data-header-gr]").textContent
/////////////////////////////////////////////////////////////////////////
const listaCardsW = [tituloGrupo0W, tituloGrupo1W, tituloGrupo2W, tituloGrupo3W, tituloGrupo4W, tituloGrupo5W, tituloGrupo6W, tituloGrupo7W, tituloGrupo8W, tituloGrupo9W]
const listaCardsT = [tituloGrupo0T, tituloGrupo1T, tituloGrupo2T, tituloGrupo3T, tituloGrupo4T, tituloGrupo5T, tituloGrupo6T, tituloGrupo7T, tituloGrupo8T, tituloGrupo9T]
//

searchInputW.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
        listaCardsW.forEach(titulo => {
            const trueTit = titulo.querySelector("[data-header-gr]").textContent
            const isVisible = trueTit.toLowerCase().includes(value)
            titulo.classList.toggle("hide", !isVisible)

            // listaCards.forEach(cardGrupo => {
            //     cardGrupo.classList.toggle("hide", !isVisible)        
            // })
        });

    
})

searchInputT.addEventListener("input", r => {
    const value = r.target.value.toLowerCase()
        listaCardsT.forEach(titulo => {
            const trueTit = titulo.querySelector("[data-header-gr]").textContent
            const isVisible = trueTit.toLowerCase().includes(value)
            titulo.classList.toggle("hide", !isVisible)

            // listaCards.forEach(cardGrupo => {
            //     cardGrupo.classList.toggle("hide", !isVisible)        
            // })
        });

    
})

// const grupos = ['Grupo da manu', 'Renda Extra Garantida!', 'Neofund', 'Amizade verdadeira']



// console.log(cardsGrupos)
// console.log(tituloGrupo)
// console.log(teste)
// console.log(teste2)

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => {
//         users = data.map(user => {
//             const card = userCardTemplate.content.cloneNode(true).children[0]
//             const header = card.querySelector("[data-header]")
//             const body = card.querySelector("[data-body]")
//             header.textContent = user.name
//             body.textContent = user.email
//             userCardContainer.append(card)
//             return {name: user.name, email: user.email, element: card}
//         })

//     })