const regForm = document.querySelector("#registration_form");
const regType = document.querySelector("#registration_type");
const classlection = document.querySelector("#class_selection");
const competition = document.querySelector("#competition");
const errlist = document.querySelector("#errors ul");


function init(){
    classlection.classList.add('hidden');
    competition.classList.add('hidden');
    document.addEventListener('change',toggle_reg_type);
    document.addEventListener('submit',validate_form);
}

function toggle_reg_type() {
    if(regType.value === 'class_registration' ) {
        classlection.classList.remove('hidden');
       classlection.classList.add('show');
        competition.classList.add('hidden');
       }
    if(regType.value === 'competitive_team'){
       competition.classList.remove('hidden');
        competition.classList.add('show');
        classlection.classList.add('hidden');
    }
}

function validate_form(event){
    let req = document.getElementsByClassName('req');
    let form_incomplete = false;
    errlist.innerHTML ='';
    
    for(var i = 0; i< req.length; i++){
        let fiel = req[i];
        if(fiel.value === ''){
            form_incomplete = true;
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(fiel.id + ' is a required field'));
            errlist.appendChild(li);
        }
        
    }
    
     let check = document.getElementById('terms');
    if (!check.checked) {
        form_incomplete = true;
        let li = document.createElement("li");
        li.appendChild(document.createTextNode("You must agree to the terms and conditions before you can register"));
        errlist.appendChild(li);
    }
    
    if(regType.value === 'class_registration') {
        let reg = document.getElementById('class_reg');
        if(reg.value === ''){
            form_incomplete = true;
            let li = document.createElement("li");
            li.appendChild(document.createTextNode("You must register for a class"));
            errlist.appendChild(li);
        }
        
        if(regType.value === 'competitive_team') {
        let reg = document.getElementById('level');
        if(reg.value === ''){
            form_incomplete = true;
            let li = document.createElement("li");
            li.appendChild(document.createTextNode("You must register for a level"));
            errlist.appendChild(li);
        }
    }
    
    
}
    if(form_incomplete === true){
        event.preventDefault();
         document.getElementById('errors').classList.remove('hidden');
        document.getElementById('errors').classList.add('show');
    }
}
init();