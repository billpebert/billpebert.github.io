const username = 'billpebert';
const linkList = document.querySelector('.link-list');
const linksSection = document.querySelector('.links');
const filterInput = document.querySelector('.filter-links');

const buildIcon = (icons) => {
    // console.log(icons)
    return icons.map(icon => {
        return `<span class='${icon.name} ${icon.color} text-2xl'></span>`;
    }).join(' ')
};


const buildUrl = (link) => {
    if (link.url.includes('http')) {
        return link.url;
    }
    return 'https://github.com/' + username + '/' + link.url;
};

const buildLiveSiteUrl = (link) => {
    return `
        <a href="${link.liveSiteLink}" class="relative z-20 hover:underline decoration-sky-400 decoration-2" target="_blank">
            <i class="fa-brands fa-chrome text-white not-italic"></i>
            Live Site
        </a>
    `;
};

const displayLinks = (links) => {
    filterInput.classList.remove('hide');
    for (const link of links) {
        let listItem = document.createElement('li');
        listItem.classList.add('link');
        listItem.innerHTML = `
            <div class='flex flex-col items-center gap-4 relative'>
                <a href='${buildUrl(link)}' class='text-white absolute z-10 inset-0' target='_blank'>
                </a>
                <h3 class='text-xl font-medium text-white'>
                    ${buildIcon(link.icons)}
                    <br/> ${link.name}
                </h3>
                <div class="flex items-center gap-3">
                    ${buildLiveSiteUrl(link)}
                </div>
            </div>`;
        linkList.append(listItem);
    }
};

// dynamic search
filterInput.addEventListener('input', (e) => {
    const search = e.target.value;
    const links = document.querySelectorAll('.link');
    const searchLowerText = search.toLowerCase();

    for (const link of links) {
        const lowerText = link.innerText.toLowerCase();
        if (lowerText.includes(searchLowerText)) {
            link.classList.remove('hide');
        } else {
            link.classList.add('hide');
        }
    }
});

const links = [
    {
        name: 'Bapontar Frontend',
        url: 'fe-bapontar',
        icons: [
            { name: 'fa-brands fa-html5', color: 'text-orange-600' },
            { name: 'fa-brands fa-square-js', color: 'text-yellow-300' },
            { name: 'fa-brands fa-sass', color: 'text-pink-500' },
        ],
        liveSiteLink: 'https://bapontar.netlify.app/',
    },
    {
        name: 'Furniture App with Tailwindcss',
        url: 'luxspace-react',
        icons: [
            { name: 'fa-brands fa-html5', color: 'text-orange-600' },
            { name: 'fa-brands fa-square-js', color: 'text-yellow-300' },
            { name: 'fa-brands fa-react', color: 'text-sky-600' },
        ],
        iconColor: 'text-sky-600',
        liveSiteLink: 'https://bilpo-luxspace-react.netlify.app/',
    },
    {
        name: 'Bakery Store Frontend',
        url: 'fe-cherrybakery',
        icons: [
            { name: 'fa-brands fa-html5', color: 'text-orange-600' },
            { name: 'fa-brands fa-square-js', color: 'text-yellow-300' },
            { name: 'fa-brands fa-sass', color: 'text-pink-500' },
        ],
        liveSiteLink: 'https://bilpo-luxspace-react.netlify.app/',
    },
    {
        name: 'Imanuel - Building Shop',
        url: 'fe-imanuelonline',
        icons: [
            { name: 'fa-brands fa-html5', color: 'text-orange-600' },
            { name: 'fa-brands fa-square-js', color: 'text-yellow-300' },
            { name: 'fa-brands fa-sass', color: 'text-pink-500' },
        ],
        liveSiteLink: 'https://toko-imanuel.netlify.app/',
    },
    {
        name: 'Landing Page Compette',
        url: 'fe-compette',
        icons: [
            { name: 'fa-brands fa-html5', color: 'text-orange-600' },
            { name: 'fa-brands fa-square-js', color: 'text-yellow-300' },
            { name: 'fa-brands fa-sass', color: 'text-pink-500' },
        ],
        liveSiteLink: 'https://fe-compette.netlify.app/',
    },
    {
        name: 'Landing Page Telepatia',
        url: 'fe-telepatia-sass',
        icons: [
            { name: 'fa-brands fa-html5', color: 'text-orange-600' },
            { name: 'fa-brands fa-square-js', color: 'text-yellow-300' },
            { name: 'fa-brands fa-sass', color: 'text-pink-500' },
        ],
        liveSiteLink: 'https://fe-telepatia.netlify.app/',
    },
    {
        name: 'Landing Page Broperti',
        url: 'fe-broperti',
        icons: [
            { name: 'fa-brands fa-html5', color: 'text-orange-600' },
            { name: 'fa-brands fa-square-js', color: 'text-yellow-300' },
            { name: 'fa-brands fa-sass', color: 'text-pink-500' },
        ],
        liveSiteLink: 'https://fe-broperti.netlify.app/',
    },
];

displayLinks(links);
