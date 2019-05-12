window.onload = function(){

    let btn = document.getElementById("get-data");
    btn.addEventListener('click', load);

    async function load() {
        var url = 'http://pdo.rus/';
        var response = await fetch(url);
        var data = await response.json();

        var html = data.map(function (item) {
                return `
                        <ul>
                            <li>${item.id}</li>
                            <li>${item.gost}</li>
                            <li>${item.title}</li>
                        </ul>
                        `
            }
        );
        var div = document.getElementById("data-from-db");
        div.innerHTML = html.join('');
    }
};