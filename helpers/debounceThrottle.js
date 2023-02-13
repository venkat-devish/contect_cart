export const debounce = function debounce(fn, delay) {
    let timer;
    return function (args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(args);
        }, delay);
    };
}

export const throttle = function throttle(fn, delay) {
    let pause;
    let waitingArgs;

    const loadForWaiting = () => {
        if (waitingArgs === null) {
            pause = false;
        } else {
            fn(waitingArgs);
            waitingArgs = null;
            setTimeout(loadForWaiting, delay)
        }
    }
    return function (args) {
        if (pause) {
            waitingArgs = args
            return;
        };

        fn(args);
        pause = true

        setTimeout(loadForWaiting, delay)
    }
}