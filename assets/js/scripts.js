document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var navigation = document.querySelector('.site-nav');

    if (!toggle || !navigation) {
        return;
    }

    toggle.addEventListener('click', function () {
        var expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        navigation.classList.toggle('is-open', !expanded);
    });

    navigation.addEventListener('click', function (event) {
        if (event.target.closest('a')) {
            toggle.setAttribute('aria-expanded', 'false');
            navigation.classList.remove('is-open');
        }
    });
});
