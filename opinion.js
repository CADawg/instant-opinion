(async function () {
    const q$ = e => document.querySelectorAll(e);

    const instantOpinionURL = "https://instant-opinion.dbuidl.com/votes/" + window.location.hostname;

    const opinions = q$(".instant-opinion");

// Font awesome icons (all from the free set)
    const thumbsUp = `<svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M128 447.1V223.1c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 479.1 128 465.6 128 447.1zM512 224.1c0-26.5-21.48-47.98-48-47.98h-146.5c22.77-37.91 34.52-80.88 34.52-96.02C352 56.52 333.5 32 302.5 32c-63.13 0-26.36 76.15-108.2 141.6L178 186.6C166.2 196.1 160.2 210 160.1 224c-.0234 .0234 0 0 0 0L160 384c0 15.1 7.113 29.33 19.2 38.39l34.14 25.59C241 468.8 274.7 480 309.3 480H368c26.52 0 48-21.47 48-47.98c0-3.635-.4805-7.143-1.246-10.55C434 415.2 448 397.4 448 376c0-9.148-2.697-17.61-7.139-24.88C463.1 347 480 327.5 480 304.1c0-12.5-4.893-23.78-12.72-32.32C492.2 270.1 512 249.5 512 224.1z"/></svg>`;
    const thumbsDown = `<svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96 32.04H32c-17.67 0-32 14.32-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V64.03C128 46.36 113.7 32.04 96 32.04zM467.3 240.2C475.1 231.7 480 220.4 480 207.9c0-23.47-16.87-42.92-39.14-47.09C445.3 153.6 448 145.1 448 135.1c0-21.32-14-39.18-33.25-45.43C415.5 87.12 416 83.61 416 79.98C416 53.47 394.5 32 368 32h-58.69c-34.61 0-68.28 11.22-95.97 31.98L179.2 89.57C167.1 98.63 160 112.9 160 127.1l.1074 160c0 0-.0234-.0234 0 0c.0703 13.99 6.123 27.94 17.91 37.36l16.3 13.03C276.2 403.9 239.4 480 302.5 480c30.96 0 49.47-24.52 49.47-48.11c0-15.15-11.76-58.12-34.52-96.02H464c26.52 0 48-21.47 48-47.98C512 262.5 492.2 241.9 467.3 240.2z"/></svg>`;
    const thumbsUpLight = `<svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z"/></svg>`;
    const thumbsDownLight = `<svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M128 288V64.03c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 320 128 305.7 128 288zM481.5 229.1c1.234-5.092 1.875-10.32 1.875-15.64c0-22.7-11.44-43.13-29.28-55.28c.4219-3.015 .6406-6.076 .6406-9.122c0-22.32-11.06-42.6-28.83-54.83c-2.438-34.71-31.47-62.2-66.8-62.2h-52.53c-35.94 0-71.55 11.87-100.3 33.41L169.6 92.93c-6.285 4.71-9.596 11.85-9.596 19.13c0 12.76 10.29 24.04 24.03 24.04c5.013 0 10.07-1.565 14.38-4.811l36.66-27.51c20.48-15.34 45.88-23.81 71.5-23.81h52.53c10.45 0 18.97 8.497 18.97 18.95c0 3.5-1.11 4.94-1.11 9.456c0 26.97 29.77 17.91 29.77 40.64c0 9.254-6.392 10.96-6.392 22.25c0 13.97 10.85 21.95 19.58 23.59c8.953 1.671 15.45 9.481 15.45 18.56c0 13.04-11.39 13.37-11.39 28.91c0 12.54 9.702 23.08 22.36 23.94C456.2 266.1 464 275.2 464 284.1c0 10.43-8.516 18.93-18.97 18.93H307.4c-12.44 0-24 10.02-24 23.1c0 4.038 1.02 8.078 3.066 11.72C304.4 371.7 312 403.8 312 411.2c0 8.044-5.984 20.79-22.06 20.79c-12.53 0-14.27-.9059-24.94-28.07c-24.75-62.91-61.74-99.9-80.98-99.9c-13.8 0-24.02 11.27-24.02 23.99c0 7.041 3.083 14.02 9.016 18.76C238.1 402 211.4 480 289.9 480C333.8 480 360 445 360 411.2c0-12.7-5.328-35.21-14.83-59.33h99.86C481.1 351.9 512 321.9 512 284.1C512 261.8 499.9 241 481.5 229.1z"/></svg>`;


    // make a request to a certain URL and return the data (decoded from json) or false if failed
    async function makeRequest(url, method = "GET") {
        try {
            const response = await fetch(url, {
                method: method
            });
            return await response.json();
        } catch (error) {
            return false;
        }
    }

    async function vote(vote, opinion, progress) {
        const json = await makeRequest(`${instantOpinionURL}/${vote}`, "POST");

        if (json && "percent" in json) {
            opinion.querySelector(".instant-opinion-percent").innerText = json.percent + "%";
            progress.style.width = json.percent + "%";
        }
    }

    async function getPercent() {
        const json = await makeRequest(`${instantOpinionURL}`);

        if (json && "percent" in json) return json.percent;

        return false;
    }

// loop through elements
    for (let i = 0; i < opinions.length; i++) {
        const opinion = opinions[i];
        const opinionArea = opinion.querySelector(".instant-opinion-opinion");
        const dropdownArea = opinion.querySelector(".instant-opinion-dropdown");
        console.log(i);

        if (i === 0) {
            const css = document.createElement("style");
            css.innerText = ".instant-opinion{box-sizing:border-box;position:fixed;bottom:50px;right:0;z-index:9999;background-color:white;height:auto;border-bottom-left-radius:25px;border-top-left-radius:25px;padding:5px 10px 5px 12px;box-shadow:0 0 5px 5px rgba(0,0,0,0.5)}.instant-opinion.hide_kinda{transition-duration:1s;margin-right:-130px}.instant-opinion .instant-opinion-percent{font-size:14px;font-family:Arial, sans-serif;color:white;line-height:16px;top:0;left:0;bottom:0;right:0;position:absolute;text-align:center;font-weight:bold;margin:2px}.instant-opinion .instant-opinion-progress{background-color:red;user-select:none;height:18px;position:relative;border-radius:5px;overflow:hidden;margin-left:5px}.instant-opinion .instant-opinion-progress .instant-opinion-progress-progress{height:100%;background-color:green}.instant-opinion .instant-opinion-dropdown.show_happy{display:block}.instant-opinion.hide_kinda:hover{margin-right:0}.instant-opinion *{box-sizing:border-box}.instant-opinion .instant-opinion-opinion .instant-opinion-thumbs{display:flex;flex-direction:row;justify-content:space-around;flex-wrap:wrap}.instant-opinion .instant-opinion-opinion svg{height:40px;width:40px}.instant-opinion .instant-opinion-opinion span{display:inline-block}.instant-opinion .instant-opinion-explainer{font-family:Arial, sans-serif;text-align:center;padding-left:5px;font-size:14px;user-select:none;margin:0}.instant-opinion .instant-opinion-dropdown p{font-family:Arial, sans-serif;text-align:left;font-size:14px;margin:0}.instant-opinion .instant-opinion-dropdown p a{color:dodgerblue;text-decoration:none}.instant-opinion .instant-opinion-dropdown p a:visited{color:dodgerblue}@media screen and (max-width: 600px){.instant-opinion{display:none}}";
            opinion.appendChild(css);
        }

        // add icons
        const thumbsUpIcon = document.createElement("span");
        thumbsUpIcon.classList.add("instant-opinion-thumbs-up");
        thumbsUpIcon.innerHTML = thumbsUpLight;

        const thumbsDownIcon = document.createElement("span");
        thumbsDownIcon.classList.add("instant-opinion-thumbs-down");
        thumbsDownIcon.innerHTML = thumbsDownLight;

        const percent = await getPercent();

        opinionArea.innerHTML = "<p class='instant-opinion-explainer'>Rate This Website</p>" +
            "<div class='instant-opinion-progress'><div class='instant-opinion-progress-progress' style='width: " + percent + "%;'></div>" + (percent !== false ? "<p class='instant-opinion-percent'>" + percent + "%</p>" : "<p class='instant-opinion-percent'>50%</p>") + "</div>";

        const progress = opinionArea.querySelector(".instant-opinion-progress-progress");
        progress.style.width = (percent === false ? "50" : percent) + "%";

        const thumbsDiv = document.createElement("div");
        thumbsDiv.classList.add("instant-opinion-thumbs");
        opinionArea.appendChild(thumbsDiv);

        thumbsDiv.appendChild(thumbsUpIcon);
        thumbsDiv.appendChild(thumbsDownIcon);

        setTimeout(() => {
            opinion.classList.add("hide_kinda");
        }, 2500);

        let isClickedLike = false;
        let isClickedDislike = false;

        function checkUpdateNecessary() {
            if (isClickedLike) {
                dropdownArea.classList.add("show_happy")
            } else {
                dropdownArea.classList.remove("show_happy")
            }
        }

        // add event listeners
        thumbsUpIcon.addEventListener("click", async e => {
            e.preventDefault();
            e.stopPropagation();

            if (isClickedLike) {
                isClickedLike = false;
                thumbsUpIcon.innerHTML = thumbsUpLight;
                checkUpdateNecessary();

                await vote("0", opinion, progress);
                return;
            }

            isClickedLike = true;
            isClickedDislike = false;

            thumbsUpIcon.innerHTML = thumbsUp;
            thumbsDownIcon.innerHTML = thumbsDownLight;
            checkUpdateNecessary();

            await vote("1", opinion, progress);
            return;
        });

        thumbsDownIcon.addEventListener("click", async e => {
            e.preventDefault()
            e.stopPropagation()

            if (isClickedDislike) {
                isClickedDislike = false;
                thumbsDownIcon.innerHTML = thumbsDownLight;
                checkUpdateNecessary();

                await vote("0", opinion, progress);
                return;
            }

            isClickedDislike = true;
            isClickedLike = false;

            thumbsDownIcon.innerHTML = thumbsDown;
            thumbsUpIcon.innerHTML = thumbsUpLight;
            checkUpdateNecessary();

            await vote("-1", opinion, progress);
            return;
        });
    }
})();
