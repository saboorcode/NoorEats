// Create a single supabase client for interacting with your database
const supa = supabase.createClient('https:/tkmampaeiyfxilwhlobc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrbWFtcGFlaXlmeGlsd2hsb2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNjA5MzUsImV4cCI6MjA2OTgzNjkzNX0.zT7wt7_aaf15ae4sdFpOEL_Otqvw4DUiTlek0HCzYHo')


document.addEventListener('DOMContentLoaded', () => {

    const menuList = document.getElementById("menu-list")
    
    async function getMenu() {
        
        let { data: menu, error } = await supa
            .from('menu')
            .select('*')
        

        for (let i = 0; i < menu.length; i++){
            if (menu[i].type == "chicken" || menu[i].type == "beef" || menu[i].type == "goat"){
                const row = document.createElement("ul")

                let li = document.createElement("li")
                li.textContent = menu[i].dish

                row.appendChild(li)

                li = document.createElement("li")
                li.textContent = 
                    (menu[i].quarter_price != null ? "$" + menu[i].quarter_price : "$--") + " " +
                    (menu[i].half_price    != null ? "$" + menu[i].half_price    : "$--") + " " +
                    (menu[i].full_price    != null ? "$" + menu[i].full_price    : "$--");


                row.appendChild(li)

                menuList.appendChild(row)
            }
        }
    }

    getMenu()

    const menuOpenButton = document.getElementById("menu-open-button")
    const menuCloseButton = document.getElementById("menu-close-button")

    let navbar = document.getElementById("navbar");
    let navbarMobile = document.getElementById("navbar-mobile");
    let hamburgerMenu = document.getElementById("hamburger-menu");

    
    // Add an event listener to call the function whenever the window is resized
    // This fixes annoying duplicated navbar (desktop and mobile) due to eventListener conflicts for hamburger menu display
    // 1. Hamburger Menu will always close when window resizes
    // 2. This will always ensure one navbar remains
    window.addEventListener('resize', (e) => {
        hamburgerMenu.style.display = "none";

        if (window.innerWidth >= 768){
            navbarMobile.style.display = "none";
        }

        if (window.innerWidth < 768){
            navbarMobile.style.display = "flex";
        }
    });
    

    menuOpenButton.addEventListener("click", (e) => {
        hamburgerMenu.style.display = "block";
        navbarMobile.style.display = "none";
    })

    menuCloseButton.addEventListener("click", (e) => {
        hamburgerMenu.style.display = "none";
        navbarMobile.style.display = "flex";
    })


})