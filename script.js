const username = "billpebert";
const linkList = document.querySelector(".link-list");
const linksSection = document.querySelector(".links");
const filterInput = document.querySelector(".filter-links");

const buildIcon = (icons) => {
	// console.log(icons)
	return icons
		.map((icon) => {
			return icon.color == ""
				? `<img src="./assets/image/tools/${icon.name}.svg" class="h-6 w-auto shadow-none border-none" title="${icon.name}" alt="${icon.name}" />`
				: `<span class='${icon.name} ${icon.color} text-[24px]'></span>`;
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
        <a href="${link.liveSiteLink}" class="relative z-20 hover:underline decoration-blue-400 decoration-2 text-xs sm:text-sm text-slate-500" target="_blank">
			Live Site
        </a>
    `;
};

const displayLinks = (links) => {
	filterInput.classList.remove("!hidden");
	for (const link of links) {
		let listItem = document.createElement("li");
		listItem.classList.add("contentItem");
		listItem.innerHTML = `
			<h3>
				<a href='${buildUrl(
					link.githubRepo
				)}' class='text-sm sm:text-base xl:text-xl font-medium dark:text-white text-slate-700 hover:underline decoration-blue-400 underline-offset-4' target='_blank'>
					${link.name}
				</a>
			</h3>
			<div class='flex justify-between flex-col md:flex-row gap-3 items-end w-full mt-auto'>
				<div class='flex gap-3 items-center'>
					${buildIcon(link.icons)}
				</div>
				${buildLiveSiteUrl(link)}
			</div>`;
		linkList.append(listItem);
	}
};

// dynamic search
filterInput.addEventListener("input", (e) => {
	const search = e.target.value;
	const links = document.querySelectorAll(".contentItem");
	const searchLowerText = search.toLowerCase();

	for (const link of links) {
		const lowerText = link.innerText.toLowerCase();
		if (lowerText.includes(searchLowerText)) {
			link.classList.remove("!hidden");
		} else {
			link.classList.add("!hidden");
		}
	}
});

const links = [
	{
		name: "YTA Nusantara Landing Page",
		githubRepo: "yta-nusantara-html",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://yta-nusantara.netlify.app/",
	},
	{
		name: "Tickety Landing Page",
		githubRepo: "",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://tickety-html.netlify.app/",
	},
	{
		name: "Rental Mobil Manado",
		githubRepo: "",
		icons: [
			{ name: "vuejs", color: "" },
			{ name: "tailwindcss", color: "" },
			{ name: "laravel-logomark.min", color: "" },
		],
		liveSiteLink: "https://celerentmanado.com/",
	},
	{
		name: "NiagaHoster Blog",
		githubRepo: "niagahoster-blog",
		icons: [
			{ name: "reactjs", color: "" },
			{ name: "tailwindcss", color: "" },
			{ name: "flowbite", color: "" },
		],
		liveSiteLink: "https://niagahoster-blog.netlify.app/",
	},
	{
		name: "Webstack Landing Page",
		githubRepo: "webstack-dev-html",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://webstack-dev.netlify.app/",
	},
	{
		name: "To Do List App",
		githubRepo: "todo-app-reactjs",
		icons: [
			{ name: "reactjs", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://todo-app-reactjs-three.vercel.app/",
	},
	{
		name: "To Do List App",
		githubRepo: "todo-list-vue",
		icons: [
			{ name: "vuejs", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://billpebert-todo-list.netlify.app/",
	},
	{
		name: "ECommerce UI Kit",
		githubRepo: "billkit-frontend",
		icons: [
			{ name: "tailwindcss", color: "" },
			{ name: "vuejs", color: "" },
		],
		liveSiteLink: "https://billkit-frontend.netlify.app/",
	},
	{
		name: "UpSales - POS",
		githubRepo: "",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
			{ name: "vuejs", color: "" },
		],
		liveSiteLink: "https://upsales-html.netlify.app/",
	},
	{
		name: "Dewata - Desa Digital Dashboard",
		githubRepo: "",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://desadigital-html.netlify.app/",
	},
	{
		name: "Sewa Mobil Frontend",
		githubRepo: "sewa-mobil-html",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
			{ name: "vuejs", color: "" },
		],
		liveSiteLink: "https://sewa-mobil-html.netlify.app/",
	},
	{
		name: "Simple Blog with Redux",
		githubRepo: "react-redux-toolkit",
		icons: [
			{ name: "reactjs", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://bilpo-redux-blog.netlify.app/",
	},
	{
		name: "Bapontar Frontend",
		githubRepo: "fe-bapontar",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "sass", color: "" },
		],
		liveSiteLink: "https://bapontar.netlify.app/",
	},
	{
		name: "Furniture App",
		githubRepo: "luxspace-react",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "reactjs", color: "" },
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
			{ name: "javascript", color: "" },
			{ name: "sass", color: "" },
		],
		liveSiteLink: "https://bilpo-luxspace-react.netlify.app/",
	},
	{
		name: "Imanuel - Building Shop",
		githubRepo: "fe-imanuelonline",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "sass", color: "" },
		],
		liveSiteLink: "https://toko-imanuel.netlify.app/",
	},
	{
		name: "Landing Page Compette",
		githubRepo: "fe-compette",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "sass", color: "" },
		],
		liveSiteLink: "https://fe-compette.netlify.app/",
	},
	{
		name: "Cloning ~ BuildWith Angga Landing Page",
		githubRepo: "bwa-platform-frontend",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "reactjs", color: "" },
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
			{ name: "javascript", color: "" },
			{ name: "sass", color: "" },
		],
		liveSiteLink: "https://fe-telepatia.netlify.app/",
	},
	{
		name: "Landing Page Broperti",
		githubRepo: "fe-broperti",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "sass", color: "" },
		],
		liveSiteLink: "https://fe-broperti.netlify.app/",
	},
	// {
	// 	name: "getshayna.com content",
	// 	githubRepo: "fe-broperti",
	// 	icons: [
	// 		{ name: "fa-brands fa-html5", color: "text-orange-600" },
	// 		{ name: "javascript", color: "" },
	// 		{ name: "tailwindcss", color: "" },
	// 	],
	// 	liveSiteLink: "https://getshayna-element.netlify.app/",
	// },
	{
		name: "Crypto NFT",
		githubRepo: "crypto-tailwind",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://crypto-tailwind.netlify.app/",
	},
	{
		name: "Workly Business",
		githubRepo: "fe-workly-tailwind",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://workly-tailwind.netlify.app/",
	},
	{
		name: "Givmoney Finance Management",
		githubRepo: "fe-givmoney-tailwind",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://givmoney-tailwind.netlify.app/",
	},
	{
		name: "HomeStay Landing Page",
		githubRepo: "fe-house-tailwind",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://house-tailwind.netlify.app/",
	},
	{
		name: "Dropshipping Landing Template",
		githubRepo: "maisya-tailwind3",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://maisya.netlify.app/",
	},
	{
		name: "Semina Education",
		githubRepo: "semina-frontend",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://semina.netlify.app/",
	},
	{
		name: "Dashboard Moonton",
		githubRepo: "moonton-template",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://moonton-template.netlify.app/",
	},
	{
		name: "Showcase NFT",
		githubRepo: "showcase-frontend-tailwind",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://planetary-nft.netlify.app/",
	},
	{
		name: "Cube Landing Page",
		githubRepo: "cube-landing-reactjs",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "reactjs", color: "" },
		],
		liveSiteLink: "https://cube-landing-page.netlify.app",
	},
	{
		name: "Resto Landing Page",
		githubRepo: "cube-landing-reactjs",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "sass", color: "" },
		],
		liveSiteLink: "https://resto-bwa-challenge.netlify.app/",
	},
	{
		name: "Foodyar Landing Page",
		githubRepo: "foodyar-landing-tailwind",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://billpebert.github.io/foodyar-landing-tailwind/",
	},
	{
		name: "Dashboard HRIS - PowerHuman",
		githubRepo: "powerhuman-tailwind",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://billpebert.github.io/powerhuman-tailwind/",
	},
	{
		name: "Travel - Travland",
		githubRepo: "bwa-elements/tree/main/travland",
		icons: [
			{ name: "fa-brands fa-html5", color: "text-orange-600" },
			{ name: "javascript", color: "" },
			{ name: "tailwindcss", color: "" },
		],
		liveSiteLink: "https://getshayna-element.netlify.app/travland/",
	},
];

displayLinks(links);
