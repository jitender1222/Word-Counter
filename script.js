const text=document.getElementById('text');
const btn=document.getElementById('btn');
const outer=document.querySelector('outer-text');
const inText=document.getElementById('inside-text');

btn.addEventListener('click',()=>{
    if(text.value.length==0){
        alert("First enter your text");
    }
    else{
        let count=characterCount(text.value);
        inText.innerHTML=count;
    }
})

function characterCount(text){

    let totalCharacterCount=0;

    for(let i=0;i<text.length;i++){
        if(text[i]==' '){
            console.log("indei");
            totalCharacterCount--;
        }
        else if(text.charCodeAt(i)>=48 && text.charCodeAt(i)<=64){
            totalCharacterCount--;
        }
        totalCharacterCount++;
    }
    return totalCharacterCount;
}