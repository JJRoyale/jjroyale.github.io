document.addEventListener("DOMContentLoaded", function () {
    const websites = [
        { name: "Old Reddit", url: "https://old.reddit.com" },
        { name: "Invidious (YouTube Proxy)", url: "https://yt.drgnz.club" },
        { name: "Discross (Discord Client))", url: "http://discross.rc24.xyz/login.html" },
    ];

    const websiteList = document.getElementById("website-list");

    websites.forEach(website => {
        const websiteItem = document.createElement("div");
        websiteItem.classList.add("website-item");

        const link = document.createElement("a");
        link.href = website.url;
        link.textContent = website.name;
        link.classList.add("website-link");

        websiteItem.appendChild(link);
        websiteList.appendChild(websiteItem);
    });
});
