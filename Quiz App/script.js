let data=[

    { qs1:"how many days in a Week?",
       answer1:{
        a:"Five Days",
        b:"seven Days",
        c:"Four Days",
        d:"Three Days"
        }
        ,
        correct:"b:seven Days"

    },
    {
        qs2:"how many  Weeks in a Year?",
       answer2:{
        a:"46 weeks",
        b:"34 weeks",
        c:"51 weeks",
        d:"52 weeks"
        }
        ,
        correct:"d:52 weeks"
        

    },
    {   qs3:"what is the national bird of india ?",
    answer3:{
     a:"peacock",
     b:"cow",
     c:"parrot",
     d:"tiger"
     }
     ,
        correct:"a:peacock"

    },
    {   qs4:"what is the shape of egg?",
    answer4:{
     a:"rectangular",
     b:"circular",
     c:"oval",
     d:"square"
     }
     ,
        correct:"c:oval"

    }
];
let count=1;
let res=0;


let qs=document.getElementById("qs");
let next=document.getElementById("nextbtn");
let question=document.getElementById("question");
let option1=document.getElementById("opt1");
let option2=document.getElementById("opt2");
let option3=document.getElementById("opt3");
let option4=document.getElementById("opt4");
btns=document.getElementsByClassName('choice')
if(count===1){
    qs.innerText="qs 1:"
    question.innerText=data[0].qs1;
    option1.value="a:"+data[0].answer1.a;
    option2.value="b:"+data[0].answer1.b;
    option3.value="c:"+data[0].answer1.c;
    option4.value="d:"+data[0].answer1.d;
}

next.addEventListener('click',()=>{
   ++count;
   Array.from(btns).map(btn => {
    btn.disabled = false;
    btn.style.background='black'
   
  }); 
     
    
    if(count===2){
    qs.innerText="qs 2:"
    question.innerText=data[1].qs2;
    option1.value="a:"+data[1].answer2.a;
    option2.value="b:"+data[1].answer2.b;
    option3.value="c:"+data[1].answer2.c;
    option4.value="d:"+data[1].answer2.d;
   }
   if(count===3){
    qs.innerText="qs 3:"
    question.innerText=data[2].qs3;
    option1.value="a:"+data[2].answer3.a;
    option2.value="b:"+data[2].answer3.b;
    option3.value="c:"+data[2].answer3.c;
    option4.value="d:"+data[2].answer3.d;
   }
   if(count===4){
    qs.innerText="qs 4:"
    question.innerText=data[3].qs4;
    option1.value="a:"+data[3].answer4.a;
    option2.value="b:"+data[3].answer4.b;
    option3.value="c:"+data[3].answer4.c;
    option4.value="d:"+data[3].answer4.d;
    
   
   }
   if(count===5){
    next.innerText='Play Again'
    question.style.display='none';
   qs.innerText="You have sc0red "+res+" out of 4 ";
   document.getElementById('container').style.height='0vh' ;
   document.getElementById('kuchvi').style.height='20vh' ;
   document.getElementById('qs').style.textAlign='center' ;
   document.getElementById('nextbtn').style.marginLeft='35%' ;
     }
     if(count===6){
        count=1;
        res=0;
        next.innerText='next'
        question.style.display='block';
       document.getElementById('container').style.height='30vh' ;
       qs.innerText="qs 1:"
    question.innerText=data[0].qs1;
    option1.value="a:"+data[0].answer1.a;
    option2.value="b:"+data[0].answer1.b;
    option3.value="c:"+data[0].answer1.c;
    option4.value="d:"+data[0].answer1.d;
    document.getElementById('kuchvi').style.height='60vh' ;
    document.getElementById('nextbtn').style.marginLeft='43%' ;
         }

})


Array.from(btns).map(btn=>
{btn.addEventListener('click',(e)=>{
btn.style.background= e.target.value===data[count-1].correct?'green':'red';
e.target.value===data[count-1].correct?++res:res;

Array.from(btns).map(btn => {
    btn.disabled = true;
  });    
    
})

}
);
