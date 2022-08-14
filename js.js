
let arr=[
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]

]

display()
function display(){
  let out=document.querySelector('.out')
  out.innerHTML=""
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
            out.innerHTML+=arr[i][j]+" "
        }
        out.innerHTML+='<br>'
        
    }
}


function change(){
let changerow= +prompt('phần tử hàng')
let changecol= +prompt('phần tử cột')
   arr[changerow][changecol]='x';
   display()
}

