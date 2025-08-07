// Create a single supabase client for interacting with your database
const supa = supabase.createClient('https:/tkmampaeiyfxilwhlobc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrbWFtcGFlaXlmeGlsd2hsb2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNjA5MzUsImV4cCI6MjA2OTgzNjkzNX0.zT7wt7_aaf15ae4sdFpOEL_Otqvw4DUiTlek0HCzYHo')
          

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  const tableHeader = document.getElementById("table-header")

  console.log(tableHeader)

  //tableHeader.style.color = "pink"

  async function getCustomerData() {
      try {
        let { data: customerData, error } = await supa
          .from('customers')
          .select('*')

          console.log(customerData, error)

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


      } catch (error) {
        console.error(error.message);
      }
  }

  getCustomerData()
});