let gseq=[];
let useq=[];
let started=false;
let lvl=0;
let p=document.querySelector('p');
let btns=["one","two","three","four"];
document.addEventListener('keypress',function()
{
    if(started==false)
        {
            started=true;
            levelup();
        }
        
});
function levelup()
{
    useq=[];
    lvl++;
     p.innerText=`Level${lvl}`;
    let num=Math.floor(Math.random()*4);
    let btnclass=btns[num];
    gseq.push(btnclass);
    console.log(gseq);
    let btn=document.querySelector(`.${btnclass}`);
    btnflash(btn);
}
function btnflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200)
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
    {
        btn.addEventListener("click",function()
    {
        let clk=this;
        btnflash(clk);
        let id=clk.getAttribute('id');
        useq.push(id);
        console.log(useq);
        check(useq.length-1);
    });
    }
    function check(i){
       
        if(useq[i]==gseq[i])
            {
                if(useq.length==gseq.length)
                setTimeout(levelup,1000);
            }
                else{
                    p.innerText="Game Over! Press any key to start";
                    document.querySelector("body").style.backgroundColor="red";
                    setTimeout(function(){
                        document.querySelector("body").style.backgroundColor="white";
                    },200);
                    reset();

                }
            
           
        
    }
    function reset()
    {
        gseq=[];
       useq=[];
       started=false;
       lvl=0;
    }
    