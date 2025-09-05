window.onload = () => {
    console.log('document is loaded');


const menu = { // price: "quarter half full"
    meats: {
        item: [
            { name: 'Chicken Biryani', price: "$30 $65 $130" },
            { name: 'Chicken Curry', price: "$35 $65 $130" },
            { name: 'Chicken Karhai', price: "$35 $70 $140" },
            { name: 'Butter Chicken', price: "$35 $70 $140" },
            { name: 'Chicken Quorma', price: "$35 $70 $140" },
            { name: 'Chicken Haleem', price: "$35 $65 $135" },
            { name: 'Chicken Tikka', price: "$5/Leg Quarter" },
            { name: 'Chicken Tandoori', price: "$40 $80 $160" },
            { name: 'Beef Biryani', price: "$40 $75 $150" },
            { name: 'Bhuna Beef', price: "$40 $75 $150" },
            { name: 'Dum Qeema', price: "$40 $75 $150" },
            { name: 'Beef Curry', price: "$40 $80 $160" },
            { name: 'Beef Haleem', price: "$35 $75 $150" },
            { name: 'Dum Qeema', price: "$45 $85 $170" },
            { name: 'Aloo Qeema', price: "$35 $70 $140" },
            { name: 'Bihari Boti', price: "$45 $80 $170" },
            { name: 'Paya', price: "$-- $85 $170" },
            { name: 'Goat Biryani', price: "$55 $110 $220" },
            { name: 'Goat Curry', price: "$45 $85 $165" },
            { name: 'Goat Karhai', price: "$55 $110 $220" },
            { name: 'Lamb Aloo', price: "$45 $85 $165" },
            { name: 'Palak Gosht', price: "$55 $110 $220" },
            { name: 'Lamb Haleem', price: "$-- $90 $175" }
        ]
    },
    appetizers: {
        item: [
            { name: "Spring Roll Chicken", price: "$30/dozen"},
            { name: "Spring Roll Veggie", price: "$24/dozen"},
            { name: "Puff Chicken Patties", price: "$30/dozen"},
            { name: "Puff Potato Patties", price: "$24/dozen"},
            { name: "Pakora Mix Veggie", price: "$50 half-tray"},
            { name: "Chana Chaat", price: "$50 half-tray"},
            { name: "Fruit Chaat", price: "$50 half-tray"},
            { name: "Seekh Beef Kababs", price: "$36/dozen"},
            { name: "Seekh Chicken Kababs", price: "$36/dozen"},
            { name: "Shami Beef Kababs", price: "$30/dozen"},
            { name: "Shami Chicken Kababs", price: "$25/dozen"}
            
        ]
    },
    veggie: {
        item: [
            { name: 'Mix Veggie Pulao', price: "$30 $50 $100" },
            { name: 'Any Vegetable / Mix', price: "$30 $50 $100" },
            { name: 'Any Daal (Lentils)', price: "$30 $50 $100" },
            { name: 'Palak Paneer', price: "$30 $60 $120" },
            { name: 'Kadhi Pakora', price: "$30 $60 $100" },
            { name: 'Karri Pakora', price: "$30 $60 $110" }
        ]
    },
    chinese: {
        item: [
            { name: 'Chicken 65', price: "$35 $65 $140" },
            { name: 'Orange Chicken', price: "$40 $60 $130" },
            { name: 'Chicken Manchurian', price: "$35 $70 $140" },
            { name: 'Chinese Fried Rice', price: "$30 $60 $120" },
            { name: 'Chicken Chow Mein', price: "$35 $60 $120" },
            { name: 'Veggie Manchurian', price: "$35 $70 $140" },
            { name: 'Veggie Chow Mein', price: "$30 $60 $120" },
            { name: 'Veggie Fried Rice', price: "$30 $60 $120" }
        ]
    },
    pasta: {
        item: [
            { name: 'Veggie Pasta', price: "$35 $70 $140" },
            { name: 'Chicken Pasta', price: "$35 $60 $120" },
            { name: 'Chicken Alfredo', price: "$35 $60 $120" }
        ]
    },
    sweets: {
        item: [
            { name: 'Kheer', price: "$35 $60 $120" },
            { name: 'Sheer Khurma', price: "$30 $60 $120" },
            { name: 'Fruit Trifle Custard', price: "$35 $65 $130" },
            { name: 'Shahi Tukra', price: "$35 $65 $130" },
            { name: 'Zarda', price: "$35 $65 $130" },
            { name: 'Shahi', price: "$-- $60 $120" }
        ]
    }
}


    function getMenuFunc(foodType) {
        const getMenu = document.getElementById("menu-table");
        const foodInfo = document.createElement('div');

        let foodPriceElement = document.createElement('p');
        let foodNameElement = document.createElement('p');

        const items = foodType == "meats" ? menu.meats.item
            : foodType == "appetizers" ? menu.appetizers.item
                : foodType == "veggie" ? menu.veggie.item
                    : foodType == "chinese" ? menu.chinese.item
                        : foodType == "pasta" ? menu.pasta.item
                            : foodType == "sweets" ? menu.sweets.item
                                : menu.appetizers.item;



        let itemArrLength = items.length;

        getMenu.replaceChildren() // Empties parent element in event of user's click and append new children elements

        for (let i = 0; i < itemArrLength; i++) {
            const foodName = items[i].name

            const price = items[i].price

            /*
            const quarter = items[i].price[0] ? items[i].price[0] : "--"
            const half = items[i].price[1]
            const full = items[i].price[2]
            */

            //let foodPrice = `${'$' + quarter} ${'$' + half} ${'$' + full}`

            let foodPrice = price;

            foodNameElement.textContent = foodName
            foodPriceElement.textContent = foodPrice

            foodInfo.appendChild(foodNameElement)
            foodInfo.appendChild(foodPriceElement)

            getMenu.appendChild(foodInfo.cloneNode(true))
        }
    }

    function styleToggleButton(btnEvent){
        const btn = btnEvent;
        const parentElement = btn.parentElement;
        const btnId = btn.id;

        for (let i = 0; i < parentElement.children.length; i++) {
            //console.log(parentElement.children[i])

            // Style the button to let user know button is clicked
            // Style unselected buttons in a toggle way
            if (parentElement.children[i].id == btnId) {
                btn.style.background = 'black';
                btn.style.color = 'white';

                btn.classList.add('selected')

                //console.log(btn)
            }
            if (parentElement.children[i].id != btnId) {
                let buttonNotSelected = parentElement.children[i];
                buttonNotSelected.style.background = 'white';
                buttonNotSelected.style.color = 'black';

                buttonNotSelected.classList.remove('selected')
            }
        }
    }

    const appetBtn = document.getElementById('appetizers')
    const meatsBtn = document.getElementById('meats')
    const veggieBtn = document.getElementById('veggie')
    const chineseBtn = document.getElementById('chinese')
    const pastaBtn = document.getElementById('pasta')
    const sweetsBtn = document.getElementById('sweets')

    appetBtn.addEventListener('click', e => {
        getMenuFunc(e.target.id)

        styleToggleButton(e.target)
    })

    meatsBtn.addEventListener('click', e => {
        getMenuFunc(e.target.id)

        styleToggleButton(e.target)
    })

    veggieBtn.addEventListener('click', e => {
        getMenuFunc(e.target.id)

        styleToggleButton(e.target)
    })

    chineseBtn.addEventListener('click', e => {
        getMenuFunc(e.target.id)

        styleToggleButton(e.target)
    })

    pastaBtn.addEventListener('click', e => {
        getMenuFunc(e.target.id)

        styleToggleButton(e.target)
    })

    sweetsBtn.addEventListener('click', e => {
        getMenuFunc(e.target.id)

        styleToggleButton(e.target)
    })

    getMenuFunc('meats')
}