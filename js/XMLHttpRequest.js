window.onload = function () {

    let btn = document.getElementById("get-data");
    btn.addEventListener('click', load);

    function load(e) {
        e.target.value = 'Loaded';
        //Проверка на IE8,9
        var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

        var request = new XHR();
        request.open('post', 'http://pdo.rus/', true);
        request.send();

        request.onreadystatechange = function () {
            if (request.readyState != 4) return;

            if (request.status != 200) {
                console.log(`${request.status} : ${request.statusText}`)
            } else {
                e.target.value = 'Data was loaded';
                console.log(request.responseText);
            }
        };

    }
};