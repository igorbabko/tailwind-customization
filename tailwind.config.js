const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')


module.exports = {
	// presets: [],
	darkMode: 'media',
	presets: [

    require('./tailwind-preset.js')

		// require('@acmecorp/tailwind-colors'),
    // require('@acmecorp/tailwind-fonts'),
    // require('@acmecorp/tailwind-spacing'),
  ],
	// 1
	// prefix: 'ui-',
	// separator: '_',
	// ------------------

	// 2
  theme: {
		// colors: {
			// transparent: 'transparent',
      // current: 'currentColor',
      // black: colors.black,
      // white: colors.white,
      // gray: colors.trueGray,
      // indigo: colors.indigo,
      // red: colors.rose,
      // yellow: colors.amber,
			// brown: 'brown',
			// brown: {
      //   light: '#ab5050',
      //   DEFAULT: 'brown',
      //   dark: '#501818',
      // }
		// },
		screens: {
      // 'sm': '640px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
      // '2xl': '1536px',
      // '3xl': '1920px',
    },
		// spacing: {
		// 	sm: '100px',
		// 	md: '200px',
		// 	lg: '300px',
		// 	xl: '400px'
		// },
    extend: {
			screens: {
				'3xl': '1920px',
        'portrait': {'raw': '(orientation: portrait)'},
				'print': {'raw': 'print'}
			},
			colors: {
				// indigo: {
					// 950: '#1c012f'
				// },
				primary: colors.indigo,
				secondary: colors.yellow
			},
			spacing: {
				xxl: '500px',
				xxxl: '600px'
			},
		},
  },
	// -----------------






  purge: [],
  darkMode: false, // or 'media' or 'class'
  variants: {
		// backgroundColor: ['hover'],
		// borderColor: ['focus'],

    extend: {
			backgroundColor: ['hover', 'focus'],
			borderColor: ['focus', 'hover'],
		}
  },
  plugins: [
		require('@tailwindcss/forms')
	]
}
