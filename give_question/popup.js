let initialLinks = [];
fetch('initial_links.json')
  .then(response => response.json())
  .then(data => {
    initialLinks = data;

    chrome.storage.local.get('links', (result) => {
      if (!result.links || result.links.length === 0) {
        chrome.storage.local.set({ links: initialLinks }, () => {
          console.log('Initial links set');
        });
      }
    });
  })
  .catch(error => {
    console.error('Error fetching initial links:', error);
  });

document.getElementById('givequestion').addEventListener('click', () => {
  chrome.storage.local.get('links', (result) => {
    let links = result.links || [];

    if (links.length === 0) {
      alert('No more links available!');
      return;
    }

    let index = Math.floor(Math.random() * links.length);
    let link = links.splice(index, 1)[0];

    chrome.storage.local.set({ links: links }, () => {
      console.log('Links updated in storage');
      chrome.tabs.create({ url: link }, () => {
        console.log('Tab opened with URL:', link);
      });
    });
  });
});
