var _ul;
var press=0;
var starnum;
var picvalue=1000;
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


var id_match;
var timevalue;
var complete=0; 
var timer=new Timer();
function m ()
{

    var pics= ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor","fa fa-bolt","fa fa-cube",
    "fa fa-anchor","fa fa-leaf","fa fa-bicycle","fa fa-diamond","fa fa-bomb","fa fa-leaf","fa fa-bomb","fa fa-bolt","fa fa-bicycle","fa fa-paper-plane-o","fa fa-cube"];
    shuffle(pics);
    
var _div = document.getElementById('container');//اصلا الكونتينر موجوده انا بس هنادي عليها مش اكتر من الديزين 

 _ul = document.createElement('ul');//ul container;
_ul.setAttribute('id','deck');
_ul.setAttribute('class','deck');

_div.appendChild(_ul);

for(var i=0 ; i<16 ; i++)
{
    var element=pics[i];
    var index=i;
    setelement(element,index,pics);
}
function setelement(element,index,arr)
{
    var _li=document.createElement("li");
    _li.setAttribute('class','card');
    _li.setAttribute('id',index);
    var _i=document.createElement('i');//المفروض بيكون اسم الصوره وانا عايزاه اجيب اسم الصوره من مكانها علشان المكان بيتغير فتطلع كل مره صوره جديده
    _i.setAttribute('class',element);
    _li.appendChild(_i);
    _ul.appendChild(_li);
    var zero=document.getElementById(index);
    //document.getElementById("RootNode").onclick = function(){//do something}
    //اووو
    /*document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
    }); */


        zero.onclick = function()
        {
            
            
            if(zero.getAttribute("class")=="card")//لو الكلاس ده مقلوب مش معدول 
            {
                if(picvalue==1000)//لو انت اول واحد عليه ايفنت 
                {
                   timer.start();
                    timer.addEventListener('secondsUpdated', function (e) {
                     timevalue=timer.getTimeValues().toString();
                        
                         });
                    zero.setAttribute('class','card match');   
                    //خلي اسم الكلاس كه
                    picvalue=pics[index];//كده يبقي هم مش متشابهين يبقي القيمه بتاعتي حطها عنده  
                    id_match=zero.id;
                    press+=1;
                    document.getElementById("move").textContent=press;
                    if(press>=30)
                    {
                       
                        var element2 = document.getElementById("star2");
                        if(element2!=null)
                       {
                           element2.remove();
                       }
                    }
                    else if(press <15 && press>10)
                    {
                        var element = document.getElementById("star3");
                        if(element!=null)
                       {
                           element.remove();
                       }
                    }
                    else{}
                   
                }
                else if (picvalue!=pics[index])//ر 
                {
                    zero.setAttribute('class','card open show ');//خلي اسم الكلاس كده 
        
                    var el=document.getElementById(id_match);
                    zero.setAttribute('class','animated infinite tada card open show');
                    el.setAttribute('class','animated infinite tada card open show');
                   
                    setTimeout(function()
                    {
                        zero.setAttribute('class','card');
                        el.setAttribute('class','card');
                    },1000);
                    picvalue=pics[index];//كده يبقي هم مش متشابهين يبقي القيمه بتاعتي حطها عنده  
                    
                    id_match=zero.id;
                    picvalue=1000;
        
                    press+=1;
                    document.getElementById("move").textContent=press;
                    if(press>=30)
                    {
        
                        var element2 = document.getElementById("star2");
                       if(element2!=null)
                       {
                           element2.remove();
                       }
                    }
                    else if(press <15 && press>10)
                    {
                        var element = document.getElementById("star3");
                        if(element!=null)
                        {
                            element.remove();
                        }
                    }
                    else{}
                    
                }
                else
                {
                    
                    zero.setAttribute('class','card match');
                   complete+=1;//ود قيمه ان المتشابهين بقو 1ز 
                   if(complete==8)
                   {
                       timer.stop();
                    
                       //timevalue=timer.getTimeValues().toString();
                     
                       if (confirm("congratulation ->" + timevalue +" seconds  you spend in game "+" and your stars is"+starnum +" \n \n Do You want to play Again??!")) 
                        {
                        restartfunction();
                        } 
                    else{
                        alert('thank You');
                    }
                         }
                      
                        
                    picvalue=1000;
                    press+=1;
                    document.getElementById("move").textContent=press;
                    if(press>=30)
                    {
                        starnum=1;
                        var element2 = document.getElementById("star2");
                        
                        if(element2!=null)
                       {
                           element2.remove();
                       }
                    }
                    else if(press <15 && press>10)
                    {
                        starnum=2;
                        var element = document.getElementById("star3");
                        if(element!=null)
                       {
                           element.remove();
                       }
                    }
                    else{starnum=3;}
                }
            }

            
           
        }





}
}

m();

var start=document.getElementById("start");
start.addEventListener("click",restartfunction,false);
function restartfunction()
{
//timer.stop();//وقف الوقت وابدا تاني من جديد
/*timer.start();
timer.addEventListener('secondsUpdated', function (e) {
 timevalue=timer.getTimeValues().toString();
    
     });*/
    //لا متبداش من جديد نادي علي m وهيا هتبدا تاني من جديد جواها 
    //press=0;//عدد الحركات 
    var el=document.getElementById('deck');//مسح ال ul كلها 
    el.remove();

    timer.stop();
    timer.start();
    
// بس كدة
    
    
    
   // press=0;
    document.getElementById("move").textContent=0;
    picvalue=1000;//كده التايمر يبقي صفر علي طول مش استني لما يضغط ف يبقي صفر 
   
    //لما m بيتكريتو تاني ادي علي m بيتكريتو تاني 

    if(press>=30)//
    {
       var content=document.getElementById('stars');
        
        var star2return=document.createElement("li");
        star2return.setAttribute('class','fa fa-star');
        star2return.setAttribute('id','star2');
        content.appendChild(star2return);
        var star3return=document.createElement("li");
        star3return.setAttribute('class','fa fa-star');
        star3return.setAttribute('id','star3');
        content.appendChild(star3return);
       
        
    }
    else if(press <15 && press>10)
    {
        
        var content=document.getElementById('stars');
        var star3return = document.createElement("li");
        star3return.setAttribute('class','fa fa-star');
        star3return.setAttribute('id','star3');
        content.appendChild(star3return);
       
    }
    else{}
    press=0;
    complete=0; 
    m();
    //press=0;//حطيتها هنا من تحت علشان بعد م الفور لوبات اللي فوق يتنفذو صفرها لاني لو عملتها صفر ولاواحده هتتنفذ 
    //لازم امسح القديمه علشان الجديده تبقي مكانها لكن كده هيعمل واحده جديده تحتها 
}

