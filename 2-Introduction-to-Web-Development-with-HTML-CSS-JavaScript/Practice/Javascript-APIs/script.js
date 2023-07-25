(function() {
    function addPara(app, paraText) {
        let newPara = document.createElement("p");
        let newText = document.createTextNode(paraText);
        newPara.appendChild(newText);
        newPara.classList.add('para');
        newPara.setAttribute('id', 'content');
        app.appendChild(newPara);
    }
    
    function loginToApp() {
        let button = document.getElementById('login-button');
        let para = document.getElementById('content');
        let paraText = '';
        if(isLoggedIn) {
            isLoggedIn = false;
            button.innerText = 'Login';
            paraText = 'User is logged out of the App';
        } else {
            isLoggedIn = true;
            button.innerText = 'Logout';
            paraText = 'Hello User! Welcome to the App';
        }
        para.innerText = paraText;
    }

    function openNewWindow() {
        window.open('https://www.google.co.in/', 'New Window')
    }

    function createList() {
        let ul = document.createElement("ul");
        ul.setAttribute("id", "cityList");
        let elementList = ["Delhi", "Bangalore", "Mumbai", "Hyderabad"];
        for (let i = 0; i < elementList.length; i++) {
            li = document.createElement("li");
            li.innerText = elementList[i];
            ul.appendChild(li);
        }
        document.body.appendChild(ul);
        let createListBtn = document.getElementById("cityListBtn");
        // createListBtn.removeEventListener('click', createList);
        createListBtn.disabled = true;
    }
    
    /* Creates a new 'li' element and places it in the elementList before the first child of 'ul' */
    function changeList() {
        let li = document.createElement("li");
        li.innerText = "Atlantic City";
        let ul = document.getElementById("cityList");
        ul.insertBefore(li, ul.childNodes[0]);
    }

    /* App starts from here */
    // document.getElementById("MyHTMLPage");
    let app = document.getElementById("app");
    let isLoggedIn = false;
    let loginButton = document.createElement("button");
    let loginButtonText = document.createTextNode("Login");
    loginButton.appendChild(loginButtonText);
    loginButton.addEventListener('click', loginToApp);
    loginButton.setAttribute('id', 'login-button');
    app.appendChild(loginButton);
    let paraText = 'User is logged out of the App';
    addPara(app, paraText);

    // element.innerHTML
    let section = document.createElement('div');
    let sectionContent = "<h3>Section Heading</h3><p>This is a simple paragraph containing some text.</p><p>This is another paragraph</p>";
    section.innerHTML = sectionContent;
    let myHost = document.createElement("p");
    let height = screen.height;
    let width = screen.width;
    myHost.innerText = `Screen Resolution: ${height} x ${width}`;
    section.appendChild(myHost);
    app.appendChild(section);
    window.scrollTo(20, 200);

    // window.open
    let windowOpenButton = document.createElement("button");
    windowOpenButton.innerText = 'Click to open a new window';
    windowOpenButton.addEventListener('click', openNewWindow);
    windowOpenButton.classList.add('btn');
    app.appendChild(windowOpenButton);

    /* Create Button to create the List */
    let createListBtn = document.createElement("button");
    createListBtn.setAttribute("id", "cityListBtn");
    createListBtn.innerText = "Create List";
    createListBtn.addEventListener('click', createList);
    createListBtn.classList.add('btn');
    app.appendChild(createListBtn);

    /* Create Button to change the List */
    let changeListBtn = document.createElement("button");
    changeListBtn.innerText = "Change List";
    changeListBtn.addEventListener('click', changeList);
    changeListBtn.classList.add('btn');
    app.appendChild(changeListBtn);
})();