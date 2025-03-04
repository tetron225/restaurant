const homepage = () => {
    let content = document.querySelector('#content');
    let container = document.createElement('div');
    container.setAttribute('id', 'container');
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignContent = "center";
    container.style.flexDirection = "column";
    container.style.gap = "20px"

    let maintitle = document.createElement('div');
    maintitle.setAttribute('id', 'mainTitle');
    maintitle.style.fontSize = '36px';
    maintitle.style.display = 'flex';
    maintitle.style.justifyContent = 'center';
    maintitle.style.alignItems = 'center';
    maintitle.textContent = 'Milky Way Diner';

    let title = document.createElement("div");
    title.setAttribute('id', 'aTitle');
    title.style.display = "flex";
    title.style.justifyContent = "center";
    title.style.alignContent = "center";
    title.textContent = "Welcome to the best food in the universe!"
    //need to add padding
    let summary = document.createElement("div");
    summary.setAttribute('id', 'aSummary');
    summary.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    
    summary.textContent = "The most delicious piece of pie this side of the galaxy. Milky Way Galaxy offers a once in a lifetime dining experience for you and your family. Each cuisine represents an aspect of the planets within the Milky Way Galaxy. It also endears the taste of the planets.";

    container.appendChild(maintitle);
    container.appendChild(title);
    container.appendChild(summary);

    let container2 = document.createElement('div');
    container2.setAttribute('id', 'container2');
    container2.style.display = "flex";
    container2.style.justifyContent = "center";
    container2.style.alignItems = "center";
    container2.style.paddingTop = "15px"
    container2.style.flexDirection = "column";
    

    let operationTitle = document.createElement('div');
    operationTitle.setAttribute('id', 'hourTitle');
    operationTitle.textContent = "Hours of Operation";
    operationTitle.style.paddingBottom = "10px";

    //need to create the hour list
    let hourList = document.createElement('div');
    hourList.setAttribute('id', 'hourList');
    hourList.style.display = 'flex';
    hourList.style.alignItems = "center";
    hourList.style.flexDirection = "column";
    let monday = document.createElement('div');
    monday.setAttribute('id', 'monday');
    monday.textContent = "Monday 9:00 am - 4:00 pm";
    let tuesday = document.createElement('div');
    tuesday.setAttribute('id', 'tuesday');
    tuesday.textContent = "Tuesday 9:00 am - 4:00 pm";
    let wednesday = document.createElement('div');
    wednesday.setAttribute('id', 'wednesday');
    wednesday.textContent = "Wednesday 9:00 am - 4:00 pm";
    let thursday = document.createElement('div');
    thursday.setAttribute('id', 'thursday');
    thursday.textContent = "Thursday 9:00 am - 4:00 pm";
    let friday = document.createElement('div');
    friday.setAttribute('id', 'friday');
    friday.textContent = "Friday 9:00 am - 4:00 pm";

    container2.appendChild(operationTitle);
    container2.appendChild(hourList);
    hourList.appendChild(monday);
    hourList.appendChild(tuesday);
    hourList.appendChild(wednesday);
    hourList.appendChild(thursday);
    hourList.appendChild(friday);

    let container3 = document.createElement('div');
    container3.setAttribute('id', 'container3');
    container3.style.display = "flex";
    container3.style.justifyContent = "center";
    container3.style.alignItems = "center";
    container3.style.paddingTop = "15px";
    container3.style.flexDirection = "column";

    let locationTitle = document.createElement('div');
    locationTitle.textContent = 'Location';
    let locationBody = document.createElement('div');
    locationBody.textContent = "123 Venus Drive, Moon of Europa, Jupiter"
    container3.appendChild(locationTitle);
    container3.appendChild(locationBody);

    content.appendChild(container);
    content.appendChild(container2);
    content.appendChild(container3);   
}

export {homepage};