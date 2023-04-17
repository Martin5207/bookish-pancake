/* https://teachablemachine.withgoogle.com/models/N0ngRAu7y/ */
function startcheking(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classfire=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/N0ngRAu7y/model.json",openfire);
}
function openfire(){
classfire.classify(gotruzlt);
}
function gotruzlt(error,results){
    console.log("gotruzlt");
}
function gotruzlt(error,results){
    if (error){
        console.error(error)
    
    }
    console.log(results);
    document.getElementById("rezult_lable").innerHTML=results[0].label;
    document.getElementById("rezult_power").innerHTML=(results[0].confidence*100).toFixed(2)+"!";
    randomnumberr=Math.floor(Math.random()*255)+1 ;
    randomnumberg=Math.floor(Math.random()*255)+1 ;
    randomnumberb=Math.floor(Math.random()*255)+1 ;
    document.getElementById("rezult_lable").style.color="rgb("+randomnumberr+","+randomnumberb+","+randomnumberg+")";document.getElementById("rezult_power").style.color="rgb("+randomnumberr+","+randomnumberb+","+randomnumberg+")";
    img1=document.getElementById("a1");
    img2=document.getElementById("a2");
    img3=document.getElementById("a3");
    img4=document.getElementById("a4");
    
    
    
    if (results[0].label=="cat") {
        img1.src="cat.gif"
        
       
    
    }
    else
    if (results[0].label=="dog") {
        img1.src="dog.gif"
      
    }
    else
    if (results[0].label=="cow") {
        img1.src="cow.gif"
        
    }else{
        img1.src="EARS ON ME.gif"
        
    
    }
    }
    