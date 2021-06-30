const routes = {
    '': 'home.html',
    '/': 'home.html',
    '#/home': 'home.html',
    '#/meatloaf': 'meatloaf.html',
    '#/pecanpie': 'pecanpie.html',
    '#/shrimpscampi': 'shrimpscampi.html',
}

function router () {
    console.log(location.hash);
    
    let link = window.location.hash;
    let route = routes[link];

    if (route) loadPage(route);
}

router();

async function loadPage(route) {
    const response = await fetch(route);
    const content = await response.text();
    const element = document.getElementById('content');

    element.innerHTML = content;
};

window.addEventListener('hashchange', router);