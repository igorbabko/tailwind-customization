module.exports = {
  theme: {
    colors: {
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      }
    },
    extend: {
			screens: {
				s: '640px',
				m: '768px',
				l: '1024px',
				xl: '1280px',
				xxl: '1536px'
			},
      spacing: {
				sm: '8px',
				md: '12px',
				lg: '16px',
				xl: '24px'
      }
    }
  }
}
