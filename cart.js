let items=["t-shirt","chemise","pull","watch"];
let images=["/images (3).jfif","/images (4).jfif","/images (5).jfif","/images (6).jfif"];
let price=[5,3,5,7];
for(let i=0;i<price.length;i++)
{const produits=document.getElementById("produit");
let firstDiv = document.createElement("div");
firstDiv.setAttribute("id",`diva ${i}`);
produits.appendChild(firstDiv);
let secondDiv=document.createElement("div");
firstDiv.appendChild(secondDiv);
secondDiv.setAttribute("class","deux");
let btt=document.createElement("button");
btt.setAttribute("class","btt");
btt.innerHTML="*";
btt.setAttribute("id",`btt ${i}`);
secondDiv.appendChild(btt);
let im=document.createElement("img");
im.setAttribute("src",images[i]);
secondDiv.appendChild(im);
let pi= document.createElement("p");
pi.innerHTML="<span >♡</span> "+items[i];

firstDiv.appendChild(pi);
let thirdDiv=document.createElement("div");
thirdDiv.setAttribute("class","to");
firstDiv.appendChild(thirdDiv);
let pp=document.createElement("p");
pp.innerHTML=price[i];
thirdDiv.appendChild(pp);
let addi=document.createElement("button");
addi.innerHTML="+";
addi.setAttribute("className","addition");
addi.setAttribute("id",`addition  ${i}`);
thirdDiv.appendChild(addi);
let par=document.createElement("p");
par.setAttribute("className","num");
par.setAttribute("id",`num ${i}`);
par.innerHTML="0";
thirdDiv.appendChild(par);
let sous=document.createElement("button");
sous.innerHTML="-";
sous.setAttribute("className","soustraction");
sous.setAttribute("id",`soustraction  ${i}`);
thirdDiv.appendChild(sous);
}
for(let i=0;i<4;i++){
    let s=document.getElementsByTagName('span')
    s[i].setAttribute("id",`heart ${i}`)
}
for(let i=0;i<4;i++){
    var heart = document.getElementById(`heart ${i}`);
    heart.addEventListener("click",function(){Chang(i)} );
  
}
function Chang(i){
        let h= document.getElementById(`heart ${i}`);
        if(h.textContent=="♡")
        h.textContent="❤️"
        else
        h.textContent="♡" 
    }

for(let i=0;i<4;i++){
    var ad = document.getElementById(`addition  ${i}`);
   ad.addEventListener("click", function(){adding(i) ; addtotal() ; addprix(i)});
}
function addprix(i){
    let pri=document.getElementById("pric");
    pri.innerHTML= Number(pri.textContent) +price[i];
}
function addtotal(){
    var total=document.getElementById("ntotal");
    total.innerHTML=Number(total.textContent)+1;

}
function adding(i){
    let e=document.getElementById(`num ${i}`)
    e.innerHTML = Number(e.textContent)+1}

    // for(let i=0;i<4;i++){
    //     let j=0;
    //     var ad = document.getElementById(`soustraction  ${i}`);
    //    ad.addEventListener("click", function(){soustracting(i);soustotal(i);sousprix(i)});
    // }
    // function soustracting(i){
    //     let e=document.getElementById(`num ${i}`)
        
    //     if(Number(e.textContent)>0){
    //     e.innerHTML = Number(e.textContent)-1}
       
    // }

    // function soustotal(i){
    //     var total=document.getElementById("ntotal");
    //     let e=document.getElementById(`num ${i}`)
    //     console.log(e.textContent)
    //     if(Number(e.textContent)>0)
    //     {total.innerHTML=Number(total.textContent)-1
    //      j=0;}
    //     // else{
    //     //     if(Number(e.textContent)==0 && j==0)
    //     //     {   console.log(e.textContent)
    //     //          j++;
    //     //         total.innerHTML=Number(total.textContent)-1;}
    //     // }
    //     console.log(j)
        
      
    
    // }


    //     function sousprix(i){
    //         let pri=document.getElementById("pric");
    //         let e=document.getElementById(`num ${i}`)
    //         if(Number(e.textContent)>0 )
    //         {  pri.innerHTML= Number(pri.textContent)-price[i]};
        
    //     }

        for(let i=0;i<4;i++)
        {
            let del=document.getElementById(`btt ${i}`);
          console.log(del)
             let diva=document.getElementById(`diva ${i}`)
            del.addEventListener("click", function(){
                diva.remove();
             });
        }

// const myP =document.getElementsByClassName('num')[0];
// for(let i=0;i<myP.length;i++){
//     myP[i].setAttribute("id",`num${i+1}`);
//     console.log(myP[i]);
// }











    // for(let i=0;i<4;i++){
    //     let j=0;
    //     var ad = document.getElementById(`soustraction  ${i}`);
    //    ad.addEventListener("click", function(){soustotal(i,soustracting);sousprix(i)});
    // }
    // function soustracting(i){
    //     let e=document.getElementById(`num ${i}`)
        
    //     if(Number(e.textContent)>0){
    //     e.innerHTML = Number(e.textContent)-1}
       
    // }

    // function soustotal(i){
    //     var total=document.getElementById("ntotal");
    //     let e=document.getElementById(`num ${i}`)
    //     console.log(e.textContent)
    //     if(Number(e.textContent)>0)
    //     {total.innerHTML=Number(total.textContent)-1
    //      j=0;}
    //      soustracting(i)
    //     // else{
    //     //     if(Number(e.textContent)==0 && j==0)
    //     //     {   console.log(e.textContent)
    //     //          j++;
    //     //         total.innerHTML=Number(total.textContent)-1;}
    //     // }
    //     console.log(j)
        
      
    
    // }


    //     function sousprix(i){
    //         let pri=document.getElementById("pric");
    //         let e=document.getElementById(`num ${i}`)
    //         if(Number(e.textContent)>0 )
    //         {  pri.innerHTML= Number(pri.textContent)-price[i]};
        
    //     }
































    for(let i=0;i<4;i++){
        let j=0;
        var ad = document.getElementById(`soustraction  ${i}`);
       ad.addEventListener("click", function(){soustotal(i)});
    }
    function soustracting(i){
        let e=document.getElementById(`num ${i}`)
        
        if(Number(e.textContent)>0){
        e.innerHTML = Number(e.textContent)-1}
       
    }

    function soustotal(i){
        var total=document.getElementById("ntotal");
        let e=document.getElementById(`num ${i}`)
        console.log(e.textContent)
        if(Number(e.textContent)>0)
        {total.innerHTML=Number(total.textContent)-1
         j=0;}
        sousprix(i)
        // else{
        //     if(Number(e.textContent)==0 && j==0)
        //     {   console.log(e.textContent)
        //          j++;
        //         total.innerHTML=Number(total.textContent)-1;}
        // }
        console.log(j)
        
      
    
    }


        function sousprix(i){
            let pri=document.getElementById("pric");
            let e=document.getElementById(`num ${i}`)
            if(Number(e.textContent)>0 )
            {  pri.innerHTML= Number(pri.textContent)-price[i]};
            soustracting(i)
        
        }