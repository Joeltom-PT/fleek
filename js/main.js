        setTimeout(function() {
            fadeOutEffect("loader");
            document.getElementById("main-content").style.display = "block";
        }, 1000);

        function fadeOutEffect(id) {
            var fadeTarget = document.getElementById(id);
            var fadeEffect = setInterval(function() {
                if (!fadeTarget.style.opacity) {
                    fadeTarget.style.opacity = 1;
                }
                if (fadeTarget.style.opacity > 0) {
                    fadeTarget.style.opacity -= 0.05;
                } else {
                    clearInterval(fadeEffect);
                    fadeTarget.style.display = "none";
                }
            }, 50); 
        }
   