'use strict'

const botaoBuscar = document.getElementById('buscar')

async function criarImagem() {
    const imagens = document.getElementById('imagens')
    imagens.textContent = ''
    const racaDog = document.getElementById('raca').value
    const fotos = await buscarImagens(racaDog)

    fotos.forEach((imagem) => {
        const img = document.createElement('img')
        img.src = imagem
        imagens.appendChild(img)
        
    })
    
}

async function buscarImagens(raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()
    console.log(imagens.message)
    return imagens.message
}

botaoBuscar.addEventListener('click', criarImagem)