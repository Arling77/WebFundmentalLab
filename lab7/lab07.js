'use strict';
const works = [
    {
        author: "Micheal Jackson",
        lifetime: "1022-1055",
        tips: "Human",
        photos: ["human1.jpg", "human2.jpg", "human3.jpg"]
    },
    {author: "Maria JK", lifetime: "1920-2001", tips: "Classical", photos: ["classical1.jpg", "classical2.jpg"]},
    {
        author: "John Herry UY",
        lifetime: "1894-1928",
        tips: "Abstract",
        photos: ["abstract1.jpg", "abstract2.jpg", "abstract3.jpg", "abstract4.jpg", "abstract5.jpg"]
    },
    {author: "Coco", lifetime: "1777-1799", tips: "Beauty", photos: ["beauty1.jpg", "beauty2.jpg"]}
];
let content = document.getElementsByClassName("flex-container")[0]

for (const work of works) {
    let div = document.createElement('div')
    div.setAttribute('class', 'item')
    //add title
    let head = document.createElement('h4')
    head.appendChild(document.createTextNode('Genre: ' + work['tips']))
    //add author and lifetime
    let meta = document.createElement('div')
    meta.innerHTML = '<h3 style="display: inline;margin-right: 1%">' + work['author'] + '</h3><h5 style="display: inline;">lifetime: ' + work['lifetime'] + '</h5>'
    //add photos
    let photos = document.createElement('div')
    photos.innerHTML = '<h3 class="figcaption">Popular Photos</h3>'
    let photos_num = work['photos'].length
    for (let i = 0; i < photos_num; i++) {
        let photo = document.createElement("span")
        photo.innerHTML = '<img src ="' + work['photos'][i] + '" class = "photo"/>'
        photos.appendChild(photo)
    }
    let button = document.createElement("button")
    button.innerText = 'Visit'
    meta.setAttribute('class', 'inner-box')
    photos.setAttribute('class', 'inner-box')
    div.append(head, meta, photos, button)
    content.appendChild(div)
}
