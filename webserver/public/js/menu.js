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
            row.setAttribute("class", menu[i].type) // use class attribute for repeating instead of ID.  ID is unique identifer.  lesson learnt

            let li = document.createElement("li")
            li.textContent = i
            row.appendChild(li)

            li = document.createElement("li")
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

        // https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode#example
        // Make a copy of parent element because .replaceChildren() deletes the rest...
        // Copy before selection function because children even copied ones are rid of as well
        const copyOfTableBody = tableBody.cloneNode(true)

        const el = document.getElementById("food-option")
        el.addEventListener("change", (event) => {
            tableBody = copyOfTableBody

            const selectedType = event.target.value;
            console.log("Selected food type:", selectedType)

            //console.log(tableBody.children[0].getAttribute("id"))

            const elementsByClass = tableBody.querySelectorAll("."+selectedType) // returns NodeList of children elements by class selected
            //console.log(elementsByClass)

            tableBody.replaceChildren(...elementsByClass)
        })

      } catch (error) {
        console.error(error.message);
      }



    }

    getMenu()
})