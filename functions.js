const seiten = document.querySelectorAll(".seite");
const body = document.querySelector("#body");
const titel = document.querySelectorAll(".titel");

/*FLIPCHART*/
const text_flipchart = document.querySelectorAll(".text");
const jahre_flipchart = document.querySelectorAll(".year");
const btns_flipchart = document.querySelectorAll(".flip_chart");

btns_flipchart.forEach((btn, i) => {
    btn.addEventListener("click", () => hide_cards(i));
});

function hide_cards(index){
    btns_flipchart[index].classList.toggle("dark");
    toggle_hidden(text_flipchart[index]);
    toggle_hidden(jahre_flipchart[index]);
};

function toggle_hidden(element){
    element.classList.toggle("hidden");
};

/*ALERT*/
const alert = document.querySelector("alert");
const alert_text = document.getElementById("alert_text");
const alert_icons = document.getElementById("copy");

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

function copytext(element){
    const text = element.getAttribute('title');

    navigator.clipboard.writeText(text);

    return(text);
};

/*MENU*/
/*const menu_buttons = document.querySelectorAll(".menu");

menu_buttons.forEach((icn, i) => {
    icn.addEventListener("click", () => to_id(i));
});*/


body.addEventListener("scroll", id_check());


function to_id(number){
    let i = 1;
    scrollTo({
        top: i*number*window.innerHeight,
        behavior: "smooth",
    });
};

function id_check(){
    for (let i = 0; i<seiten.length; i++){
        /*menu_buttons[i].classList.remove("on");*/
        titel[i].classList.add("hidden");

        if (is_in_viewport(seiten[i])){
            /*menu_buttons[i].classList.add("on");*/
            titel[i].classList.remove("hidden");
        };
    }
}

function is_in_viewport(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight/2 && rect.bottom > window.innerHeight/2
    );
};