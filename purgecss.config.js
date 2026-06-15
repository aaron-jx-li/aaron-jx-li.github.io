module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: {
    pattern: /^(about-hero|about-hero-inner|about-hero-photo|about-hero-text|about-hero-name|about-hero-role|about-hero-affil|about-hero-socials|about-body|about-bio|about-interests|about-interests-label|interest-chip|about-pubs|about-section-title|pubs-footnote|pubs-note)/,
    greedy: true,
  },
};
