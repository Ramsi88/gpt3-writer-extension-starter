// Declare new function
const insert = (content) => {
	// Find Calmly editor input section

  // Grab the first p tag so we can replace it with our injection

  // Split content by \n

  // Wrap in p tags

  // Insert into HTML one at a time
	
	// On success return true
	return true;
}

chrome.runtime.onMessage.addListener(
  // This is the message listener
  (request, sender, sendResponse) => {
    if (request.message === 'inject') {
      const { content } = request;
			
			// Call this insert function
      const result = insert(content);
			
			// If something went wrong, send a failes status
      if (!result) {
        sendResponse({ status: 'failed' });
      }

      sendResponse({ status: 'success' });
    }
  }
);