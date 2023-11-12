function shuffle()
{
    const img=document.getElementById("img");
    let randomnumber=Math.floor(Math.random()*6)+1;
    img.setAttribute("src",`${randomnumber}.png`);
}

function anim()
{
    setTimeout(shuffle,500);
    const img=document.getElementById("img");
    img.setAttribute("src","rollingdice.gif");
}