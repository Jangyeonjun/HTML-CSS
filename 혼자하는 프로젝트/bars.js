 
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll("#birthday").forEach(section => {
                section.addEventListener("click", () => {
                    let additionalContent = section.querySelector(".additional-content");
                    if (additionalContent) {
                        additionalContent.style.display = additionalContent.style.display === "block" ? "none" : "block";
                    }
                });
            });
        });

         
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll("#exercise_1").forEach(section => {
                section.addEventListener("click", () => {
                    let additionalContent = section.querySelector(".exercise_1-content");
                    if (additionalContent) {
                        additionalContent.style.display = additionalContent.style.display === "block" ? "none" : "block";
                    }
                });
            });
        });

         
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll("#exercise_2").forEach(section => {
                section.addEventListener("click", () => {
                    let additionalContent = section.querySelector(".exercise_2-content");
                    if (additionalContent) {
                        additionalContent.style.display = additionalContent.style.display === "block" ? "none" : "block";
                    }
                });
            });
        });

         
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll("#exercise_3").forEach(section => {
                section.addEventListener("click", () => {
                    let additionalContent = section.querySelector(".exercise_3-content");
                    if (additionalContent) {
                        additionalContent.style.display = additionalContent.style.display === "block" ? "none" : "block";
                    }
                });
            });
        });
    