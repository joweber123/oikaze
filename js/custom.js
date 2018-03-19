$(document).ready(function() {
    var userFeed = new Instafeed({
        get: 'user',
        userId: '6928234798',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '6928234798.1677ed0.ebe268eadfa34218ba66d7da4ad8a9fd',
        sortBy: 'most-recent',
        template: '<div class="insta-img"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="insta-img"/></a></div>',
    });

    userFeed.run();
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
});

