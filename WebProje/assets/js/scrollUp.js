        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            var enUsteCikButton = document.getElementById("en-uste-cik");

            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                enUsteCikButton.style.display = "block";
            } else {
                enUsteCikButton.style.display = "none";
            }
        }

        function enUsteCik() {
            document.body.scrollTop = 0; // Safari
            document.documentElement.scrollTop = 0; 
        }