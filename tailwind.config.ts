const config = require(`./configs/tailwind/${process.env.BRAND}.js`);

export default {
    content: ['./components/**/*.{vue,js}'],
    theme: config,
};
