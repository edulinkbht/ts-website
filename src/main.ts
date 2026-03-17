const app = document.getElementById("app");

function greet(name: string): string {
    return `Hello, ${name}! 🚀`;
}

if (app) {
    app.innerText = greet("Phuentx");
}
