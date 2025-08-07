// Create a single supabase client for interacting with your database
const supa = supabase.createClient('https:/tkmampaeiyfxilwhlobc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrbWFtcGFlaXlmeGlsd2hsb2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNjA5MzUsImV4cCI6MjA2OTgzNjkzNX0.zT7wt7_aaf15ae4sdFpOEL_Otqvw4DUiTlek0HCzYHo')


// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    let tableBody = document.getElementById("tablebody");

    //console.log(tableBody)

    async function getMenu(){

        const { data: menu , error } = await supa
          .from('menu')
          .select('*')

        for (let i = 0; i < menu.length; i++){
            let row = document.createElement("ul")
            row.setAttribute("class", menu[i].type) // use class attribute for repeating instead of ID.  ID is unique identifer.  lesson learnt

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
        // Make a copy of parent element because .replaceChildren() deletes the rest of children...
        // Copy before selection function because children even copied ones are rid of as well
  
        // tableBody children elements remain, its to not be filtered or replaced.  For cloning purpose only.
        // secondTableBody will be displayed with filtered children elements by class (chicken or beef)
        let tableBodyCopy = tableBody.cloneNode(true)

        /* Filter/Selection Function with Event Listener */
        /* This is just like a loop, except it depends on user selection */
        /* tableBody copy will have original children every loop, useful for filtering or there will be nothing left */
        const el = document.getElementById("food-option")
        el.addEventListener("change", (event) => {
            tableBodyCopy = tableBody.cloneNode(true) // tableBodyCopy will have original children elements again per selection and before replaceChildren() function

            const selectedType = event.target.value;
            console.log("Selected food type:", selectedType)

            console.log(tableBody.childNodes)

            /*
            const childrenNodeListByClass = tableBodyCopy.querySelectorAll("."+selectedType) // returns NodeList of children elements by class selected

            tableBodyCopy.replaceChildren(...elementsByClass)

            
            console.log(tableBodyCopy)
            console.log(tableBody)*/
        })

    }

    getMenu()
})