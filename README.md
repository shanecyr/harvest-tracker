# harvest-tracker
A reworking of the Harvest button, to be called from whatever source.

## Bookmarklet style
    javascript:(function(){const script = document.createElement('script');script.src = 'https://your-hosting-domain.com/path/to/harvest-timer-script.js';document.body.appendChild(script);})();
