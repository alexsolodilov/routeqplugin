// Function to extract the ID based on the given URL patterns
function extractId(url) {
    const regexes = [
      /mvrp\/([^?]*)/,
      /mvrp-map.*#([^?]*)/,
      /solution\/([^?]*)/
    ];
    
    for (const regex of regexes) {
      const match = url.match(regex);
      if (match && match[1]) {
        return match[1];
      }
    }
    
    return null;
  }
  
  // Get the current URL
  const url = window.location.href;
  const id = extractId(url);
  
  if (id) {
    // Copy the ID to the clipboard
    navigator.clipboard.writeText(id).then(() => {
      console.log(`ID ${id} copied to clipboard`);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }
  