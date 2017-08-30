//Run JQuery

$(document).ready(function() {
  var url;
  var online=[];
  var offline=[];
  var all=[];
  var usernames = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas"
  ];

  var dict = {
    OgamingSC2:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-300x300.jpeg",
    ESL_SC2:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
    cretetion:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/cretetion-profile_image-12bae34d9765f222-300x300.jpeg",
    storbeck: "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
    habathcx:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/habathcx-profile_image-d75385dbe4f42a66-300x300.jpeg",
    freecodecamp:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
    noobs2ninjas:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/noobs2ninjas-profile_image-34707f847a73d934-300x300.png",
    RobotCaleb:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/robotcaleb-profile_image-9422645f2f0f093c-300x300.png"
  };
  //for each does not place them in order
  usernames.forEach(function(name) {
    //url='https://wind-bow.gomix.me/twitch-api/streams/'+ name+'?callback=?';
    function makeUrl(type,k) { //if seperate function for streams and channels, will be out fo order
      return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
      
    }

    var status;
    $.getJSON(makeUrl("streams",name), function(data) {
      //see Status
      //console.log(name);
    
      
      if (data.stream === null) {
        status="offline";
      } 
      else{
        status="online";
      }

   
    });//JSON
    
    
   $.getJSON(makeUrl("channels",name), function(data){
     var tvLink = "https://www.twitch.tv/" + name;
             
     if(status=="offline"){
       var b="<div class='row f offline black'>" +
            "<div class='col-sm-4'>" +
            '<img src="' +
            dict[name] +
            '" height="70%" width="30%" class=" border">' +
            "</div>" +
            "<div class='col-sm-4'>" +
            '<a href="' +
            tvLink +
            '"target="_blank">' +
            name +
            "</a>" +
            "</div>" +
            "<div class='col-sm-4'>" +
            "offline" +
            "</div></div>";
        all.push(b);
       offline.push(b);
      
       $("#followerId").append(b);
        
     } 
         else if (status="online"){
           //console.log(data.status);
        
         var b= "<div class='row f online black'>" +
            "<div class='col-sm-4'>" +
            '<img src="' +
            dict[name] +
            '"height="60%" width="30% " class=" border">' +
            "</div>" +
            "<div class='col-sm-4'>" +
            '<a href="' +
            tvLink +
            '"target="_blank">' +
            name +
            "</a>" +
            "</div>" +
            "<div class='col-sm-4'>" + "online" + "<br>" + "<h6><small>" +
            data.status + "</small></h6>" +
            "</div></div>";
           all.push(b);
           online.push(b);
           
           $("#followerId").append(b);
        
        //.html just subs, but append actually keeps
      }
         });
    
    });//for each
  
  $("#all").click(function(){
    $("#followerId").html(all);
  });
  
  $("#online").click(function(){
    $("#followerId").html(online);
  });
  
  $("#Offline").click(function(){
    $("#followerId").html(offline); //works!
  });
  
  
}); //document.readyfunction

/* 
Findings: need get twitch api to look at the channels, tag and post work for some
-although not live, sometimes say online for most recent videos until cannot play further
    
    */