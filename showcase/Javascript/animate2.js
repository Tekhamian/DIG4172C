

gsap.from(logo, {duration: 0.5,opacity: 0, scale: 0.3, ease: "back"});
gsap.from(user, {duration: 0.5,opacity: 0, scale: 0.3, ease: "back"});



  window.onload = function() {
    var anchors = document.getElementsByClassName('close2');
    for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        anchor.onclick = function(event) {
            if(event.currentTarget.className == "open"){
                /*event.currentTarget.className.style = "hidden";*/
                gsap.to(event.currentTarget, {duration:1,x:0,backgroundColor:"#4263f5",borderRadius: "10%", border: "3px solid white",stagger: 0.05});
                var targetId = event.currentTarget.id;
                event.currentTarget.id;
                console.log(event.currentTarget.id);
                var regexId = /\d+/;
                var getIdNumber = parseInt(targetId.match(regexId));
                console.log(getIdNumber)
                var cardInfoAppear = document.getElementById("infodiv"+getIdNumber);
                console.log(cardInfoAppear);
                gsap.to(cardInfoAppear, {duration: 0.5,opacity: 0, delay: 0.125, scale: 0.1});
                event.currentTarget.className = "close2";


            } else if (event.currentTarget.className == "close2"){
                gsap.to(event.currentTarget, {duration:1,x:-300,backgroundColor:"#4263f5",borderRadius: "10%", border: "3px solid blue",stagger: 0.05});
                var targetId = event.currentTarget.id;
                console.log(event.currentTarget.id);
                var regexId = /\d+/;
                var getIdNumber = parseInt(targetId.match(regexId));
                console.log(getIdNumber)
                var cardInfoAppear = document.getElementById("infodiv"+getIdNumber);
                console.log(cardInfoAppear);
                gsap.to(cardInfoAppear, {duration: 0.5,opacity: 1, scale: 0.9, delay: 0.125});
                event.currentTarget.className = "open";
            }
        }
    }
}
