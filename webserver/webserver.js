import express from 'express';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://tkmampaeiyfxilwhlobc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrbWFtcGFlaXlmeGlsd2hsb2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNjA5MzUsImV4cCI6MjA2OTgzNjkzNX0.zT7wt7_aaf15ae4sdFpOEL_Otqvw4DUiTlek0HCzYHo')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/customers', (req, res) => {
  async function customers() {
    const { data, error } = await supabase
    .from('customers')
    .select()

    if (!error) {
      res.send(data)
    } else {
      res.sendStatus(500)
    }
  }

  customers();

  //res.send(customersData)
})

app.get('/dashboardcustomers', (req, res) => {
  async function customers() {
    const { data, error } = await supabase
    .from('customers')
    .select()
    .limit(10)

    if (!error) {
      res.send(data)
    } else {
      res.sendStatus(500)
    }
  }

  customers();

  //res.send(customersData)
})

app.get('/totalcustomers', (req, res) => {
  async function count() {
    const { data, error, count } = await supabase
    .from('customers')
    .select('*', { count: 'exact' }); // 'exact' returns the precise count

    if (!error) {
      res.send(count)
    } else {
      res.sendStatus(500)
    }
  }

  count()
})

app.get('/getmenu' , (req, res) => {
  async function getMenu(){
    const { data, error } = await supabase
      .from('menu')
      .select('*')

      if (!error){
        console.log(data)
        res.send(data)
      } else {
        res.sendStatus(500)
      }
  }

  getMenu()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})