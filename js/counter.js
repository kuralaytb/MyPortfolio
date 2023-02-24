let items=document.querySelectorAll('.counter')
items.forEach(item=>{
     item.innerHTML=0
     let endValue=item.getAttribute('data-count')
     let increment=endValue/500
     function changeNumber(){
        let value=+item.innerHTML
        if (value<endValue){
            value+=Math.round(increment)
            item.innerHTML=value
            setTimeout(changeNumber, 1)
        } else{
           item.innerHTML=endValue
        }
     }
     changeNumber()
})