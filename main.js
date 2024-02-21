const essayIntroduceElenment = document.querySelector('#essayIntroduce');
const essayIntroduceTemplate = document.querySelector('#essayTemplate-intro');

const essayBody1Elenment = document.querySelector('#essayBody1');
const essayBody1Template = document.querySelector('#essayTemplate-body1');

const essayBody2Elenment = document.querySelector('#essayBody2');
const essayBody2Template = document.querySelector('#essayTemplate-body2');

const essayConclusionElenment = document.querySelector('#essayConclusion');
const essayConclusionTemplate = document.querySelector('#essayTemplate-conclusion');

function checkIsIntroCorrect (e) {
    const currentLength = e.target.value.length;
    const cutOriginTextFromCurrentLength = essayIntroduceTemplate.textContent.trim().slice(0, currentLength)

    const isCorrect = cutOriginTextFromCurrentLength === e.target.value;
    if(isCorrect === false) {
        essayIntroduceElenment.classList.add('border-danger')
    }
    else {  
        essayIntroduceElenment.classList.remove('border-danger');
    }
       
};
function checkIsBody1Correct (e) {
    const currentLength = e.target.value.length;
    const cutOriginTextFromCurrentLength = essayBody1Template.textContent.trim().slice(0, currentLength)

    const isCorrect = cutOriginTextFromCurrentLength === e.target.value;
    if(isCorrect === false) {
        essayBody1Elenment.classList.add('border-danger')
    }
    else {  
        essayBody1Elenment.classList.remove('border-danger');
    }
       
};
function checkIsBody2Correct (e) {
    const currentLength = e.target.value.length;
    const cutOriginTextFromCurrentLength = essayBody2Template.textContent.trim().slice(0, currentLength)

    const isCorrect = cutOriginTextFromCurrentLength === e.target.value;
    if(isCorrect === false) {
        essayBody2Elenment.classList.add('border-danger')
    }
    else {  
        essayBody2Elenment.classList.remove('border-danger');
    }
       
};
function checkIsConclusionCorrect (e) {
    const currentLength = e.target.value.length;
    const cutOriginTextFromCurrentLength = essayConclusionTemplate.textContent.trim().slice(0, currentLength)

    const isCorrect = cutOriginTextFromCurrentLength === e.target.value;
    if(isCorrect === false) {
        essayConclusionElenment.classList.add('border-danger')
    }
    else {  
        essayConclusionElenment.classList.remove('border-danger');
    }
       
};

essayIntroduceElenment.addEventListener('input', checkIsIntroCorrect);
essayBody1Elenment.addEventListener('input', checkIsBody1Correct);
essayBody2Elenment.addEventListener('input', checkIsBody2Correct);
essayConclusionElenment.addEventListener('input', checkIsConclusionCorrect);
