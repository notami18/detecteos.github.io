function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var hola = "Pc...";
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        hola = "Windows Phone";
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        hola = "Android";
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        hola = "iOS";
        return "iOS";
    }

    alert(hola);

    return "unknown";
}

getMobileOperatingSystem();