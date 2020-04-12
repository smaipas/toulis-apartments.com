// Head Variables
const siteTitle = 'Toulis Apartments';
const siteName = 'Toulis Apartments';
const titleTemplate = '%s - Toulis Apartments';
const siteDescription =
  'Toulis Apartments - Apartments located in Polychrono at the first peninsula of Halkidiki';
const keywords =
  'Toulis Apartments, apartments, halkidiki, polychrono, halkidiki apartments, polychrono apartments';
const siteUrl = 'https://www.toulis-apartments.com';
const siteImage = `https://www.toulis-apartments.com/toulis-logo.jpg`;
const themeColor = '#409DCD';
const fbAdminId = null;
const googleFonts = null;

// Head object
const headObj = {
  titleTemplate,
  title: siteTitle,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: siteDescription,
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: keywords,
    },
    { hid: 'theme-color', name: 'theme-color', content: themeColor },
    { hid: 'application-name', name: 'application-name', content: siteTitle },
    {
      hid: 'msapplication-TileColor',
      name: 'msapplication-TileColor',
      content: themeColor,
    },
    {
      hid: 'msapplication-TileImage',
      name: 'msapplication-TileImage',
      content: '/mstile-144x144.png',
    },
    {
      hid: 'msapplication-square70x70logo',
      name: 'msapplication-square70x70logo',
      content: '/mstile-70x70.png',
    },
    {
      hid: 'msapplication-square150x150logo',
      name: 'msapplication-square150x150logo',
      content: '/mstile-150x150.png',
    },
    {
      hid: 'msapplication-wide310x150logo',
      name: 'msapplication-wide310x150logo',
      content: '/mstile-310x150.png',
    },
    {
      hid: 'msapplication-square310x310logo',
      name: 'msapplication-square310x310logo',
      content: '/mstile-310x310.png',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: siteUrl,
    },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:site_name', property: 'og:site_name', content: siteName },
    { hid: 'og:title', property: 'og:title', content: siteTitle },
    {
      hid: 'og:description',
      property: 'og:description',
      content: siteDescription,
    },
    { hid: 'og:image', property: 'og:image', content: siteImage },
    {
      hid: 'apple-mobile-web-app-title',
      name: 'apple-mobile-web-app-title',
      content: siteTitle,
    },
    { hid: 'itemprop-title', itemprop: 'name', content: siteTitle },
    {
      hid: 'itemprop-description',
      itemprop: 'description',
      content: siteDescription,
    },
    { hid: 'itemprop-image', itemprop: 'image', content: siteImage },
    { hid: 'twitter:title', name: 'twitter:title', content: siteTitle },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: siteDescription,
    },
    {
      hid: 'twitter:image:src',
      name: 'twitter:image:src',
      content: siteImage,
    },
    { name: 'author', content: 'Sotiris Maipas' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-196x196.png',
      sizes: '196x196',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-96x96.png',
      sizes: '96x96',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-128x128.png',
      sizes: '128x128',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '57x57',
      href: '/apple-touch-icon-57x57.png',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '114x114',
      href: '/apple-touch-icon-114x114.png',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '72x72',
      href: '/apple-touch-icon-72x72.png',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '144x144',
      href: '/apple-touch-icon-144x144.png',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '60x60',
      href: '/apple-touch-icon-60x60.png',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '120x120',
      href: '/apple-touch-icon-120x120.png',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '76x76',
      href: '/apple-touch-icon-76x76.png',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '152x152',
      href: '/apple-touch-icon-152x152.png',
    },
  ],
};

if (fbAdminId) {
  headObj.meta.push({
    hid: 'fb:admins',
    property: 'fb:admins',
    content: fbAdminId,
  });
}

if (googleFonts) {
  headObj.link.concat([
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com/',
      crossorigin: 'true',
    },
    {
      rel: 'stylesheet',
      href: googleFonts,
      crossorigin: 'true',
    },
  ]);
}

export default headObj;
