const links = [
    "https://campus.placements.iitb.ac.in/",
    'https://webmail.iitb.ac.in/'
];

document.getElementById('openlinks').addEventListener('click', () => {
    links.forEach(link => {
        chrome.tabs.create({url:link});
    });
});

document.getElementById('addlinks').addEventListener('click', () => {
    const newlink = prompt("enter url:");
    if(isvaild(newlink)){
        links.push(newlink);
        alert(`link added: ${newlink}`);
    }else{
        alert('not valid');
    }
});

function isvaild(string){
    try{
        new URL(string);
        return true;
    } catch (_){
        return false;
    }
}
