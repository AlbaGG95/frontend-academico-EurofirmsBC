(function () {
  var storageKey = "alba-dev-theme";
  var root = document.documentElement;
  var darkMedia = window.matchMedia("(prefers-color-scheme: dark)");

  function getStoredTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function getThemePreference() {
    var storedTheme = getStoredTheme();

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return darkMedia.matches ? "dark" : "light";
  }

  function updateToggle(theme) {
    var button = document.querySelector("[data-theme-toggle]");

    if (!button) {
      return;
    }

    var isDark = theme === "dark";
    var icon = button.querySelector(".theme-toggle-icon");
    var text = button.querySelector(".theme-toggle-text");
    var label = isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro";

    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);

    if (icon) {
      icon.textContent = isDark ? "L" : "D";
    }

    if (text) {
      text.textContent = isDark ? "Modo claro" : "Modo oscuro";
    }
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    updateToggle(theme);
  }

  function handleSystemChange(event) {
    if (getStoredTheme()) {
      return;
    }

    applyTheme(event.matches ? "dark" : "light");
  }

  applyTheme(getThemePreference());

  if (darkMedia.addEventListener) {
    darkMedia.addEventListener("change", handleSystemChange);
  } else if (darkMedia.addListener) {
    darkMedia.addListener(handleSystemChange);
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!document.querySelector("[data-theme-toggle]")) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "theme-toggle";
      button.dataset.themeToggle = "true";
      button.innerHTML =
        '<span class="theme-toggle-icon" aria-hidden="true"></span><span class="theme-toggle-text"></span>';

      button.addEventListener("click", function () {
        var nextTheme = root.dataset.theme === "dark" ? "light" : "dark";

        try {
          localStorage.setItem(storageKey, nextTheme);
        } catch (error) {
        }

        applyTheme(nextTheme);
      });

      document.body.appendChild(button);
    }

    applyTheme(getThemePreference());
  });
})();
