import navbar from "./Component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();


(() => {
    let password = document.querySelector('.password');
    let helperText = {
        charLength: document.querySelector('.helper-text .length'),
        lowercase: document.querySelector('.helper-text .lowercase'),
        uppercase: document.querySelector('.helper-text .uppercase'),
        special: document.querySelector('.helper-text .special')
    };

    let pattern = {
        charLength: () => {
            if (password.value.length >= 8) {
                return true;
            }
        },
        lowercase: () => {
            let regex = /^(?=.*[a-z]).+$/;

            if (regex.test(password.value)) {
                return true;
            }
        },
        uppercase: () => {
            let regex = /^(?=.*[A-Z]).+$/;

            if (regex.test(password.value)) {
                return true;
            }
        },
        special: () => {
            let regex = /^(?=.*[0-9_\W]).+$/;

            if (regex.test(password.value)) {
                return true;
            }
        }
    };
    password.addEventListener('keyup', () => {
        patternTest(pattern.charLength(), helperText.charLength);
        patternTest(pattern.lowercase(), helperText.lowercase);
        patternTest(pattern.uppercase(), helperText.uppercase);
        patternTest(pattern.special(), helperText.special);
        if (hasClass(helperText.charLength, 'valid') &&
            hasClass(helperText.lowercase, 'valid') &&
            hasClass(helperText.uppercase, 'valid') &&
            hasClass(helperText.special, 'valid')
        ) {
            addClass(password.parentElement, 'valid');
        }
        else {
            removeClass(password.parentElement, 'valid');
        }
    });

    let patternTest = (pattern, response) => {
        if (pattern) {
            addClass(response, 'valid');
        }
        else {
            removeClass(response, 'valid');
        }
    }

    let addClass = (el, className) => {
        if (el.classList) {
            el.classList.add(className);
        }
        else {
            el.className += ' ' + className;
        }
    }

    let removeClass = (el, className) => {
        if (el.classList)
            el.classList.remove(className);
        else
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    let hasClass = (el, className) => {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        }
    }
})();

let submit = () => {
    evevt.preventDefault();
    let Submission = document.getElementById("submit");
    Submission.addEventListener("submit", () => {
        window.location.href = "../signup.html";
    });
}

document.getElementById("LoGoo").addEventListener("click", () => {
    window.location.href = "../home-page.html";
})