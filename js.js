let darkmode = document.getElementById("darkmode");
let cssdark = document.getElementById("cssdark");
let iconmode = document.getElementById("icon-mode")
let linkedin = document.querySelector("#linkedin");
let mailLink = document.getElementById("mail-link");
let modal=document.getElementById("modal");
let idiom = localStorage.getItem("idiom");
let curriculum= document.getElementById("curriculum");
modal.style.display="none";

//ME
let me1=document.getElementById("s1-p1");
let me2=document.getElementById("s1-p2");


//HOBBIE
let hobbie=document.getElementById("s6-t1");


//WEB

let web=document.getElementById("s7-t1");


//CEU

let ceu=document.getElementById("s10-t1");

//ENGLISH

let english=document.getElementById("s11-t1");

if (localStorage.getItem("idiom") === null) {
    localStorage.setItem("idiom", "");
}

if(idiom!="ES" && idiom!="EN"){
    modal.style.display="";
    document.body.style.overflow = 'hidden';
    let container = document.createElement("div");
    let container2= document.createElement("div");
    let container3= document.createElement("div");
    container.id="case1";
    container2.id="case2";
    container3.id="case3";
    let text=document.createElement("p");
    let ES= document.createElement("button");
    ES.textContent="Español";
    ES.id="ES";
    let EN= document.createElement("button");
    ES.id="EN";
    EN.textContent="English";
    text.textContent="Seleccione un idioma";
    container3.appendChild(text);
    container2.appendChild(ES);
    container2.appendChild(EN);
    container.appendChild(container3);
    container.appendChild(container2);
    modal.appendChild(container);

    ES.addEventListener("click",()=>{
        localStorage.setItem("idiom","ES");
        document.body.style.overflow = 'auto';
        modal.remove();
    })

    EN.addEventListener("click",()=>{
        localStorage.setItem("idiom","EN");
        document.body.style.overflow = 'auto';
        modal.remove();
        location.reload();
    })
}

if(localStorage.getItem("idiom") === "EN"){
    me1.textContent="Hi! I'm Tomás Di Martino";
    me2.textContent="Frontend developer with knowledge in HTML, CSS, Javascript, and Angular. I love staying up-to-date with the latest technologies, and that's why I'm always in continuous learning";
    hobbie.textContent="Computer science has always been my passion. I've been tinkering with and assembling computers since I was 13 years old.";
    ceu.textContent="DEGREE: MARKETING";
    web.textContent="WEB APPLICATION DEVELOPMENT";
    english.textContent="English: B2";
}

darkmode.addEventListener("click",()=>{
    let currentmode = cssdark.getAttribute("href");

    if(currentmode.includes("lightmode.css")){
        cssdark.href="styles.css"
        iconmode.src="pictures/light.png"
    }else{
        cssdark.href="lightmode.css"
        iconmode.src="pictures/moon.png"   
    }
})

linkedin.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/tomasdmb/", "_blank");
});

curriculum.addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1j-6q1Qa02wbLzto-RfPVbgh7VpKpkwHR/view?usp=sharing", "_blank");
});

mailLink.addEventListener("click", (event) => {
    event.preventDefault(); 
    const direccionCorreo = "tomasdimartinobuduan@gmail.com";
    const asuntoCorreo = "Consulta";
    const mailtoLink = `mailto:${direccionCorreo}?subject=${encodeURIComponent(asuntoCorreo)}`;
    window.open(mailtoLink, "_blank");
});