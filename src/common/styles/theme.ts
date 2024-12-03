export const theme = {
  colors: {
    primary: '#ff8080',
    background: {
      main: '#ffffff',
      secondary: '#f5f5f5',
      hover: 'rgba(255, 128, 128, 0.05)',
      active: 'rgba(255, 128, 128, 0.1)'
    },
    text: {
      primary: '#111827',
      secondary: '#6B7280',
      white: '#ffffff'
    },
    border: {
      light: '#f3f4f6'
    }
  },
  sizes: {
    icon: {
      default: 'h-5 w-5',
      large: 'h-6 w-6'
    },
    sidebar: {
      width: '4rem', // 64px
      buttonSize: 'p-3'
    },
    header: {
      height: '3rem' // 48px
    }
  },
  transitions: {
    default: 'transition-all duration-200',
    smooth: 'transition-all duration-300 ease-in-out'
  }
}; 