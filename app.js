let infoContainer = {
    mainPicture: [
        {
            title: "Aka Haiiro Keycaps",
            img: "https://cdn.shopify.com/s/files/1/0238/7342/1376/files/12_e5472516-770e-484a-acb7-0ba6ce8c131d_1296x.jpg?v=1685719830"
        },
        {
            title: "CK Pride Deskmat",
            img: "https://cdn.shopify.com/s/files/1/0238/7342/1376/files/PrideMat_Trans-1_1512x.png?v=1685722232"
        },
        {
            title: "Leviatan",
            img: "https://cdn.shopify.com/s/files/1/0238/7342/1376/files/JPvbKKm_1080x.jpg?v=1686345987"
        }
    ],
    sectionTypes: [
        {
            title: "Keyboards",
            img: "https://cdn.shopify.com/s/files/1/0238/7342/1376/collections/DSC0077_180x.jpg?v=1664328392"
        },
        {
            title: "Brutalist Series V1 Keyboards",
            img: "https://cdn.shopify.com/s/files/1/0238/7342/1376/collections/DSCF1346-12_180x.jpg?v=1664367127"
        },
        {
            title: "Bakeneko by Cannonkeys",
            img: "https://cdn.shopify.com/s/files/1/0238/7342/1376/collections/20220608-_DSC0112_180x.jpg?v=1658531274"
        },
        {
            title: "Entry Level Keyboard Kits",
            img: "https://cdn.shopify.com/s/files/1/0238/7342/1376/collections/DSC5971_360x.jpg?v=1658531151"
        },
        {
            title: "CannonKeys Keycaps",
            img: "https://cdn.shopify.com/s/files/1/0238/7342/1376/collections/combo-pbt-banner-no-logo_220x.png?v=1658531973"
        },
        {
            title: "Switches",
            img: "https://cdn.shopify.com/s/files/1/0238/7342/1376/collections/dark_amber_2_220x.png?v=1665174275"
        }
    ]
}
// let sectionTypes = {
// }
let productContainer = document.querySelector(".productContainer")
let mainImg = document.querySelector(".mainImg")
const changePage = () => {
    clearPage();
    buildWithUs();
    categories();
}
const clearPage = () => {
    mainImg.innerHTML = "";
    productContainer.innerHTML = ""
}
const buildWithUs = () => {
    let pageTitle = document.createElement('h3');
    pageTitle.setAttribute("class", "pageTitle");
    pageTitle.append(document.createTextNode('Build With Us'));
    productContainer.append(pageTitle);
}
const categories = () => {
    // for(i=0;i<temp.length;i++){
    //     productSection[i].innerHTML=`<img src="${temp[i]}" alt="" class = "productPic">`
    // }
        let sectionContainer = document.createElement('div');
        sectionContainer.setAttribute('class', 'sectionContainer')
        productContainer.append(sectionContainer);
        // let sectionContainer= document.querySelector('.sectionContainer')
        infoContainer.sectionTypes.forEach((temp) => {
            let imgTitleDiv = document.createElement('div');
            imgTitleDiv.setAttribute('class','imgTitleDiv');
            sectionContainer.append(imgTitleDiv);
            let productPic = document.createElement('img');
            productPic.setAttribute('src', temp.img);
            productPic.setAttribute('class', 'productPic');imgTitleDiv.append(productPic); 
            let imgTitle = document.createElement('div');imgTitle.setAttribute('class',"imgTitle");
            imgTitle.innerHTML=temp.title;
            imgTitleDiv.append(imgTitle);
        })
    }
const changeContactUs = ()=>{
    let contactBtn = document.querySelector('.contactUs');
    contactBtn.classList.toggle('contactUsBtm')
}
const changeColor=()=>{
    let backgroundColor = document.querySelector('body');
    backgroundColor.classList.toggle('bodyTwo');
}