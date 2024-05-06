const hexaMap = (value) => {
    let result = '';
    switch(value)
    {
        case 10:
            result = 'A';
            break;

        case 11:
            result = 'B';
            break;

        case 12:
            result = 'C';
            break;

        case 13:
            result = 'D';
            break;

        case 14:
            result = 'E';
            break;

        case 15:
            result = 'F';
            break;
        
        default :
            result = value.toString();
            break;
    }
    return result;
}

const decToHexa = (val) =>{
    reminders = [];
    temp = [];
    while(val > 0)
    {
        reminders.push(val % 16);
        val = Math.floor(val / 16);
    }
    reminders.map(e => {
        temp.push(hexaMap(e));
    })
    return temp.join("").padStart(2,'0');
}
const randomColor = () => {
    let value = `#${decToHexa(Math.floor(Math.random() * 255))+decToHexa(Math.floor(Math.random() * 255))+decToHexa(Math.floor(Math.random() * 255))}`;
    document.getElementById("lable").innerText = value;
    return value;
}

const filpper = () =>{
    document.getElementById("box").style = "background-color : "+randomColor();
}

const btn = document.querySelector("button");

btn.addEventListener("mousedown",function (){
    btn.style.scale = 0.97;
    btn.style.backgroundColor = "white";
});
btn.addEventListener("mouseenter",function (){
    btn.style.backgroundColor = "#DDE6ED";
});
btn.addEventListener("mouseleave",function (){
    btn.style.backgroundColor = "#FFFFFF";
});
btn.addEventListener("mouseup",function (){
    btn.style.scale = 1;
    btn.style.backgroundColor = "white";
});