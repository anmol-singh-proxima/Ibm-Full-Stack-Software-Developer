(function() {
    function addPara(key, value) {
        let para = document.createElement('p');
        para.innerHTML = `<b>${key}: </b> ${value}`;
        document.body.appendChild(para);
    }

    addPara("document.baseURI", document.baseURI);
    addPara("document.body", document.body);
    addPara("document.cookie", document.cookie);
    addPara("document.doctype", document.doctype);
})();