const passwordOrig = document.querySelector('input#password')
const passwordRep = document.querySelector('input#passwordRep')
const inputs = document.querySelectorAll('.validityCheck')

console.log(inputs)

function checkPassRep(orig, rep) {
    if (orig.value === rep.value){
        console.log(orig.value)
        console.log(rep.value)
        return true
    } else{
        return false
    }
}

passwordOrig.addEventListener('change', (event) =>{
    console.log('changed')
    if(checkPassRep(event.target, passwordRep)){
        passwordOrig.className = "";
        passwordRep.className = "";
        passwordOrig.classList.add('valid');
        passwordRep.classList.add('valid');
        console.log(passwordOrig.classList)
    } else {
        passwordOrig.className = "";
        passwordRep.className = "";
        passwordOrig.classList.add('invalid');
        passwordRep.classList.add('invalid');
        console.log(passwordOrig.classList)
    }
})

passwordRep.addEventListener('change', (event) =>{
    console.log('changed')
    if(checkPassRep(event.target, passwordRep)){
        passwordOrig.className = "";
        passwordRep.className = "";
        passwordOrig.classList.add('valid');
        passwordRep.classList.add('valid');
        console.log(passwordOrig.classList)
    } else {
        passwordOrig.className = "";
        passwordRep.className = "";
        passwordOrig.classList.add('invalid');
        passwordRep.classList.add('invalid');
        console.log(passwordOrig.classList)
    }
})

inputs.forEach(input => {
    input.addEventListener('change', (event) => {
        if(event.target.checkValidity() === false) {
            console.log('invalid')
            if(!(event.target.id === 'invalidAfterInput')){
                event.target.id = 'invalidAfterInput'
            }
        } else if(event.target.checkValidity() === true){
            event.target.removeAttribute('id')
        }
    })

    input.addEventListener('focusout', (event) =>{
        if(event.target.checkValidity() === false) {
            console.log('invalid')
            if(!(event.target.id === 'invalidAfterInput')){
                event.target.id = 'invalidAfterInput'
            }
        } else if(event.target.checkValidity() === true){
            event.target.removeAttribute('id')
        }
    })
})