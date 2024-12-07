export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Noushad',
    subtitle: 'Walking on Water',
    description: 'Portfolio',

    hero: {

        text: `I'm Noushad, a full-stack developer with a passion for the uncharted horizons of Web3 and blockchain innovation. 
               My journey bridges creativity and technology, as I strive to craft intuitive, secure, and aesthetic digital solutions. 
               I believe in the synergy of code, design, and user experience to create impactful products. 
               Explore my coding adventures on <a href="https://github.com/0xNoushad" target="_blank" rel="noopener noreferrer">GitHub</a> 
               or connect with me on <a href="https://x.com/0xNoushad" target="_blank" rel="noopener noreferrer">Twitter/X</a> to join the journey.`,
    },

    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'X/Twitter',
            href: 'https://x.com/0xNoushad'
        },
        {
            text: 'Github',
            href: 'https://Github.com/0xNoushad'
        }
    ],

    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
