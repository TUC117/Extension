import json
with open('blind75Problems.json', 'r') as f:
    data = json.load(f)
href_links = [item['href'] for item in data]
with open('initial_links.json', 'w') as f:
    json.dump(href_links, f)
print('Links extracted and saved to initial_links.json')
