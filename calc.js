let inputEl=document.getElementById("input-el");

function save(char){
    inputEl.value+=char;
}

function clrall(){
    inputEl.value=null;
}

function clr(){
    inputEl.value=inputEl.value.slice(0,-1);
}

function calculate(){
    try {
        let res= eval(inputEl.value);
        inputEl.value+=' = '+res;
    } catch (error) {
        inputEl.value='Error';
    }
}