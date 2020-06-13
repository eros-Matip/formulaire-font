const $ = document;

$.addEventListener("DOMContentLoaded", () => {
    console.log("page chargée");

    $.addEventListener("click", (event) => {
        console.log("clic");
        console.log(event);
    });

    $.querySelector(".close").addEventListener("click", () => {
        event.preventDefault();
        $.querySelector("#contactForm").classList.toggle("hidden");
    });

    $.querySelector("#contactForm").addEventListener("submit", async(event) => {
        event.preventDefault();
        $.querySelector("#contactForm").classList.toggle("hidden");

        const data = {
            firstname: $.querySelector("#firstname").value,
            lastname: $.querySelector("#lastname").value,
            email: $.querySelector("#email").value,
            subject: $.querySelector("#subject").value,
            message: $.querySelector("#message").value,
        };
        console.log(data);

        const response = await axios.post("http://localhost:3000/formulaire", data);
        console.log(response);
    });
});