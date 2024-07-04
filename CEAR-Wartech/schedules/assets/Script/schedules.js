const boxes = document.getElementsByClassName('box'); 


const checkinwindow = ()=>{
    var windows_height = (window.scrollY + window.innerHeight)/5*4;

    
    // console.log(windows_height);
    for(var i = 0 ;i <  boxes.length ;i++){
        var box_top = boxes[i].getBoundingClientRect().top ;
        if(box_top < windows_height){
            boxes[i].classList.add('show');
            let classid  ="line"+ (boxes[i].classList[0]);
            // console.log(classid);
            document.getElementById(classid).classList.add('length');
            
        }
        else{
            let classid  ="line"+ (boxes[i].classList[0]);
            boxes[i].classList.remove('show');
            document.getElementById(classid).classList.remove('length');
        }

    }
}

checkinwindow();
window.addEventListener('scroll' , checkinwindow);
