var websites = [
    {
        title: "Cryptocurrency Exchanger",
        link: "https://cryochanger.github.io/",
        client: "@Auchrio",
        description: "This is a simple website for exchanging cryptocurrencies, using the changenow.io API. ",
        imgFull: "./img/web-1.cryoChanger-Full.png",
        imgThumb: "./img/web-1.cryoChanger-Thumb.png"
    }
];

var tools = [];

window.onload = function() {
    var web_content = document.querySelector('#web_content');
    
    if (websites.length === 0) {
        web_content.innerHTML = "<p>There are no web projects to display at the moment, if you would like to change this <a href='t.me/auchrio'>contact me.</a></p>";
    }
    
    websites.forEach(function(project) {
        var cardHTML = `
            <div class="column is-half" id="slide">
                <div class="card">
                    <div class="card-image">
                    <figure class="image">
                        <a href="${project.imgFull}" target="_blank"><img src="${project.imgThumb}" alt="Site Image"></a>
                    </figure>
                    </div>
                    <div class="card-content">
                    <p class="title is-4">${project.title} <a href="${project.link}" target="_blank">[link]</a></p>
                    <p class="subtitle is-6">Commision for ${project.client}</p>
                    <div class="content">
                        ${project.description}
                    </div>
                    </div>
                </div>
            </div>
        `;
        web_content.innerHTML += cardHTML;
    });

    var tools_content = document.querySelector('#tool_content');

    if (tools.length === 0) {
        tools_content.innerHTML = "<p>There are no tools to display at the moment, if you would like to change this <a href='t.me/auchrio'>contact me.</a></p>";
    }

    tools.forEach(function(project) {
        var cardHTML = `
            <div class="column is-half" id="slide">
                <div class="card">
                    <div class="card-image">
                    <figure class="image">
                        <a href="${project.imgFull}" target="_blank"><img src="${project.imgThumb}" alt="Site Image"></a>
                    </figure>
                    </div>
                    <div class="card-content">
                    <p class="title is-4">${project.title} <a href="${project.link}">[link]</a></p>
                    <p class="subtitle is-6">Commision for ${project.client}</p>
                    <div class="content">
                        ${project.description}
                    </div>
                    </div>
                </div>
            </div>
        `;
        tools_content.innerHTML += cardHTML;
    });

    var web_content = document.querySelector('#web_content');
};