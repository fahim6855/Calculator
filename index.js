let inputField = document.querySelector("input") 

function keyInput(input){
inputField.value += input

if (inputField.value.length >= 12){
    inputField.style.fontSize = "20px"
}else{
    inputField.style.fontSize = "35px"
}
}

function answer(){
    try {
        inputField.value = eval(inputField.value)
    } catch (error) {
        
    }
}

function clearInput(){inputField.value = ""}
function deleteInput(){
    let newField = inputField.value.replace(inputField.value[inputField.value.length - 1], "");

    inputField.value = newField
}

function root(){inputField.value = (inputField.value**0.5).toFixed(4)}