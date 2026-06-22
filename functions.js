/*FLIPCHART*/
const text_flipchart = document.querySelectorAll(".text");
const jahre_flipchart = document.querySelectorAll(".year");
const btns_flipchart = document.querySelectorAll(".flip_chart");

/*ALERT*/
const alert = document.querySelector("alert");
const alert_text = document.getElementById("alert_text");
const alert_icons = document.getElementById("copy");

const seiten = document.querySelectorAll(".seite");

const menu_buttons = document.querySelectorAll(".menu");

const body = document.querySelector("#body");

body.addEventListener("scroll", id_check());

btns_flipchart.forEach((btn, i) => {
    btn.addEventListener("click", () => hide_cards(i));
});

menu_buttons.forEach((icn, i) => {
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
    btns_flipchart[index].classList.toggle("dark");
    toggle_hidden(text_flipchart[index]);
    toggle_hidden(jahre_flipchart[index]);
};

function id_check(){
    for (let i = 0; i<seiten.length; i++){
        menu_buttons[i].classList.remove("on");

        if (is_in_viewport(seiten[i])){
            menu_buttons[i].classList.add("on");
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