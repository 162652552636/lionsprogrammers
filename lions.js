function Meaning(){
    if(document.getElementById("check1").checked==true){
        document.getElementById("word1").style.display="inline"
        document.getElementById("word1").innerHTML="Renunciation of a belief or doctrine; Denial <br>Sentence : Monks practice abnegation of the material aspects of human life."
    }
    else if(document.getElementById("check1").checked==false){
        document.getElementById("word1").style.display="none"
    } 
    if(document.getElementById("check2").checked==true){
        document.getElementById("word2").style.display="inline"
        document.getElementById("word2").innerHTML="To enhance power, wealth, or status<br>Sentence : A generous grant, enabled the library to significantly aggrandize its collection of books on tape."
    }
    else if(document.getElementById("check2").checked==false){
        document.getElementById("word2").style.display="none"
    } 
    if(document.getElementById("check3").checked==true){
        document.getElementById("word3").style.display="inline"
        document.getElementById("word3").innerHTML="Devoid of intelligence<br>Sentence : Ignoring the avalanche warnings, the fatuous skiers continued on their course"
    }
    else if(document.getElementById("check3").checked==false){
        document.getElementById("word3").style.display="none"
    } 
    if(document.getElementById("check4").checked==true){
        document.getElementById("word4").style.display="inline"
        document.getElementById("word4").innerHTML="Uncalled for or unwarranted<br>Sentence : The film was criticized for its gratuitous violence."
    }
    else if(document.getElementById("check4").checked==false){
        document.getElementById("word4").style.display="none"
    } 
    if(document.getElementById("check5").checked==true){
        document.getElementById("word5").style.display="inline"
        document.getElementById("word5").innerHTML="Someone who criticizes or attacks cherished ideas and beliefs<br>Sentence : Notorious as an iconoclast, that music critic isn’t afraid to go after sacred cows."
    } 
    else if(document.getElementById("check5").checked==false){
        document.getElementById("word5").style.display="none"
    }  
    if(document.getElementById("check6").checked==true){
        document.getElementById("word6").style.display="inline"
        document.getElementById("word6").innerHTML="Renunciation of a belief or doctrine; Denial <br>Sentence : Monks practice abnegation of the material aspects of human life."
    }
    else if(document.getElementById("check6").checked==false){
        document.getElementById("word6").style.display="none"
    } 
    if(document.getElementById("check7").checked==true){
        document.getElementById("word7").style.display="inline"
        document.getElementById("word7").innerHTML="To enhance power, wealth, or status<br>Sentence : A generous grant, enabled the library to significantly aggrandize its collection of books on tape."
    }
    else if(document.getElementById("check7").checked==false){
        document.getElementById("word7").style.display="none"
    } 
    if(document.getElementById("check8").checked==true){
        document.getElementById("word8").style.display="inline"
        document.getElementById("word8").innerHTML="Devoid of intelligence<br>Sentence : Ignoring the avalanche warnings, the fatuous skiers continued on their course"
    }
    else if(document.getElementById("check8").checked==false){
        document.getElementById("word8").style.display="none"
    } 
    if(document.getElementById("check9").checked==true){
        document.getElementById("word9").style.display="inline"
        document.getElementById("word9").innerHTML="Uncalled for or unwarranted<br>Sentence : The film was criticized for its gratuitous violence."
    }
    else if(document.getElementById("check9").checked==false){
        document.getElementById("word9").style.display="none"
    } 
    if(document.getElementById("check10").checked==true){
        document.getElementById("word10").style.display="inline"
        document.getElementById("word10").innerHTML="Someone who criticizes or attacks cherished ideas and beliefs<br>Sentence : Notorious as an iconoclast, that music critic isn’t afraid to go after sacred cows."
    } 
    else if(document.getElementById("check10").checked==false){
        document.getElementById("word10").style.display="none"
    }  
}

username=["Sravan","Mofe","Mahir","Kevin"]
password=["Sravan2022","Mofe2022","Mahir2022","Kevin2022"] 

function Signup(){
    if(document.getElementById("password").value==""){
        alert("Please enter username and password")
    }
    else if(document.getElementById("password").value==document.getElementById("cpassword").value){
        alert("Account created proceed to sign in")
        window.location.href = 'signin.html'
        username.push(document.getElementById("username").value)
        password.push(document.getElementById("password").value)
    }
    else{
        alert("Password not same as Confirm password")
    }
}


function Signin(){
    var flag=false
    for(i=0;i<username.length;i++){
        if(username[i]==document.getElementById("iusername").value){
            flag=true
            if(password[i]==document.getElementById("ipassword").value){
                window.location.href = 'Home.html'
                flag=true
            }
            else{
                alert("Entered invalid login credentials or account does not exist")
            }
        }
    }
    if(flag==false){
        alert("Entered invalid login credentials or account does not exist")
    }
}

function Verbs(){
    if(document.getElementById("check1").checked==true){
        document.getElementById("word1").style.display="inline"
        document.getElementById("word1").innerHTML="The student achieved a high score on her SATs."
    }
    else if(document.getElementById("check1").checked==false){
        document.getElementById("word1").style.display="none"
    } 
    if(document.getElementById("check2").checked==true){
        document.getElementById("word2").style.display="inline"
        document.getElementById("word2").innerHTML="Make sure you bring dessert to Thanksgiving this year."
    }
    else if(document.getElementById("check2").checked==false){
        document.getElementById("word2").style.display="none"
    } 
    if(document.getElementById("check3").checked==true){
        document.getElementById("word3").style.display="inline"
        document.getElementById("word3").innerHTML="You have to coordinate the food, music, and guest list for the upcoming event."
    }
    else if(document.getElementById("check3").checked==false){
        document.getElementById("word3").style.display="none"
    } 
    if(document.getElementById("check4").checked==true){
        document.getElementById("word4").style.display="inline"
        document.getElementById("word4").innerHTML="You should really get that pain in your knee examined."
    }
    else if(document.getElementById("check4").checked==false){
        document.getElementById("word4").style.display="none"
    } 
    if(document.getElementById("check5").checked==true){
        document.getElementById("word5").style.display="inline"
        document.getElementById("word5").innerHTML="The story implied that the characters thought that their lives were unfair."
    } 
    else if(document.getElementById("check5").checked==false){
        document.getElementById("word5").style.display="none"
    }
}

function Synonyms(){
    if(document.getElementById("check1").checked==true){
        document.getElementById("word1").style.display="inline"
        document.getElementById("word1").innerHTML="Fortify"
    }
    else if(document.getElementById("check1").checked==false){
        document.getElementById("word1").style.display="none"
    } 
    if(document.getElementById("check2").checked==true){
        document.getElementById("word2").style.display="inline"
        document.getElementById("word2").innerHTML="Immoral"
    }
    else if(document.getElementById("check2").checked==false){
        document.getElementById("word2").style.display="none"
    } 
    if(document.getElementById("check3").checked==true){
        document.getElementById("word3").style.display="inline"
        document.getElementById("word3").innerHTML="Deception"
    }
    else if(document.getElementById("check3").checked==false){
        document.getElementById("word3").style.display="none"
    } 
    if(document.getElementById("check4").checked==true){
        document.getElementById("word4").style.display="inline"
        document.getElementById("word4").innerHTML="Tedious"
    }
    else if(document.getElementById("check4").checked==false){
        document.getElementById("word4").style.display="none"
    } 
    if(document.getElementById("check5").checked==true){
        document.getElementById("word5").style.display="inline"
        document.getElementById("word5").innerHTML="Ascertained"
    } 
    else if(document.getElementById("check5").checked==false){
        document.getElementById("word5").style.display="none"
    }
}

function Antonyms(){
    if(document.getElementById("check1").checked==true){
        document.getElementById("word1").style.display="inline"
        document.getElementById("word1").innerHTML="Detest"
    }
    else if(document.getElementById("check1").checked==false){
        document.getElementById("word1").style.display="none"
    } 
    if(document.getElementById("check2").checked==true){
        document.getElementById("word2").style.display="inline"
        document.getElementById("word2").innerHTML="Cowardice"
    }
    else if(document.getElementById("check2").checked==false){
        document.getElementById("word2").style.display="none"
    } 
    if(document.getElementById("check3").checked==true){
        document.getElementById("word3").style.display="inline"
        document.getElementById("word3").innerHTML="Straight"
    }
    else if(document.getElementById("check3").checked==false){
        document.getElementById("word3").style.display="none"
    } 
    if(document.getElementById("check4").checked==true){
        document.getElementById("word4").style.display="inline"
        document.getElementById("word4").innerHTML="Clumsy"
    }
    else if(document.getElementById("check4").checked==false){
        document.getElementById("word4").style.display="none"
    } 
    if(document.getElementById("check5").checked==true){
        document.getElementById("word5").style.display="inline"
        document.getElementById("word5").innerHTML="Waste"
    } 
    else if(document.getElementById("check5").checked==false){
        document.getElementById("word5").style.display="none"
    }
}

function User(){
    if(confirm("To log out click 'Ok' // cancel to stay")){
        window.location.href = 'lions.html'
    }
}