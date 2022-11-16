window.onload=function(){
  show(0);
}
let questions = [
   {
     id: 1,
     question: "What is the full form of RAM ?",
     answer: "Random Access Memory",
     options: [
       "Random Access Memory",
       "Randomely Access Memory",
       "Run Aceapt Memory",
       "None of these"
     ]
   },
   {
     id: 2,
     question: "What is the full form of CPU?",
     answer: "Central Processing Unit",
     options: [
       "Central Program Unit",
       "Central Processing Unit",
       "Central Preload Unit",
       "None of these"
     ]
   },
   {
     id: 3,
     question: "What is the full form of E-mail",
     answer: "Electronic Mail",
     options: [
       "Electronic Mail",
       "Electric Mail",
       "Engine Mail",
       "None of these"
     ]
   }
 ];
function submitform(e)
{
   e.preventDefault();
   let name=document.f1.name.value;
   sessionStorage.setItem("name",name);
   location.href="info.html";   
}
let question_count=0;
let points=0;
let rightans=0;
let wrongans=0;

function next()
{
  let userans=document.querySelector("li.opt.active").innerHTML;
  // for right and wrong answers---start
  function rightAnswer()
  {
    if(userans==questions[question_count].answer)
    {
      rightans=rightans+1;
      console.log(rightans);
      sessionStorage.setItem('rightans',rightans);
    }
    else
    {
      wrongans=wrongans+1;
      console.log(wrongans);
      sessionStorage.setItem('wrongans',wrongans);
    }
  }
  rightAnswer();
   // for right and wrong answers---end
  if(userans==questions[question_count].answer)
  {
    points=points+2;
    document.getElementById("po").innerHTML=points;
    sessionStorage.setItem("points",points);  
  }
  
  if(question_count==questions.length-1)
  {
    sessionStorage.setItem("mytime",`${minutes} min and ${seconds} sec`);
    location.href="result.html";
    return;
  }
  
  question_count++;
  show(question_count); 
  
}

function show(count)
{
  let question=document.getElementById("question");
  //question.innerHTML="<h3>"+questions[count].question+"</h3>";
  question.innerHTML=`
  <h3>${questions[count].question}</h3>
  `;
  let opt=document.getElementById("options");
  opt.innerHTML=`
            <div class="options" id="options">
                <ul>
                    <li class="opt">${questions[count].options[0]}</li>
                    <li class="opt">${questions[count].options[1]}</li>
                    <li class="opt">${questions[count].options[2]}</li>
                    <li class="opt">${questions[count].options[3]}</li>
                </ul>
            </div>
  `;
  toggleActive(); 
}
function toggleActive()
{
  let opt=document.querySelectorAll("li.opt");
  for(let i=0;i<opt.length;i++)
  {
    opt[i].onclick=function(){
      for(let j=0;j<opt.length;j++){
         if(opt[j].classList.contains("active"))
         {
          opt[j].classList.remove("active");
         }
      }
      opt[i].classList.add("active");
    }
  } 

}

