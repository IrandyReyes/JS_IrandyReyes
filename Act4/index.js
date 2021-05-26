function obtenerPx(){
    return Math.round(Math.random()*100)
}

window.addEventListener('load', ()=>{
    const divNo = document.getElementById('no');
    const divSi = document.getElementById('si');
    
    divNo.addEventListener('mouseover', ()=>{

        divNo.style.left= obtenerPx() + '%';
        divNo.style.top= obtenerPx() + '%';
    })
    divSi.addEventListener('click', ()=>{
        console.log('click')
        const feliz= document.getElementById('felicidades');
        feliz.style.display= 'block';
        divNo.style.display= 'none';
        divSi.style.display= 'none';
    })
})
