document.head.appendChild(FueJS.createElement("style" , {
    type: "text/css",
    id: "my-style",
}, `
    .submit-button: {
        width: 50%;
        margin: auto;
    }
`))

document.getElementById("root").append(
    FueJS.createElement("div" , {
        style: {
            display: "flex",
            width: "100vw",
            height: "100vh",
            background: "url('/image/background.jpg')",
            backgroundSize: "cover",
            justifyContent: "center",
            alignItems: "center"
        },
        id: "container"
    }, FueJS.createElement("form",{
        style: {
            background: "#FFF",
            width: "350px",
            borderRadius: "5px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            padding: "20px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
        },
        id: "login-card",
        onsubmit: event =>{
            event.preventDefault();
            const data = FueJS.getFormData(event.target);
            debugger
        }
    }, [
        FueJS.createElement("h1", null, "Login"), //#username (h1 tag)
        FueJS.createElement("input", {
            type: "text",
            placeholder: "username",
            className: "input",
            id: "username",
            name: "username",
        }), //#username
        FueJS.createElement("input", {
            type: "password",
            placeholder: "password",
            className: "input",
            id: "password",
            name: "password",
        }), //#password
        FueJS.createElement("button", {
            type: "submit",
            className: "submit-button",
            style: {
                width: "100px",
                height: "30px",
                borderRadius: "5px",
                outline: "none",
                background: "#eeeeee",
                marginLeft: "100px",
            },
        }, "login"), //submit-button
    ] //#login-card children
    ) //#login-card
    ) //#container
)