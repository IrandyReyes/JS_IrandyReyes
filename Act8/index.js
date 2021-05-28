let res= document.getElementById("dibujar");

tipo.addEventListener("change",()=>{
    let tipo=document.getElementById("tipo").value;
    if(tipo=="lineal"||tipo=="radial")
    {
        let color2= document.getElementById("cf2");
        color2.style.display= 'block';
    }
})
res.addEventListener("click",()=>{
    let figura= document.getElementById("figura").value;
    let color= document.getElementById("cf1").value;
    let colord= document.getElementById("cf2").value;
    tipo=document.getElementById("tipo").value;
    if(figura== "estrella")
    {
        let canvas= document.getElementById("primercanvas");
        let ctx= canvas.getContext("2d");
        ctx.beginPath();
            ctx.rect(0,0,300, 400)
        ctx.closePath();
        ctx.fillStyle= "#FFFFFF"; 
        ctx.fill();
        ctx.beginPath();
            ctx.moveTo(140, 110);
            ctx.lineTo(20, 140);
            ctx.lineTo(70, 88);
            ctx.lineTo(10, 52);
            ctx.lineTo(89, 52);
            ctx.lineTo(140, 10);
            ctx.lineTo(197, 52);
            ctx.lineTo(275, 52);
            ctx.lineTo(205, 88);
            ctx.lineTo(275, 140);
            ctx.lineTo(140, 110);
        ctx.closePath();
        if(tipo== "solido")
        {
            ctx.fillStyle= color; 
            ctx.fill();
            console.log(color);
        }
        else if(tipo=="lineal")
        {
            var degra= ctx.createLinearGradient(10, 52, 275, 140);
            degra.addColorStop(0, color);
            degra.addColorStop(1, colord);
            ctx.fillStyle= degra;
            ctx.fill();
        }
        else if(tipo=="radial")
        {
            var degra= ctx.createRadialGradient(10, 52,20, 100, 140, 200);
            degra.addColorStop(0, color);
            degra.addColorStop(1, colord);
            ctx.fillStyle= degra;
            ctx.fill();
        }
    }
    if(figura== "mickey")
    {
        let canvas= document.getElementById("primercanvas");
        let ctx= canvas.getContext("2d");
        ctx.beginPath();
            ctx.rect(0,0,300, 400)
        ctx.closePath();
        ctx.fillStyle= "#FFFFFF"; 
        ctx.fill();
        ctx.beginPath();
            ctx.arc(150, 85, 55, 0, Math.PI*2);
        ctx.closePath();
        if(tipo== "solido")
        {
            ctx.fillStyle= color; 
            ctx.fill();
            console.log(color);
        }
        else if(tipo=="lineal")
        {
            var degra= ctx.createLinearGradient(10, 52, 275, 140);
            degra.addColorStop(0, color);
            degra.addColorStop(1, colord);
            ctx.fillStyle= degra;
            ctx.fill();
        }
        else if(tipo=="radial")
        {
            var degra= ctx.createRadialGradient(10, 52,20, 100, 140, 200);
            degra.addColorStop(0, color);
            degra.addColorStop(1, colord);
            ctx.fillStyle= degra;
            ctx.fill();
        }
        ctx.beginPath();
            ctx.arc(100,32,30,0,Math.PI*2);
        ctx.closePath();
        if(tipo== "solido")
        {
            ctx.fillStyle= color; 
            ctx.fill();
            console.log(color);
        }
        else if(tipo=="lineal")
        {
            var degra= ctx.createLinearGradient(10, 0, 100, 100);
            degra.addColorStop(0, color);
            degra.addColorStop(1, colord);
            ctx.fillStyle= degra;
            ctx.fill();
        }
        else if(tipo=="radial")
        {
            var degra= ctx.createRadialGradient(10, 52,20, 100, 140, 200);
            degra.addColorStop(0, color);
            degra.addColorStop(1, colord);
            ctx.fillStyle= degra;
            ctx.fill();
        }
        ctx.beginPath();
            ctx.arc(200,32,30,0,Math.PI*2);
        ctx.closePath();
        if(tipo== "solido")
        {
            ctx.fillStyle= color; 
            ctx.fill();
            console.log(color);
        }
        else if(tipo=="lineal")
        {
            var degra= ctx.createLinearGradient(10, 52, 275, 140);
            degra.addColorStop(0, color);
            degra.addColorStop(1, colord);
            ctx.fillStyle= degra;
            ctx.fill();
        }
        else if(tipo=="radial")
        {
            var degra= ctx.createRadialGradient(10, 52,20, 100, 140, 200);
            degra.addColorStop(0, color);
            degra.addColorStop(1, colord);
            ctx.fillStyle= degra;
            ctx.fill();
        }
    }
    if(figura== "cactus")
    {
        let canvas= document.getElementById("primercanvas");
        let ctx= canvas.getContext("2d");
        ctx.beginPath();
            ctx.rect(0,0,300, 400)
        ctx.closePath();
        ctx.fillStyle= "#FFFFFF"; 
        ctx.fill();
        ctx.beginPath();
            ctx.moveTo(130, 5);
            ctx.lineTo(160, 5);
            ctx.lineTo(170, 15);
            ctx.lineTo(170, 50);
            ctx.lineTo(185, 40);
            ctx.lineTo(184, 25);
            ctx.lineTo(190, 20);
            ctx.lineTo(200, 22);
            ctx.lineTo(200, 45);
            ctx.lineTo(170, 67);
            ctx.lineTo(170, 85);
            ctx.lineTo(120, 85);
            ctx.lineTo(120, 69);
            ctx.lineTo(92, 59);
            ctx.lineTo(92, 50);
            ctx.lineTo(98, 45);
            ctx.lineTo(105, 45);
            ctx.lineTo(112, 49);
            ctx.lineTo(112, 54);
            ctx.lineTo(122, 58);
            ctx.lineTo(120, 15);
            ctx.lineTo(130, 5);
        ctx.closePath();
        ctx.fillStyle= "#27AE60"; 
        ctx.fill();
        ctx.beginPath();
            ctx.moveTo(110, 85);
            ctx.lineTo(180, 85);
            ctx.lineTo(170, 120);
            ctx.lineTo(120, 120);
        ctx.closePath();
        if(tipo== "solido")
        {
            ctx.fillStyle= color; 
            ctx.fill();
            console.log(tipo);
        }
        else if(tipo=="lineal")
        {
            var degra= ctx.createLinearGradient(110, 85, 170, 120);
            degra.addColorStop(0, color);
            degra.addColorStop(1, colord);
            ctx.fillStyle= degra;
            ctx.fill();
        }
        else if(tipo=="radial")
        {
            var degra= ctx.createRadialGradient(110, 140,10, 100, 200, 150);
            degra.addColorStop(0, color);
            degra.addColorStop(1, colord);
            ctx.fillStyle= degra;
            ctx.fill();
        }
    }
})
