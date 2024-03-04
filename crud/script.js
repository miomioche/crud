const body = document.body;
const sidebar = document.querySelector('.main-sidebar');
const openSidebar = document.querySelector('#openSidebar');
const closeSidebar = document.querySelector('#closeSidebar');
const toggleTheme = document.querySelector('.toggle-theme');
const light = toggleTheme.children[0];
const dark = toggleTheme.children[1];
const inputFields = document.querySelectorAll('.percentage p');

openSidebar.addEventListener('click', openSidebarFunction);
closeSidebar.addEventListener('click', closeSidebarFunction);
toggleTheme.addEventListener('click', changeTheme);

function openSidebarFunction() {
    sidebar.style.left = '0%';
}

function closeSidebarFunction() {
    sidebar.style.left = '-100%';
}

function changeTheme() {
    if (body.classList.contains('dark-mode')) {
        lightMode();
    } else if (!body.classList.contains('dark-mode')) {
        darkMode();
    }
}

inputFields.forEach((e, i) => {
    let val = parseInt(e.textContent);
    console.log(val);
    let circle = document.getElementById(`circle${i + 1}`);
    let r = circle.getAttribute('r');
    let circ = Math.PI * 2 * r;
    let counter = 0;
    let fillValue = (circ * (100 - val)) / 100;
    setInterval(() => {
        if (counter === val) {
            clearInterval();
        } else {
            counter += 1;
            e.innerText = counter + '%';
            circle.style.strokeDashoffset = fillValue;
        }
    }, 1000 / val);
});

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode();
}

function darkMode() {
    body.classList.add('dark-mode');
    light.classList.remove('active');
    dark.classList.add('active');
}

function lightMode() {
    body.classList.remove('dark-mode');
    dark.classList.remove('active');
    light.classList.add('active');
}

function confirmDeleteProduct(index) {
    // Demande de confirmation
    if (confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
        // Si l'utilisateur clique sur OK, vous pouvez exécuter le code de suppression ici
        // Par exemple, supprimer l'élément du tableau ou effectuer une autre action de suppression
        console.log("Suppression confirmée pour l'élément à l'index :", index);
    } else {
        // Si l'utilisateur clique sur Annuler, ne rien faire ou afficher un message
        console.log("Suppression annulée pour l'élément à l'index :", index);
    }
}
