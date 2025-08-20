// Create a single supabase client for interacting with your database
const supa = supabase.createClient('https:/tkmampaeiyfxilwhlobc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrbWFtcGFlaXlmeGlsd2hsb2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNjA5MzUsImV4cCI6MjA2OTgzNjkzNX0.zT7wt7_aaf15ae4sdFpOEL_Otqvw4DUiTlek0HCzYHo')


document.addEventListener('DOMContentLoaded', () => {

    const menuList = document.getElementById("menu-list")

    async function getMenu(foodType) {
        menuList.replaceChildren()

        const loadingImage = document.createElement("img")
        loadingImage.src = "../images/loading.png"
        loadingImage.height = "100"
        loadingImage.style.marginTop = "2em"

        if (menuList.childNodes[0] == undefined) {
            menuList.appendChild(loadingImage)
        }

        let { data: menu, error } = await supa
            .from('menu')
            .select('*')


        for (let i = 0; i < menu.length; i++) {
            if (foodType == "meats") {

                console.log("meats pass")
                if (menu[i].type == "chicken" || menu[i].type == "beef" || menu[i].type == "goat") {
                    const row = document.createElement("ul")

                    let li = document.createElement("li")
                    li.textContent = menu[i].dish

                    row.appendChild(li)

                    li = document.createElement("li")
                    li.textContent =
                        (menu[i].quarter_price != null ? "$" + menu[i].quarter_price : "$--") + " " +
                        (menu[i].half_price != null ? "$" + menu[i].half_price : "$--") + " " +
                        (menu[i].full_price != null ? "$" + menu[i].full_price : "$--");


                    row.appendChild(li)

                    loadingImage.src = ""
                    menuList.appendChild(row)
                }
            }

            if (foodType != "meats") {
                console.log("not meats pass")

                if (menu[i].type == foodType) {
                    const row = document.createElement("ul")

                    let li = document.createElement("li")
                    li.textContent = menu[i].dish

                    row.appendChild(li)

                    li = document.createElement("li")
                    li.textContent =
                        (menu[i].quarter_price != null ? "$" + menu[i].quarter_price : "$--") + " " +
                        (menu[i].half_price != null ? "$" + menu[i].half_price : "$--") + " " +
                        (menu[i].full_price != null ? "$" + menu[i].full_price : "$--");


                    row.appendChild(li)

                    loadingImage.src = ""
                    menuList.appendChild(row)
                }
            }
        }

        console.log(menuList.childNodes[0] == undefined)
    }

    getMenu("meats")

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

        if (window.innerWidth >= 768) {
            navbarMobile.style.display = "none";
        }

        if (window.innerWidth < 768) {
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

    const appetizerClick = document.getElementById("click-appetizer");
    const meatsClick = document.getElementById("click-meats");
    const veggieClick = document.getElementById("click-veggie");
    const chineseClick = document.getElementById("click-chinese");
    const pastaClick = document.getElementById("click-pasta");
    const sweetsClick = document.getElementById("click-sweets");

    const circleImage = document.getElementById("circle-options")

    // default selection circle order for meats type
    for (let i = 1; i <= 6; i++) {
        const grayCircle = document.createElement("img")
        grayCircle.src = "../images/gray-circle.png"

        const blackCircle = document.createElement("img")
        blackCircle.src = "../images/black-circle.png"

        if (i == 2) {
            circleImage.appendChild(blackCircle)
        } else {
            circleImage.appendChild(grayCircle)
        }
    }

    console.log(circleImage)
    appetizerClick.addEventListener('click', (e) => {
        getMenu("appetizers")

        circleImage.replaceChildren()

        for (let i = 1; i <= 6; i++) {
            const grayCircle = document.createElement("img")
            grayCircle.src = "../images/gray-circle.png"

            const blackCircle = document.createElement("img")
            blackCircle.src = "../images/black-circle.png"

            if (i == 1) {
                circleImage.appendChild(blackCircle)
            } else {
                circleImage.appendChild(grayCircle)
            }
        }
    })

    meatsClick.addEventListener('click', (e) => {
        getMenu("meats")

        circleImage.replaceChildren()

        for (let i = 1; i <= 6; i++) {
            const grayCircle = document.createElement("img")
            grayCircle.src = "../images/gray-circle.png"

            const blackCircle = document.createElement("img")
            blackCircle.src = "../images/black-circle.png"

            if (i == 2) {
                circleImage.appendChild(blackCircle)
            } else {
                circleImage.appendChild(grayCircle)
            }
        }
    })

    veggieClick.addEventListener('click', (e) => {
        getMenu("veggie")

        circleImage.replaceChildren()

        for (let i = 1; i <= 6; i++) {
            const grayCircle = document.createElement("img")
            grayCircle.src = "../images/gray-circle.png"

            const blackCircle = document.createElement("img")
            blackCircle.src = "../images/black-circle.png"

            if (i == 3) {
                circleImage.appendChild(blackCircle)
            } else {
                circleImage.appendChild(grayCircle)
            }
        }
    })

    chineseClick.addEventListener('click', (e) => {
        getMenu("chinese")

        circleImage.replaceChildren()

        for (let i = 1; i <= 6; i++) {
            const grayCircle = document.createElement("img")
            grayCircle.src = "../images/gray-circle.png"

            const blackCircle = document.createElement("img")
            blackCircle.src = "../images/black-circle.png"

            if (i == 4) {
                circleImage.appendChild(blackCircle)
            } else {
                circleImage.appendChild(grayCircle)
            }
        }
    })

    pastaClick.addEventListener('click', (e) => {
        getMenu("pasta")

        circleImage.replaceChildren()

        for (let i = 1; i <= 6; i++) {
            const grayCircle = document.createElement("img")
            grayCircle.src = "../images/gray-circle.png"

            const blackCircle = document.createElement("img")
            blackCircle.src = "../images/black-circle.png"

            if (i == 5) {
                circleImage.appendChild(blackCircle)
            } else {
                circleImage.appendChild(grayCircle)
            }
        }
    })

    sweetsClick.addEventListener('click', (e) => {
        getMenu("sweets")

        circleImage.replaceChildren()

        for (let i = 1; i <= 6; i++) {
            const grayCircle = document.createElement("img")
            grayCircle.src = "../images/gray-circle.png"

            const blackCircle = document.createElement("img")
            blackCircle.src = "../images/black-circle.png"

            if (i == 6) {
                circleImage.appendChild(blackCircle)
            } else {
                circleImage.appendChild(grayCircle)
            }
        }
    })


})