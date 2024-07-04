const rotate = (degree)=>{
    for(let i = 1 ;i <= 5 ;i++){
        let degree1 = degree+ 72*i;
        let id = "r" + i.toString();
        degree1 = (degree1).toString();
        console.log(degree1);
        document.getElementById(id).style.rotate = (degree1+"deg");
        document.getElementById((id+'p')).style.rotate = ("-"+degree1+"deg");
    }
    flip(degree/72 -1);
}
let rotation = 0 ;
const data  = ["ONE" , "TWO" , "THREE" ,"FOUR" ,"FIVE" ]
const main_card = document.getElementsByClassName("main-pentagon");
const problem = document.getElementById("problem")
let flip = (index)=>{
    rotation+= 1 ;
    if(rotation%2 ==0)
        main_card[0].style.transform  = "rotateY(360deg)";
    else{
        main_card[0].style.transform  = "rotateY(0deg)";
    }
    problem.innerText = data[index];
}
