import { Breakpoint } from "../model/types/breakpoint";

export function applyBreakpoints(element: HTMLElement, breakpoints: Breakpoint[], compareToWindow = true): ResizeObserver {

    const observer = new ResizeObserver((entries) => {
        let width = compareToWindow ? window.innerWidth : entries[0].contentRect.width
        let height = compareToWindow ? window.innerHeight : entries[0].contentRect.height
        const target = entries[0].target;

        for (const range of breakpoints) {
            if (range.fromWidth <= width &&
                range.toWidth >= width &&
                range.fromHeight <= height &&
                range.toHeight >= height &&
                width / height >= range.widthHeightRatioFrom &&
                width / height < range.widthHeightRatioTo) {

                target.classList.add(range.className);
                if (range.callback) range.callback();
            } else {
                target.classList.remove(range.className);
            }
        }
    });
    observer.observe(element);

    return observer;
}

export function lockBodyScroll() {
    document.body.style.overflow = 'hidden';
}

export function unlockBodyScroll() {
    document.body.style.overflow = '';
}

export function lockBodyUsingHeight() {
    document.body.style.overflow = 'hidden';
    document.body.style.height = `calc(var(--vh, 1vh) * 100)`;
}

export function unlockBodyUsingHeight() {
    document.body.style.overflow = '';
    document.body.style.height = '';
}
