const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');

if (twitterTitleMeta && twitterDescriptionMeta) {
    const title = twitterTitleMeta.getAttribute("content");
    const artist = twitterDescriptionMeta.getAttribute("content").split('·')[0];
    
    let ytMusicURL = "https://music.youtube.com/search?q=" + artist + " " + title;
    
    var confirmation = window.confirm("Do you want to redirect and search this url with YTMusic?");
    if (confirmation) {
        window.location.href = window.location.href = ytMusicURL;
    }
} 