export default {
    content: ['./components/**/*.{vue,js,ts}'],
    theme: import(`./configs/tailwind/${process.env.BRAND}`),
};
