const text=document.getElementById("text");
let fontSize=20;
function increaseTheFont()
{
    fontSize+=2;
    text.style.fontSize=fontSize+"px";

}
function decreaseTheFont()
{
    if(fontSize>8)
    {
        fontSize-=2;
        text.style.fontSize=fontSize+"px";
    }

}
