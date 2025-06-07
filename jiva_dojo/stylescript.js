function someimportantstyles(params) {
    const body = document.body;

Object.assign(body.style, {
    display: "flex",
    backgroundColor: "black",
    color: "white",
    fontFamily: "monospace",
    fontSize: "16px",
    margin: "0",
    flex: "0",
    textAlign: "center",
    padding: "20px",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw"
});

body.innerHTML = "<h1>Can you pay me :}</h1>";
}

