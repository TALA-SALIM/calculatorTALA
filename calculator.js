const calc = document.getElementById("calc");
const dis = document.getElementById("dis");

calc.addEventListener('click' , (e) =>{
if(e.target.nodeName === 'BUTTON'){
switch(e.target.textContent){
            case'clear':
                clearDisplay();
                break;
            case 'd':
                deleteOneValue();
                break;
            case '=':
                evaluateExpression();
                break;
            default:
                addToDisplay(e.target.textContent);
}}});
function clearDisplay(){
dis.textContent = ' ';

}
function deleteOneValue() {
dis.textContent = dis.textContent.slice(0, -1);
}

function addToDisplay(value){
    dis.textContent += value;
}
function evaluateExpression(){
    try {
        dis.textContent = eval(dis.textContent);
    } catch {
        dis.textContent = 'Error';
    }
}
