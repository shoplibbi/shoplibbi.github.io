var link = document.querySelector("link[rel~='image/png']");

if (!link) {
    link = document.createElement('link');
    link.rel = 'image/png';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = 'https://shoplibbi.github.io/assets/img/32px.png';
