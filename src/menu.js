import foodImage from "./image/icecream.jpg";

const menu = () => {
    let content = document.querySelector('#content');
    let container = document.createElement('div');
    container.setAttribute('id', 'container1');
    let image1 = document.createElement('img');
    image1.setAttribute('id', 'icecream');
    image1.src = foodImage;
    image1.style.height = '200px';
    image1.style.width = '200px';
    image1.style.padding = '10px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';

    let title = document.createElement('div');
    title.setAttribute('id', 'aTitle');
    title.textContent = 'Menu'
    title.style.fontSize = '36px';

    let container2 = document.createElement('div');
    container2.setAttribute('id', 'container2');
    container2.style.display = 'flex';
    container2.style.flexDirection = 'row';
    container2.style.justifyContent = 'center';
    container2.style.alignItems = 'center';

    let menutitle = document.createElement('div');
    menutitle.textContent = "Neptune's White Jewel";

    let textStuff = document.createElement('div');
    textStuff.setAttribute('id', 'sometext');
    textStuff.textContent = 'Delicious Parfait ice cream with 3 scoops of vanilla ice cream, hot fudge with oreo crumbs spread around the top. Finally, whipped cream with cherry on top to finish the galaxy Blast'

    content.appendChild(title);
    content.appendChild(container);
    //content.appendChild(container2);
    container.appendChild(menutitle);
    container.appendChild(container2);
    container2.appendChild(image1);
    container2.appendChild(textStuff);
}

export {menu}