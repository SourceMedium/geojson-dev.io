module.exports = function(hostname) {
    // Settings for geojson.io
    L.mapbox.accessToken = 'pk.eyJ1IjoibGF1cmVuYW5jb25hIiwiYSI6ImNpZmFyZWUzcTJoNHJzeG03aTdzdHlvb3IifQ.Sns5051MHp9lnL-zzmju6g';
    if (hostname === 'laurenancona.github.io') {
        return {
            client_id: '3d537c388917d3179438',
            gatekeeper_url: 'https://geojsonio-gatekeeper.herokuapp.com',
        };
    // Customize these settings for your own development/deployment
    // version of geojson.io.
    } else {
        L.mapbox.config.HTTP_URL = 'http://a.tiles.mapbox.com/v4';
        L.mapbox.config.HTTPS_URL = 'https://a.tiles.mapbox.com/v4';
        L.mapbox.config.FORCE_HTTPS = true;
        L.mapbox.config.REQUIRE_ACCESS_TOKEN = true;
        return {
            GithubAPI: null,
            client_id: 'bb7bbe70bd1f707125bc',
            gatekeeper_url: 'https://localhostauth.herokuapp.com'
        };
    }
};
