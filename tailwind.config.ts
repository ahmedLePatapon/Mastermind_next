// import type { Config } from 'tailwindcss'
// import defaultTheme from 'tailwindcss/defaultTheme'

// const config: Config = {
//     darkMode: 'class',
//     content: [
//         './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//         './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//         './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//     ],
//     theme: {
//         colors: {
//             ...defaultTheme.colors,
//             primary: '#1919e6',
//             'background-light': '#f6f6f8',
//             'background-dark': '#111121',
//         },
//         fontFamily: {
//             display: ['Space Grotesk', 'sans-serif', ...defaultTheme.fontFamily.sans],
//         },
//         borderRadius: {
//             ...defaultTheme.borderRadius,
//             DEFAULT: '0.25rem',
//             lg: '0.5rem',
//             xl: '0.75rem',
//             full: '9999px',
//         },
//     },
//     plugins: [],
// }

// export default config

import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            ...defaultTheme.colors,
            primary: '#1919e6',
            'background-light': '#f6f6f8',
            'background-dark': '#111121',
        },
        fontFamily: {
            display: ['Space Grotesk', 'sans-serif', ...defaultTheme.fontFamily.sans],
        },
        borderRadius: {
            ...defaultTheme.borderRadius,
            DEFAULT: '0.25rem',
            lg: '0.5rem',
            xl: '0.75rem',
            full: '9999px',
        },
    },
    plugins: [],
}

export default config
