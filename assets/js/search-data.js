// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "CV of Aaron J. Li — PhD student in Computer Science at UC Berkeley.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/CV.pdf";
          },
        },{id: "news-our-paper-improving-prototypical-visual-explanations-with-r3-was-accepted-to-icml-2024",
          title: 'Our paper “Improving Prototypical Visual Explanations with R3” was accepted to ICML 2024!...',
          description: "",
          section: "News",},{id: "news-our-paper-certifying-llm-safety-against-adversarial-prompting-was-accepted-to-colm-2024",
          title: 'Our paper “Certifying LLM Safety against Adversarial Prompting” was accepted to COLM 2024!...',
          description: "",
          section: "News",},{id: "news-i-am-excited-to-start-my-phd-in-computer-science-at-uc-berkeley-advised-by-prof-bin-yu-and-prof-ion-stoica",
          title: 'I am excited to start my PhD in Computer Science at UC Berkeley,...',
          description: "",
          section: "News",},{id: "news-our-paper-more-rlhf-more-trust-was-accepted-to-iclr-2025-as-an-oral-presentation-top-1-8",
          title: 'Our paper “More RLHF, More Trust?” was accepted to ICLR 2025 as an...',
          description: "",
          section: "News",},{id: "news-our-paper-on-adversarial-robustness-of-concept-representations-in-sparse-autoencoders-was-accepted-to-eacl-2026",
          title: 'Our paper on adversarial robustness of concept representations in sparse autoencoders was accepted...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%61%72%6F%6E%6A%6C%69@%62%65%72%6B%65%6C%65%79.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/aaron-jx-li", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/aaronjxli5351", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=mO5lTo4AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
