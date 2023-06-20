let input =document.querySelector(`input`)
let button =document.querySelector(`button`)
let demo =document.querySelector(`.demo`)
let input2=document.querySelector(`.input2`)
let input3=document.querySelector(`.input3`)


button.addEventListener(`click`,function(){
if(input.value>=18){
    if(input2.value>=2000){
      if(input3.value>=2){
        demo.innerHTML=`biye krte parba`
        demo.style.color=`DarkSlateBlue`
        this.style.color=`red`
      }else{
        demo.innerHTML=`tmr basa kom.basa kino`
        demo.style.color=`green`
        this.style.color=`blue`
      }
    }else{
        demo.innerHTML=`sallery kom`
        demo.style.color=`DarkSlateBlue`
        this.style.color=`red`
    }
    
}
else if(input.value==``){
    demo.innerHTML=`invalid`
}
else if(input2.value==``){
    demo.innerHTML=`invalid`
}
else if(input3.value==``){
    demo.innerHTML=`invalid`
}

else{
    demo.innerHTML=`boyos kom`
    demo.style.color=`green`
    this.style.color=`blue`
}
})



