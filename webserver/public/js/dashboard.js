document.addEventListener('DOMContentLoaded', () => {
    const count = document.getElementById("clients_count")


    async function getCustomerCount() {    
        const response = await fetch("http://localhost:3000/totalcustomers")

        //console.log(response)

        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }

        const customerCount = await response.json();

        //console.log(customerCount)

        count.textContent = customerCount
    }

    getCustomerCount()

    async function getCustomers() {    
        const response = await fetch("http://localhost:3000/dashboardcustomers")

        //console.log(response)

        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }

        const getCustomers = await response.json();

        console.log(getCustomers)

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

    getCustomerCount()
    getCustomers()
})