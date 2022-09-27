function voirAirGoRun(){
    document.querySelector(".portfolio .item:nth-of-type(1)").style.transform = "scale(2)";
    document.querySelector(".portfolio .item:nth-of-type(1)").style.zIndex = 10;
    document.querySelector("#boutonVoir1").innerHTML = "Quitter";
    document.querySelector("#boutonVoir1").addEventListener("click", quitterAirGoRun);
}
function quitterAirGoRun(){
    document.querySelector(".portfolio .item:nth-of-type(1)").style.transform = "none";
    document.querySelector(".portfolio .item:nth-of-type(1)").style.zIndex = 1;
    document.querySelector("#boutonVoir1").innerHTML = "Voir";
    document.querySelector("#boutonVoir1").removeEventListener("click", quitterAirGoRun);
}
/*====================================================================================================*/
function voirContactForm(){
    document.querySelector(".portfolio .item:nth-of-type(2)").style.transform = "scale(2)";
    document.querySelector(".portfolio .item:nth-of-type(2)").style.zIndex = 10;
    document.querySelector(".portfolio .item:nth-of-type(2) .item-overlay").style.opacity = 0;
    document.querySelector("#croixContactForm").style.opacity = 1;
    document.querySelector("#croixContactForm").addEventListener("click", quitterContactForm);
}
function quitterContactForm(){
    document.querySelector(".portfolio .item:nth-of-type(2)").style.transform = "none";
    document.querySelector(".portfolio .item:nth-of-type(2)").style.zIndex = 1;
    document.querySelector(".portfolio .item:nth-of-type(2) .item-overlay").style.opacity = 1;
    document.querySelector("#croixContactForm").style.opacity = 0;
    document.querySelector("#croixContactForm").removeEventListener("click", quitterContactForm);
}
/*====================================================================================================*/

function voirBlogAPI(){
    document.querySelector(".portfolio .item:nth-of-type(3)").style.transform = "scale(2)";
    document.querySelector(".portfolio .item:nth-of-type(3)").style.zIndex = 10;
    document.querySelector(".portfolio .item:nth-of-type(3) .item-overlay").style.opacity = 0;
    document.querySelector("#croixBlogAPI").style.opacity = 1;
    document.querySelector("#croixBlogAPI").addEventListener("click", quitterBlogAPI);
}
function quitterBlogAPI(){
    document.querySelector(".portfolio .item:nth-of-type(3)").style.transform = "none";
    document.querySelector(".portfolio .item:nth-of-type(3)").style.zIndex = 1;
    document.querySelector(".portfolio .item:nth-of-type(3) .item-overlay").style.opacity = 1;
    document.querySelector("#croixBlogAPI").style.opacity = 0;
    document.querySelector("#croixBlogAPI").removeEventListener("click", quitterBlogAPI);
}
/*====================================================================================================*/

function voirMielConnect(){
    document.querySelector(".portfolio .item:nth-of-type(4)").style.transform = "scale(2)";
    document.querySelector(".portfolio .item:nth-of-type(4)").style.zIndex = 10;
    document.querySelector(".portfolio .item:nth-of-type(4) .item-overlay > div").style.opacity = 0;
    document.querySelector("#boutonVoir4").innerHTML = "Quitter";
    document.querySelector("#boutonVoir4").addEventListener("click", quitterMielConnect);
}
function quitterMielConnect(){
    document.querySelector(".portfolio .item:nth-of-type(4)").style.transform = "none";
    document.querySelector(".portfolio .item:nth-of-type(4)").style.zIndex = 1;
    document.querySelector(".portfolio .item:nth-of-type(4) .item-overlay > div").style.opacity = 1;
    document.querySelector("#boutonVoir4").innerHTML = "Voir";
    document.querySelector("#boutonVoir4").removeEventListener("click", quitterMielConnect);
}
/*====================================================================================================*/

function voirRCMortagne(){
    document.querySelector(".portfolio .item:nth-of-type(5)").style.transform = "scale(2)";
    document.querySelector(".portfolio .item:nth-of-type(5)").style.zIndex = 10;
    document.querySelector("#boutonVoir5").innerHTML = "Quitter";
    document.querySelector("#boutonVoir5").addEventListener("click", quitterRCMortagne);
}
function quitterRCMortagne(){
    document.querySelector(".portfolio .item:nth-of-type(5)").style.transform = "none";
    document.querySelector(".portfolio .item:nth-of-type(5)").style.zIndex = 1;
    document.querySelector("#boutonVoir5").innerHTML = "Voir";
    document.querySelector("#boutonVoir5").removeEventListener("click", quitterRCMortagne);
}
/*====================================================================================================*/

function voirPortfolio(){
    document.querySelector(".portfolio .item:nth-of-type(6)").style.transform = "scale(2)";
    document.querySelector(".portfolio .item:nth-of-type(6)").style.zIndex = 10;
    document.querySelector("#boutonVoir6").innerHTML = "Quitter";
    document.querySelector("#boutonVoir6").addEventListener("click", quitterPortfolio);
}
function quitterPortfolio(){
    document.querySelector(".portfolio .item:nth-of-type(6)").style.transform = "none";
    document.querySelector(".portfolio .item:nth-of-type(6)").style.zIndex = 1;
    document.querySelector("#boutonVoir6").innerHTML = "Voir";
    document.querySelector("#boutonVoir6").removeEventListener("click", quitterPortfolio);
}
/*==================================== OVERLAYS ===============================================================*/

//------------overlay4---------------------------------
document.getElementById("boutonVoir4").addEventListener("click", () => {
    document.getElementById("overlay4").style.display = "flex";
    document.getElementById("overlay4").style.flexDirection = "column";
    document.getElementById("overlay4").style.alignItems = "center";
});
document.getElementById("overlay4").addEventListener("click", () => {
    document.getElementById("overlay4").style.display = "none";
});