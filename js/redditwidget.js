function redditStream(response) {
    console.log(response);
    console.log("Inside redditStream fn.");

    for (i = 0; i < 5; i++) {
        console.log(response.data.children[i].data.title);
        var listItem = document.createElement('div');
        listItem.className = "redditStream-item";
        listItem.innerHTML = `<a href="https://reddit.com${response.data.children[i].data.permalink}" target="_blank">${response.data.children[i].data.title}</a>`;
        document.querySelector("#redditStream").appendChild(listItem);
    }

}

<div class="card" id="redditCard">
    <div class="card-description-bar" style="background-color: #FF5000;">
        <p>
            <i class="fab fa-reddit-alien"></i>
            BAT Reddit
                                </p>
    </div>
    <div class="card-body" id="redditStream-card">
        <div id="redditStream">

        </div>
    </div>
</div>

<!-- Reddit Widget -->
<script src="js/redditwidget.js"></script>
<script src="https://www.reddit.com/r/BATProject/new.json?jsonp=redditStream" crossorigin="anonymous"></script>