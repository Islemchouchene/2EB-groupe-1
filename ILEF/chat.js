var coll = document.getElementsByClassName("bar");

for( let i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        
        let content = this.nextElementSibling;
        
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        }
        else{
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


function getTime(){
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    
    if(hours < 10){
        hours = "0" + hours;
    }
    
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    
    let time = hours + ":" + minutes;
    return time;
}


function firstMessage(){
    
    let firstmsg = "How can I help?";
    document.getElementById("firstText").innerHTML = '<p class="chatbotText"><span>' + firstmsg + '</span></p>';
    
    let time = getTime();
    
    $("#chatTime").append(time);
    document.getElementById("userInput").scrollIntoView(false);
    
}

firstMessage();

function getChatResponse(userText){
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="chatbotText"><span>'+ botResponse + '</span></p>'
    $("#chatBox").append(botHtml);
    
    document.getElementById("chat-bottom").scrollIntoView(true);

}
function getResponse(){
    let userText = $("#textInput").val();
    
    if(userText == ""){
        alert("please enter a message and press enter!");
    }
    
    let userHtml = '<p class="userInput"><span>' + userText + '</span></p>';
    
    $("#textInput").val("");
    $("#chatBox").append(userHtml);
    document.getElementById("chat-bottom").scrollIntoView(true);
    
    getChatResponse(userText);
    
    setTimeout(() =>{
        getBotResponse(userText);
    }, 1500);
}

$("#textInput").keypress(function(e){
       if(e.which == 13){
       getResponse();
       }
});