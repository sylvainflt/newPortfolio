/*==================================== OVERLAYS ===============================================================*/

//------------overlay1---------------------------------
document.getElementById("boutonVoir1").addEventListener("click", () => {
    document.getElementById("overlay1").classList.add("derouleSite");
    document.querySelector("#croixAirGoRun").style.opacity = 1;
});
document.getElementById("croixAirGoRun").addEventListener("click", () => {
    document.getElementById("overlay1").style.display = "none";
    document.getElementById("overlay1").classList.remove("derouleSite");    
});
//------------overlay2---------------------------------
document.getElementById("boutonVoir2").addEventListener("click", () => {
    document.getElementById("overlay2").classList.add("derouleSite");
    document.querySelector("#croixContactPage").style.opacity = 1;
});
document.getElementById("croixContactPage").addEventListener("click", () => {
    document.getElementById("overlay2").style.display = "none";
    document.getElementById("overlay2").classList.remove("derouleSite");    
});

//------------overlay3---------------------------------
document.getElementById("boutonVoir3").addEventListener("click", () => {
    document.getElementById("overlay3").classList.add("derouleSite");
    document.querySelector("#croixBlogAPI").style.opacity = 1;
});
document.getElementById("croixBlogAPI").addEventListener("click", () => {
    document.getElementById("overlay3").style.display = "none";
    document.getElementById("overlay3").classList.remove("derouleSite");    
});

//------------overlay4---------------------------------
document.getElementById("bouton4Lire").addEventListener("click", () => {
    /*document.getElementById("overlay4").classList.add("derouleSite");
    document.querySelector("#croixMielConnect").style.opacity = 1;*/
    document.getElementById("MCvideo").play();
});
document.getElementById("bouton4Pause").addEventListener("click", () => {    
    document.getElementById("MCvideo").pause();
});
document.getElementById("bouton4Agrandir").addEventListener("click", () => {
    document.getElementById("MCvideo").requestFullscreen();
});
document.getElementById("croixMielConnect").addEventListener("click", () => {
    document.getElementById("overlay4").style.display = "none";
    document.getElementById("overlay4").classList.remove("derouleSite");    
});

//------------overlay5---------------------------------
document.getElementById("boutonVoir5").addEventListener("click", () => {
    document.getElementById("overlay5").classList.add("derouleSite");
    document.querySelector("#croixRCMortagne").style.opacity = 1;
});
document.getElementById("croixRCMortagne").addEventListener("click", () => {
    document.getElementById("overlay5").style.display = "none";
    document.getElementById("overlay5").classList.remove("derouleSite");    
});