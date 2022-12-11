function getBotResponse(input){
    
    var here = "here";
    var room = here.link("room.html");
    var msg1 = "click " + room + " to know more about it.";
    
    var reserve = "reserve";
    var link1 = reserve.link("room.html");
    var msg2 = "you can " + link1 + " here";
    
    var location = "location";
    var link2 = location.link("https://www.google.com/maps/dir//Tunis+Marriott+Hotel,+Zohra+Faiza%D8%8C+Tunis+1082%E2%80%AD/@36.8474471,10.1308713,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12fd34c8eaaaaaab:0xfa27c5b0fe487173!2m2!1d10.2009113!2d36.8474676?hl=en-GB");
    var msg3 = "here is our " + link2;
    
    
    if((input == "hello")||(input == "hi")||(input == "hey"))
        return "welcome to our website, how may I help you?";
    
    else if (input.search("contact") >-1) 
        return "Do you want to call us or send E-mail ?";
    else if(input.search("call") > -1)
		return "this is our number call us : +216 31 220 022";
    else if(input.search("email") > -1) 
        return "adoptone.tunis@mr.com";
    else if (input.search("animal") > -1) 
        return"if you want to reserve an animal just send us screenshot about it  and send us your phone number to call you";
   
    else if ((input == "Okay thank you")||(input.search("bye")) > -1)
        return "Your welcome if you need anything else, i'm here, Goodbye";
    
    else return "Try asking something else! Or try contacting us";
}