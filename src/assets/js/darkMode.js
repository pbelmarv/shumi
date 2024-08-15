if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
} else {
    localStorage.removeItem("theme");
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
}

const darkMode = () => {
    isDark = document.documentElement.classList;
    isDark.toggle("dark");
    localStorage.theme === "dark"
        ? (localStorage.theme = "light")
        : (localStorage.theme = "dark");
};
