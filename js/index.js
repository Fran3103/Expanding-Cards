const imagenes = document.querySelectorAll('.img');
console.log ( imagenes)

imagenes.forEach(imagen => {
    imagen.addEventListener('click', (e) =>{
        imagenes.forEach(img => img.classList.remove('activa'))
        e.currentTarget.classList.add('activa')
    });
    }
)




