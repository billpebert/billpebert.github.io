const username = "billpebert";
const linkList = document.querySelector(".link-list");
const linksSection = document.querySelector(".links");
const filterInput = document.querySelector(".filter-links");

const buildIcon = (icons) => {
  // console.log(icons)
  return icons
    .map((icon) => {
      return icon.name == "tailwindcss"
        ? '<img src="./assets/image/tailwind-logomark.svg" class="w-7 shadow-none border-none"/>'
        : `<span class='${icon.name} ${icon.color} text-2xl'></span>`;
    })
    .join(" ");
};

const buildUrl = (github) => {
  if (github.includes("http")) {
    return github;
  }
  return "https://github.com/" + username + "/" + github;
};

const buildLiveSiteUrl = (link) => {
  return `
        <a href="${link.liveSiteLink}" class="relative z-20 hover:underline decoration-sky-400 decoration-2" target="_blank">
            <i class="fa-brands fa-chrome dark:text-white text-slate-700 not-italic"></i>
            Live Site
        </a>
    `;
};

const displayLinks = (links) => {
  filterInput.classList.remove("hide");
  for (const link of links) {
    let listItem = document.createElement("li");
    listItem.classList.add("link");
    listItem.innerHTML = `
            <div class='flex flex-col items-center gap-4 relative'>
                <a href='${buildUrl(
                  link.githubRepo
                )}' class='dark:text-white text-slate-700 absolute z-10 inset-0' target='_blank'>
                </a>
                <h3 class='text-xl font-semibold dark:text-white text-slate-700'>
                    <span class='flex justify-center gap-3'>
                        ${buildIcon(link.icons)}
                    </span>
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
filterInput.addEventListener("input", (e) => {
  const search = e.target.value;
  const links = document.querySelectorAll(".link");
  const searchLowerText = search.toLowerCase();

  for (const link of links) {
    const lowerText = link.innerText.toLowerCase();
    if (lowerText.includes(searchLowerText)) {
      link.classList.remove("hide");
    } else {
      link.classList.add("hide");
    }
  }
});

const links = [
  {
    name: "Bapontar Frontend",
    githubRepo: "fe-bapontar",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "fa-brands fa-sass", color: "text-pink-500" },
    ],
    liveSiteLink: "https://bapontar.netlify.app/",
  },
  {
    name: "Furniture App",
    githubRepo: "luxspace-react",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "fa-brands fa-react", color: "text-sky-600" },
      { name: "tailwindcss", color: "" },
    ],
    iconColor: "text-sky-600",
    liveSiteLink: "https://bilpo-luxspace-react.netlify.app/",
  },
  {
    name: "Bakery Store Frontend",
    githubRepo: "fe-cherrybakery",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "fa-brands fa-sass", color: "text-pink-500" },
    ],
    liveSiteLink: "https://bilpo-luxspace-react.netlify.app/",
  },
  {
    name: "Imanuel - Building Shop",
    githubRepo: "fe-imanuelonline",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "fa-brands fa-sass", color: "text-pink-500" },
    ],
    liveSiteLink: "https://toko-imanuel.netlify.app/",
  },
  {
    name: "Landing Page Compette",
    githubRepo: "fe-compette",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "fa-brands fa-sass", color: "text-pink-500" },
    ],
    liveSiteLink: "https://fe-compette.netlify.app/",
  },
  {
    name: "Cloning ~ BuildWith Angga",
    githubRepo: "bwa-platform-frontend",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "fa-brands fa-react", color: "text-sky-600" },
      { name: "tailwindcss", color: "" },
    ],
    iconColor: "text-sky-600",
    liveSiteLink: "https://bwa-platform-frontend.netlify.app/",
  },
  {
    name: "Landing Page Telepatia",
    githubRepo: "fe-telepatia-sass",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "fa-brands fa-sass", color: "text-pink-500" },
    ],
    liveSiteLink: "https://fe-telepatia.netlify.app/",
  },
  {
    name: "Landing Page Broperti",
    githubRepo: "fe-broperti",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "fa-brands fa-sass", color: "text-pink-500" },
    ],
    liveSiteLink: "https://fe-broperti.netlify.app/",
  },
  {
    name: "getshayna.com content",
    githubRepo: "fe-broperti",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "tailwindcss", color: "" },
    ],
    liveSiteLink: "https://getshayna-element.netlify.app/",
  },
  {
    name: "Crypto NFT",
    githubRepo: "crypto-tailwind",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "tailwindcss", color: "" },
    ],
    liveSiteLink: "https://crypto-tailwind.netlify.app/",
  },
  {
    name: "Workly Business",
    githubRepo: "fe-workly-tailwind",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "tailwindcss", color: "" },
    ],
    liveSiteLink: "https://workly-tailwind.netlify.app/",
  },
  {
    name: "Givmoney Finance Management",
    githubRepo: "fe-givmoney-tailwind",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "tailwindcss", color: "" },
    ],
    liveSiteLink: "https://givmoney-tailwind.netlify.app/",
  },
  {
    name: "HomeStay Landing Page",
    githubRepo: "fe-house-tailwind",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "tailwindcss", color: "" },
    ],
    liveSiteLink: "https://house-tailwind.netlify.app/",
  },
  {
    name: "Dropshipping Web App Template",
    githubRepo: "maisya-tailwind3",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "tailwindcss", color: "" },
    ],
    liveSiteLink: "https://maisya.netlify.app/",
  },
  {
    name: "Semina Education",
    githubRepo: "semina-frontend",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "tailwindcss", color: "" },
    ],
    liveSiteLink: "https://semina.netlify.app/",
  },
  {
    name: "Dashboard Moonton - Streaming",
    githubRepo: "moonton-template",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "tailwindcss", color: "" },
    ],
    liveSiteLink: "https://moonton-template.netlify.app/",
  },
  {
    name: "Showcase NFT",
    githubRepo: "showcase-frontend-tailwind",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "tailwindcss", color: "" },
    ],
    liveSiteLink: "https://planetary-nft.netlify.app/",
  },
  {
    name: "Cube Landing Page",
    githubRepo: "cube-landing-reactjs",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "fa-brands fa-react", color: "text-sky-600" },
    ],
    liveSiteLink: "https://cube-landing-page.netlify.app",
  },
  {
    name: "Resto - BuildWith_Angga Challenge",
    githubRepo: "cube-landing-reactjs",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "fa-brands fa-sass", color: "text-pink-500" },
    ],
    liveSiteLink: "https://resto-bwa-challenge.netlify.app/",
  },
  {
    name: "Foodyar Landing Page",
    githubRepo: "foodyar-landing-tailwind",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "tailwindcss", color: "" },
    ],
    liveSiteLink: "https://billpebert.github.io/foodyar-landing-tailwind/",
  },
  {
    name: "Dashboard HRIS - PowerHuman",
    githubRepo: "powerhuman-tailwind",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "tailwindcss", color: "" },
    ],
    liveSiteLink: "https://billpebert.github.io/powerhuman-tailwind/",
  },
  {
    name: "Travel - Travland",
    githubRepo: "bwa-elements/tree/main/travland",
    icons: [
      { name: "fa-brands fa-html5", color: "text-orange-600" },
      { name: "fa-brands fa-square-js", color: "text-yellow-300" },
      { name: "tailwindcss", color: "" },
    ],
    liveSiteLink: "https://getshayna-element.netlify.app/travland/",
  },
];

displayLinks(links);
