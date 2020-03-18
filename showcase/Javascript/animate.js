
var user = document.getElementById("user");



gsap.from(user, {duration: 0.5,opacity: 0, scale: 0.3, ease: "back"});
gsap.from(logo, {duration: 0.5,opacity: 0, scale: 0.3, ease: "back"});
/*gsap.from(infodiv, {duration: 0.5,opacity: 0, scale: 0.3, ease: "back"});*/




gsap.from(card,  {duration: 1, delay: 0.5, opacity: 0, scale: 0.3, ease: "back",backgroundColor:"#4263f5",borderRadius: "10%", border: "3px solid white",stagger: 0.10});

document.getElementById("card").onclick = function() {
    if(document.getElementById("card").className == "open"){
        document.getElementById("card").className = "";
        gsap.to(card, {duration:1,x:0,backgroundColor:"#4263f5",borderRadius: "10%", border: "3px solid white",stagger: 0.05});
    } else {
        document.getElementById("card").className = "open";
        gsap.to(card, {duration:1,x:-300,backgroundColor:"#4263f5",borderRadius: "10%", border: "3px solid blue",stagger: 0.05});
    }
};

console.log(user);
console.log("yo");


