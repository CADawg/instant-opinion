# Instant Opinion
## A small widget that lets visitors like and dislike your website (once per day, max)

Download it to your server and embed it like so (if in the same folder as your HTML)
```js
<script src="opinion.js"></script>
```

HTML Code For the embed. Dropdown can contain \<p\> tags (and \<a\> tags inside of \<p\> tags) to other services that should be shown to the user if they like the website.

```html
<div class="instant-opinion">
    <style>.instant-opinion-dropdown {display: none;}</style>
    <div class="instant-opinion-opinion"></div>
    <div class="instant-opinion-dropdown">
        <p>You might also like:</p>
        <p><a href="https://shitpoststatus.com" target="_blank" rel="noopener">Shitpost Status</a></p>
        <p><a href="https://babushkaspin.com" target="_blank" rel="noopener">Babushka Spin</a></p>
        <p><a href="https://featurefilms.co" target="_blank" rel="noopener">FeatureFilms.co</a></p>
        <p><a href="https://hotsingles.cyou" target="_blank" rel="noopener">HotSingles.cyou</a></p>
        <p>More dumb stuff:</p>
        <p><a href="https://github.com/Snaddyvitch-Dispenser#-ive-built" target="_blank" rel="noopener">My GitHub</a></p>
    </div>
</div>
```

![](https://cdn.discordapp.com/attachments/841444107879448586/988960822011260948/unknown.png)
