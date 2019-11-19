function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        hola = "Windows Phone";
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        $(".identifier").html('<a hre="https://play.google.com/store/apps/details?id=bpt.com.coopebombas">Coopebombas.</a>');
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        hola = "iOS";
        return "iOS";
    }

    $(".identifier").html('PC... Hola mundo');

    return "unknown";
}

getMobileOperatingSystem();