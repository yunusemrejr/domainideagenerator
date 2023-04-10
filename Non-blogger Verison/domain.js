//delete under maintanence text from section
const section = document.getElementById('carousel_7607');
const xpath4p = "//p[text()='under maintenance. -yunus']";
const maintenanceTxt = document.getElementById('pmaintanence');
maintenanceTxt.innerText = "";


//create the container for the tool
let theDiv=document.createElement('div');
theDiv.setAttribute('id','theToolDiv');
section.append(theDiv);
theDiv=document.getElementById('theToolDiv');
theDiv.style="border:1px solid gray;width:60%;border-radius:5px;text-align:center;margin:auto;padding:10px;";

//create inputbox label
let inputBoxForIdeaSeedLabel=document.createElement('label');
inputBoxForIdeaSeedLabel.setAttribute('for','ideaSeedInput');
inputBoxForIdeaSeedLabel.setAttribute('id','inputBoxForIdeaSeedLabel');
theDiv.appendChild(inputBoxForIdeaSeedLabel);
inputBoxForIdeaSeedLabel=document.getElementById('inputBoxForIdeaSeedLabel');
inputBoxForIdeaSeedLabel.innerText="Your KW/Seed: ";

//create inputbox
let inputBoxForIdeaSeed=document.createElement('input');
inputBoxForIdeaSeed.setAttribute('id','ideaSeedInput');
inputBoxForIdeaSeed.setAttribute('name','ideaSeedInput');
theDiv.appendChild(inputBoxForIdeaSeed);
inputBoxForIdeaSeed=document.getElementById('ideaSeedInput');
inputBoxForIdeaSeed.setAttribute('type','text');
inputBoxForIdeaSeed.style.paddingBottom="20px";
 //create Action btn
let actionBTN=document.createElement('button');
actionBTN.setAttribute('id','btn');
theDiv.appendChild(actionBTN);
actionBTN=document.getElementById('btn');
actionBTN.innerText="Generate";
actionBTN.style="padding:5px;font-family:arial;font-size:20px;";
 actionBTN.setAttribute('onclick','generator()');

//fix element alignments
theDiv.style.display="flex";
theDiv.style.textAlign="center";
theDiv.style.justifyContent="center";
inputBoxForIdeaSeedLabel.paddingTop="10px";

//getJSON file
 async function getJSON(){
    const response=await fetch('https://www.yunusemrevurgun.com/tools/tool/Domain-Idea-Generator/words.json');
    
    const data=await response.json();
    
    
    const words=data.words;
    
    
   wordArray=words;
console.log(wordArray);
}



getJSON();

//generator
const generator = (x) => {
    
    numSeed=Math.floor(Math.random()*3);
     TLD=['.org','.com','.net'];
    x = document.getElementById('ideaSeedInput').value;
    x=x.substring(0,15);
    reg=/ /g;
    x=x.replace(reg,"-");
      numSeedBig=Math.floor(Math.random()*wordArray.length);
    x=x+wordArray[numSeedBig];
    x=x+TLD[numSeed];
    alert(x);
    
}