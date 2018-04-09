class GoogleAnalyticsManager {
  constructor(options) {
    this.uaCode = {options};
  }

  init() {
    if (!this.uaCode) {
      console.debug("No Google Analytics code inserted");
      return;
    }
    // google analytics snippet from: 
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/#the_javascript_tracking_snippet
    // slightly modified since we aren't directly pasting a <script> tag
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    window.ga('create', 'UA-XXXXX-Y', 'auto');
    window.ga('send', 'pageview');
  }
}

module.exports = GoogleAnalyticsManager;