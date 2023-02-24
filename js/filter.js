const portfolio=[
    {
        title: 'Creative Web Design',
        src: '../img/1.jpg',
        category: 'Creative'
    },
    {
        title: 'Awesome Logo Design',
        src: '../img/2.jpg',
        category: 'Digital'
    },
    {
        title: 'Unique Photography Design',
        src: '../img/3.jpg',
        category: 'Photography'
    },
    {
        title: 'Fantastic Logo Design',
        src: '../img/4.jpg',
        category: 'Design'
    },
    {
        title: 'Curved And Design',
        src: '../img/5.jpg',
        category: 'Design'
    },
    {
        title: 'Fantastic Web Design',
        src: '../img/6.jpg',
        category: 'Digital'
    },
    {
        title: 'Creative Web Design',
        src: 'img/7.jpg',
        category: 'Creative'
    },
    {
        title: 'Creative Web Design',
        src: '../img/8.jpg',
        category: 'Digital'
    },
    {
        title: 'Creative Web Design',
        src: '../img/9.jpg',
        category: 'Design'
    }
]

let types=document.getElementById('portfolio_types')
let collection= document.getElementById('portfolio_collection')

let categories=[]
for (let item of portfolio){
    categories.push(item.category)
} 
categories=[...new Set(categories)]

let output=`<button class="btn_portfolio" onclick="filterItems('All')">All</button>`
for (let category of categories){
    output+=`<button class="btn_portfolio" onclick="filterItems('${category}')">${category}</button>`
}
types.innerHTML= output

let outputItems=``
for(let item of portfolio){
    outputItems+=`
    <div class="portfolio_items">
        <a href="${item.src}">
            <div class="image_box">
                <img src="${item.src}" alt="">
                    <div class="portfolio_content">
                        <p>${item.category}</p>
                        <h3>${item.title}</h3>
                    </div>
            </div>
        </a>
    </div>
    `
}
collection.innerHTML= outputItems

function filterItems(categ){
    let outputFilter=``
    for (let item of portfolio){
        if (item.category==categ){
            outputFilter+=`
            <div class="portfolio_items">
               <a href="${item.src}">
                    <div class="image_box">
                       <img src="${item.src}" alt="">
                        <div class="portfolio_content">
                            <p>${item.category}</p>
                            <h3>${item.title}</h3>
                        </div>
                     </div>
                </a>
            </div> 
    `
    } else if(categ=='All'){
        outputFilter+=`
              <div class="portfolio_items">
               <a href="${item.src}">
                <div class="image_box">
                    <img src="${item.src}" alt="">
                        <div class="portfolio_content">
                            <p>${item.category}</p>
                            <h3>${item.title}</h3>
                        </div>
                </div>
                </a>
              </div> 
    `
    }
}
collection.innerHTML=outputFilter
}