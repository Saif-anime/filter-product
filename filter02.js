const data = [
    {
        id: 1,
        product_name: "Esprit Ruffle Shirt",
        product_img: "./image/product01.webp",
        product_price: 45,
        product_cat: "women",
    },
    {
        id: 2,
        product_name: "Herschel supply",
        product_img: "./image/product02.webp",
        product_price: 65,
        product_cat: "women",
    },
    {
        id: 3,
        product_name: "Only Check Trouser",
        product_img: "./image/product03.webp",
        product_price: 55,
        product_cat: "men",
    },
    {
        id: 4,
        product_name: "Classic Trench Coat",
        product_img: "./image/product04.webp",
        product_price: 90,
        product_cat: "women",
    },
    {
        id: 5,
        product_name: "Front Pocket Jumper",
        product_img: "./image/product05.webp",
        product_price: 15,
        product_cat: "women",
    },
    {
        id: 6,
        product_name: "Vintage Inspired Classic",
        product_img: "./image/product06.webp",
        product_price: 87,
        product_cat: "watch",
    },
    {
        id: 7,
        product_name: "Shirt in Stretch Cotton",
        product_img: "./image/product07.webp",
        product_price: 55,
        product_cat: "women",
    },
    {
        id: 8,
        product_name: "Pieces Metallic Printed",
        product_img: "./image/product08.webp",
        product_price: 47,
        product_cat: "women",
    },
    {
        id: 9,
        product_name: "Converse All Star Hi Plimsolls",
        product_img: "./image/product09.webp",
        product_price: 21,
        product_cat: "shoes",
    },
    {
        id: 10,
        product_name: "Femme T-Shirt In Stripe",
        product_img: "./image/product10.webp",
        product_price: 90,
        product_cat: "women",
    },
    {
        id: 11,
        product_name: "Herschel supply",
        product_img: "./image/product11.webp",
        product_price: 45,
        product_cat: "men",
    },
    {
        id: 12,
        product_name: "Herschel supply",
        product_img: "./image/product12.webp",
        product_price: 45,
        product_cat: "men",
    },
    {
        id: 13,
        product_name: "T-Shirt with Sleeve",
        product_img: "./image/product13.webp",
        product_price: 15,
        product_cat: "women",
    },
    {
        id: 14,
        product_name: "Pretty Little Thing",
        product_img: "./image/product14.webp",
        product_price: 67,
        product_cat: "women",
    },
    {
        id: 15,
        product_name: "Mini Silver Mesh Watch",
        product_img: "./image/product15.webp",
        product_price: 47,
        product_cat: "watch",
    },
    {
        id: 16,
        product_name: "Square Neck Back",
        product_img: "./image/product16.webp",
        product_price: 40,
        product_cat: "women",
    },
    {
        id: 17,
        product_name: "Men T-Shirt",
        product_img: "./image/product17.webp",
        product_price: 53,
        product_cat: "men",
    },
    {
        id: 18,
        product_name: "Cotton T-Shirt",
        product_img: "./image/product18.webp",
        product_price: 5,
        product_cat: "men",
    },
    {
        id: 19,
        product_name: "Black Shirt",
        product_img: "./image/product19.webp",
        product_price: 20,
        product_cat: "men",
    }

]



var categories = document.querySelector('.cat');


// show the product here 
const showproduct = (data_value) => {
    var div = document.querySelector('.product_container');
    var htmldata = data_value.map((d) => {
        return (` <div class="product_card">
        <div class="img">
            <img src=${d.product_img} alt="img1">
        </div>
        <div class="content">
            <h1 >${d.product_name}</h1>
            <span>${d.product_cat}</span>
            <span>${d.product_price}₹</span>
        </div>
    </div>`);
    }).join('');

    div.innerHTML = htmldata;

}





const filteringdata = (word) => {
    showproduct(data.filter((w) => {
        return w.product_cat == word;
    }))
}

window.addEventListener('DOMContentLoaded', () => {
    showproduct(data);


    // show all categories here

    var cat = ["All", ...new Set(data.map((m) => { return m.product_cat; }))];

    var addcat = cat.map((value) => {
        return `<span>${value}</span>`;
    }).join("");


    categories.innerHTML = addcat;

    categories.addEventListener('click', (e) => {
        const selectoption = e.target.textContent;
        selectoption == "All" ? showproduct(data) : filteringdata(selectoption);
    });


    var priceinput = document.querySelector('#range');
    var spanrange = document.querySelector('h5');

    const setprice = () => {
        const priceProduct = data.map((e) => e.product_price);
        const maxprice = Math.max(...priceProduct);
        const minprice = Math.min(...priceProduct);

        priceinput.min = minprice;
        priceinput.max = maxprice;
        priceinput.value = maxprice;
        spanrange.textContent = `${maxprice}₹ `;


        priceinput.addEventListener('input', (e) => {
            spanrange.textContent = `${e.target.value}₹ `;
            showproduct(data.filter((t) => {
                return t.product_price <= e.target.value;
            }))
            


        })
    }

    setprice();

});



// search here 

var input = document.querySelector('input');

input.addEventListener('keyup', (e) => {
    var d = data.filter((l) => {
        return l.product_name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
    });

    showproduct(d);
})





