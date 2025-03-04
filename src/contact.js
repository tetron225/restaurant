const contact = () => {
    let content = document.querySelector('#content');
    let container = document.createElement('div');
    let container2 = document.createElement('div');
    let title = document.createElement('div');
    let name = document.createElement('div');
    let worktitle = document.createElement('div');
    let phone = document.createElement('div');
    let email = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';

    container2.style.display = 'flex';
    container2.style.flexDirection = 'column'
    container2.style.justifyContent = 'center';
    container2.style.alignItems = 'center';
    container2.style.paddingTop = '20px';
    
    title.style.fontSize = '36px';
    title.textContent = 'Contact Us';

    name.textContent = "Brian Galaxy";

    worktitle.textContent = 'Manager';

    phone.textContent = '555-555-5555';

    email.textContent = 'galaxy@milkywayglaaxy.com';

    content.appendChild(container);
    content.appendChild(container2);
    container.appendChild(title);
    container2.appendChild(name);
    container2.appendChild(worktitle);
    container2.appendChild(phone);
    container2.appendChild(email);

}

export {contact}