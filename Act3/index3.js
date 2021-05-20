var cad= new Date();
cad.setTime(cad.getTime()+1000*60*15)
document.cookie="1=valor; expires="+cad.toGMTString();
let res="";

function camino()
{
    manda= prompt("¿Hacia donde deseas ir?"); 
    manda.toLowerCase();
    while(!isNaN(manda) || (manda != 'izquierda' && manda != 'derecha'))
    {
        alert("Esta no es una opción válida");
        manda= prompt("¿Hacia donde deseas ir?");
        manda.toLowerCase();
    }
    res+= manda;
    document.cookie="1='"+manda+"'; expires="+cad.toGMTString();
    elige(res);
}

function elige(dos= "")
{
    manda= prompt("¿Hacia donde deseas ir?"); 
    manda.toLowerCase();
    while(!isNaN(manda) || (manda != 'izquierda' && manda != 'derecha'))
    {
        alert("Esta no es una opción válida");
        manda= prompt("¿Hacia donde deseas ir?");
        manda.toLowerCase();
    }
    dos += manda;
    document.cookie="1='"+dos+"'; expires="+cad.toGMTString();
    switch(dos)
    {
        case 'derechaderecha':
            window.location.replace("./Casa_bruja.html");
            break;
        case 'derechaizquierda':
            window.location.replace("./hongo.html");
            break;
        case 'izquierdaizquierda':
            window.location.replace("./Casa.html");
            break;
        case 'izquierdaderecha':
            window.location.replace("./arbol.html");
            break;
    }
}

let m= setTimeout(camino,1000);
