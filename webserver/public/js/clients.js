// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  const tableHeader = document.getElementById("table-header")

  console.log(tableHeader)

  //tableHeader.style.color = "pink"

  async function getCustomerData() {

      const url = "http://localhost:3000/customers";

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const customerData = await response.json();

        //console.log(customerData);

        const tableBody = document.getElementById("table-body");


        for (let i = 0; i < customerData.length; i++){
          const row = document.createElement("ul")

          let li = document.createElement("li")
          li.textContent = customerData[i].id

          row.appendChild(li)

          li = document.createElement("li")
          li.textContent = customerData[i].customer_name

          row.appendChild(li)

          li = document.createElement("li")
          li.textContent = customerData[i].customer_phoneno

          row.appendChild(li)

          li = document.createElement("li")
          li.textContent = customerData[i].no_served

          row.appendChild(li)

          tableBody.appendChild(row)
        }

        /*
        let li = document.createElement("li")
        li.textContent = customerData[0].id

        row.appendChild(li)

        li = document.createElement("li")
        li.textContent = customerData[0].customer_name

        row.appendChild(li)

        li = document.createElement("li")
        li.textContent = customerData[0].customer_phoneno

        row.appendChild(li)

        li = document.createElement("li")
        li.textContent = customerData[0].no_served

        row.appendChild(li)


        tableBody.appendChild(row)
        */


      } catch (error) {
        console.error(error.message);
      }
  }

  getCustomerData()
});