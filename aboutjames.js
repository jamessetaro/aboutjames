if (Meteor.isClient) {
  // Template.hello.greeting = function () {
    // return "Welcome to aboutjames.";
  // };

  // Template.hello.events({
  //   'click input' : function () {
  //     // template data, if any, is available in 'this'
  //     if (typeof console !== 'undefined')
  //       console.log("You pressed the button");
  //   }
  // });

      if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style")
        msViewportStyle.appendChild(
          document.createTextNode(
            "@-ms-viewport{width:auto!important}"
          )
        )
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
      } 
     


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
