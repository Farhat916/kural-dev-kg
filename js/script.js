"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // Обновляем год в элементах, где указан data-current-year.
    const yearElements = document.querySelectorAll("[data-current-year]");
    yearElements.forEach((element) => {
        element.textContent = new Date().getFullYear();
    });
    // Подсвечиваем ссылку текущей страницы в навигации.
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navigation a").forEach((link) => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.setAttribute("aria-current", "page");
        }
    });
    // Показываем год в консоли для проверки загрузки скрипта.
    console.info("KURAL DEV KG: JavaScript загружен.");
});