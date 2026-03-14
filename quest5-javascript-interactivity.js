const form=document.querySelector(".quest");
form.addEventListener('submit',function(e){
    e.preventDefault();
    let score=0;
    const answers=document.querySelectorAll('input[type="radio"] :checked');
    answers.forEach((answer)=> {
        if(answer.value==="correct"){
            score++;
        }
        
    });
    alert("your score is" +score +"/6");
});