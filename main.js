// როცა სქროლს ოდნავ მაინც ჩამოვწევთ Y ღერძზე header-ის კლასი გახდეს "sticky"

window.addEventListener("scroll",function(){
    const header=document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0)
})

//როცა რესპონსივზე ბურგერს დავაკლიკებთ კლასი გახდეს "active"//

function toggleMenu(){
    const menuToggle=document.querySelector(".menuToggle");
    const navigation=document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active")
}
// function Passive(){
//     const navigation=document.querySelector(".navigation");
//     navigation.classList.toggle("passive")
// }