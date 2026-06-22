const btns = document.querySelectorAll(".flip_chart");
const text = document.querySelectorAll(".text");
const jahre = document.querySelectorAll(".year");
const seiten = document.querySelectorAll(".seite");
const icons = document.querySelectorAll(".menu");
const body = document.querySelector("#body");
const titel = document.querySelector("#titel");
const videos = document.querySelectorAll(".video");
const lang = document.querySelectorAll(".lang");
const alert = document.querySelector("alert");
const alert_text = document.getElementById("alert_text");

body.addEventListener("scroll", id_check());

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => hide_cards(i));
});

icons.forEach((icn, i) => {
    icn.addEventListener("click", () => to_id(i));
});

function show_alert(contact){
    time = new Date();

    alert_text.textContent = copytext(contact);

    alert.classList.remove("hidden");
    alert.style.zIndex = "2";
    
    setTimeout(() => {
        alert.classList.add("hidden");
        alert.style.zIndex = "-1";
    }, 5000);
};

function toggle_hidden(element){
    element.classList.toggle("hidden");
};

function hide_cards(index){
    btns[index].classList.toggle("dark");
    toggle_hidden(text[index]);
    toggle_hidden(jahre[index]);
};

function id_check(){
    for (let i = 0; i<seiten.length; i++){
        icons[i].classList.remove("on");

        if (is_in_viewport(seiten[i])){
            icons[i].classList.add("on");
        };
    }
}

function is_in_viewport(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight/2 && rect.bottom > window.innerHeight/2
    );
};

function to_id(number){
    let i = 1;
    scrollTo({
        top: i*number*window.innerHeight,
        behavior: "smooth",
    });
};

function copytext(element){
    const text = element.getAttribute('title');

    navigator.clipboard.writeText(text);

    return(text);
};