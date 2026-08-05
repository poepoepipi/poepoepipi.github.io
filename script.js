function openTab(tabName) {
    let tabs = document.getElementsByClassName("tab");

    for (let tab of tabs) {
        tab.style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
}

openTab("home");

const apiKey = "DEMO_KEY";

fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        if (data.media_type === "image") {
            document.body.style.backgroundImage = `url(${data.url})`;
        }
    });