function openTab(tabName) {
    let tabs = document.getElementsByClassName("tab");

    for (let tab of tabs) {
        tab.style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
}

openTab("home");

fetch("https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US")
    .then(response => response.json())
    .then(data => {
        const imageUrl = "https://www.bing.com" + data.images[0].url;
        document.body.style.backgroundImage = `url(${imageUrl})`;
    })
    .catch(error => console.error("Failed to load Bing wallpaper:", error));