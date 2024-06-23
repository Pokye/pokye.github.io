const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

// Função para salvar o modo atual no localStorage
const saveModeToLocalStorage = (mode) => {
    localStorage.setItem("mode", mode);
}

// Função para carregar o modo do localStorage
const loadModeFromLocalStorage = () => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        body.classList.add("dark");
        modeText.innerText = "Claro";
    } else {
        body.classList.remove("dark");
        modeText.innerText = "Escuro";
    }
}

// Carrega o modo ao carregar a página
loadModeFromLocalStorage();

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Claro";
        saveModeToLocalStorage("dark");
    } else {
        modeText.innerText = "Escuro";
        saveModeToLocalStorage("light");
    }
});