// Create a single supabase client for interacting with your database
const supa = supabase.createClient('https:/tkmampaeiyfxilwhlobc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrbWFtcGFlaXlmeGlsd2hsb2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNjA5MzUsImV4cCI6MjA2OTgzNjkzNX0.zT7wt7_aaf15ae4sdFpOEL_Otqvw4DUiTlek0HCzYHo')


document.addEventListener('DOMContentLoaded', () => {
    const count = document.getElementById("clients_count")


    async function getCustomerCount() {    
        let { data: customerCount, error } = await supa
            .from('customers')
            .select('*')
            .select('*', { count: 'exact' });

        count.textContent = customerCount.length
    }

    async function getMenu(){
        const { data: menu , error } = await supa
          .from('menu')
          .select('*')
          .limit(10)
        
        let tableBody = document.getElementById("menutablebody");

        for (let i = 0; i < menu.length; i++){
            let row = document.createElement("ul")
            row.setAttribute("class", menu[i].type) // use class attribute for repeating instead of ID.  ID is unique identifer.  lesson learnt

            li = document.createElement("li")
            li.textContent = menu[i].dish
            row.appendChild(li)

            li = document.createElement("li")
            li.textContent = menu[i].full_price
            row.appendChild(li)

            li = document.createElement("li")
            li.textContent = menu[i].type
            row.appendChild(li)

            tableBody.appendChild(row)


            }
        }

    async function getCustomers() {    
            const { data: getCustomers, error } = await supa
                .from('customers')
                .select()
                .limit(10)

        const tableBody = document.getElementById("clients-table-body")

        for (let i = 0; i < getCustomers.length; i++){
            const row = document.createElement("ul")

            let li = document.createElement("li")
            li.textContent = i+1

            row.appendChild(li)

            li = document.createElement("li")
            li.textContent = getCustomers[i].customer_name

            row.appendChild(li)

            li = document.createElement("li")
            li.textContent = getCustomers[i].customer_phoneno

            row.appendChild(li)

            li = document.createElement("li")
            li.textContent = getCustomers[i].no_served

            row.appendChild(li)

            tableBody.appendChild(row)
        }
    
    }

    getMenu()
    getCustomerCount()
    getCustomers()
})