export function row(content, styles = '') {
    return `<div style="${styles}">${content}</div>`
}

export function col(content) {
    return `<div class="grid grid-cols-3 gap-2 mt-2">${content}</div>`
}

export function toCss(styles = {}) {
    if(typeof styles === 'string') return  styles
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}

export function createRipple(e, el) {
    const rect = el.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
    el.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
}