chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 1,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "chatgpt.com",
          resourceTypes: ["main_frame"]
        }
      }
    ],
    removeRuleIds: [1]
  });
});
