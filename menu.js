window.onload = () => {
    console.log('document is loaded');


    const menu = { // price: [quarter, half, full]
        meats:
        {
            item: [
                { name: 'Chicken Biryani', price: [35, 70, 140] },
                { name: 'Chicken Curry', price: [35, 70, 140] },
                { name: 'Chicken Karhai', price: [35, 70, 140] },
                { name: 'Butter Chicken', price: [35, 70, 140] },
                { name: 'Chicken Haleem', price: [null, 70, 140] },
                { name: 'Chicken Tandoori', price: [40, 80, 160] },
                { name: 'Beef Biryani', price: [40, 80, 160] },
                { name: 'Beef Curry', price: [40, 80, 160] },
                { name: 'Dum Qeema', price: [45, 85, 170] },
                { name: 'Aloo Qeema', price: [40, 80, 160] },
                { name: 'Bihari Boti', price: [45, 80, 170] },
                { name: 'Beef Haleem', price: [null, 80, 160] },
                { name: 'Paya', price: [null, 85, 170] },
                { name: 'Goat Biryani', price: [45, 85, 165] },
                { name: 'Goat Curry', price: [45, 85, 165] },
                { name: 'Goat Karhai', price: [45, 85, 165] },
                { name: 'Lamb Aloo', price: [45, 85, 165] },
                { name: 'Palak Gosht', price: [45, 85, 165] },
                { name: 'Lamb Haleem', price: [null, 90, 175] }
            ]
        }
        ,
        appetizers:
        {
            item: [
                { name: 'Zeera Rice', price: [15, 30, 60] },
                { name: 'Garlic Naan', price: [12, 22, 40] }
            ]
        }
        ,
        veggie:
        {
            item: [
                { name: 'Mix Veggie Pulao', price: [30, 55, 100] },
                { name: 'Any Vegetable / Mix', price: [30, 60, 110] },
                { name: 'Any Daal (Lentils)', price: [25, 50, 100] },
                { name: 'Palak Paneer', price: [30, 60, 110] },
                { name: 'Karri Pakora', price: [30, 60, 110] }
            ]
        }
        ,
        chinese:
        {
            item: [
                { name: 'Chicken 65', price: [40, 80, 160] },
                { name: 'Chicken Manchurian', price: [35, 70, 140] },
                { name: 'Chinese Fried Rice', price: [35, 70, 140] },
                { name: 'Chicken Chow Mein', price: [35, 70, 140] },
                { name: 'Veggie Manchurian', price: [35, 70, 140] },
                { name: 'Veggie Chow Mein', price: [35, 70, 140] },
                { name: 'Veggie Fried Rice', price: [35, 70, 140] }
            ]
        }
        ,
        pasta:
        {
            item: [
                { name: 'Veggie Pasta', price: [35, 70, 140] },
                { name: 'Chicken Pasta', price: [35, 70, 140] },
                { name: 'Beef Pasta', price: [35, 70, 140] }
            ]
        }
        ,
        sweets:
        {
            item: [
                { name: 'Kheer (Rice Pudding)', price: [null, 70, 140] },
                { name: 'Sheer Khurma', price: [null, 70, 140] },
                { name: 'Fruit Trifle Custard', price: [null, 70, 140] },
                { name: 'Shahi Tukrey', price: [null, 60, 120] },
                { name: 'Shahi', price: [null, 60, 120] }
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

            const quarter = items[i].price[0] ? items[i].price[0] : "--"
            const half = items[i].price[1]
            const full = items[i].price[2]

            let foodPrice = `${'$' + quarter} ${'$' + half} ${'$' + full}`

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