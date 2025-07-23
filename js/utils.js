export function createRipple(e, el) {
    const rect = el.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = e.clientX - rect.left + "px";
    ripple.style.top = e.clientY - rect.top + "px";
    ripple.style.width = ripple.style.height =
        Math.max(rect.width, rect.height) + "px";
    el.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
}

export function generateRandomFilename(extension = "txt") {
    const date = new Date();
    const dateString = date.toISOString().slice(0, 10).replace(/-/g, "");
    const randomString = Math.random().toString(36).substring(2, 10);
    return `resume_${dateString}_${randomString}.${extension}`;
}
