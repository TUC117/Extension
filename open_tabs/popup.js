document.getElementById('openlinks').addEventListener('click', () => {
    const links = [
        "https://campus.placements.iitb.ac.in/",
        'https://webmail.iitb.ac.in/'
    ];

    links.forEach(link => {
        chrome.tabs.create({url:link});
    });
});
