const boxes = document.getElementsByClassName('box'); 

window.addEventListener('scroll' , ()=>{
    var windows_height = (window.scrollY + window.innerHeight)/5*2;
    // console.log(windows_height);
    for(var i = 0 ;i <  boxes.length ;i++){
        var box_top = boxes[i].getBoundingClientRect().top ;
        if(box_top < windows_height){
            boxes[i].classList.add('show');
        }
        else{
            boxes[i].classList.remove('show');
        }
        console.log(box_top);
    }
});



