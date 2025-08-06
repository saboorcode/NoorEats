// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    let tableBody = document.getElementById("tablebody");

    //console.log(tableBody)

    async function getMenu(){

      const url = "http://localhost:3000/getmenu";

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const menu = await response.json();

        //console.log(menu[0])

        //row.textContent = "Hello World"

        ////
        // display menu (name, prices, etc)
        for (let i = 0; i < menu.length; i++){
            let row = document.createElement("ul")
            row.setAttribute("id", menu[i].type)

            let li = document.createElement("li")
            li.textContent = menu[i].dish
            row.appendChild(li)

            li = document.createElement("li")
            li.textContent = menu[i].quarter_price
            row.appendChild(li)

            li = document.createElement("li")
            li.textContent = menu[i].half_price
            row.appendChild(li)

            li = document.createElement("li")
            li.textContent = menu[i].full_price
            row.appendChild(li)

            /*
            li = document.createElement("li")
            li.textContent = menu[i].type
            row.appendChild(li)
            */

            tableBody.appendChild(row)
        }

        

        /////

        const originalTableBody = tableBody // original table rows before select

        const el = document.getElementById("food-option")
        el.addEventListener("change", (event) => {
            const selectedType = event.target.value;
            console.log("Selected food type:", selectedType)

            console.log(tableBody)

            const rowCount = tableBody.childElementCount
            console.log(rowCount)

            console.log(tableBody)
            /*
            for (let i = 0; i < rowCount; i++){
                if ()
            }
                */

            const selected = document.getElementById("chicken")
            selected.remove()
        })

      } catch (error) {
        console.error(error.message);
      }



    }

    getMenu()
})