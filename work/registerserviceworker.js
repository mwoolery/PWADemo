/*  Step 2


// The below code pertaining to ios is supposed to work for ios, but I don't have a means to test it
// Detects if device is on iOS 
const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent );
  }
  // Detects if device is in standalone mode
  const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
  
  // Checks if should display install popup notification:
  if (isIos() && !isInStandaloneMode()) {
    this.setState({ showInstallMessage: true });
  }


  


  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./serviceworker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
  */