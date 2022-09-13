const colors = {
  background: {
    black: 'rgba(0, 0, 0, 1)',
    gray: 'rgba(70, 70, 70, 1)',
    white: 'rgba(255, 255, 255, 1)',
  },
  text: {
    primary: 'rgba(80, 80, 80, 1)',
    accent: 'rgba(0, 0, 0, 1)',
    white: 'rgba(255, 255, 255, 1)',
    semiBlack: 'rgba(40,40,40,1)',
    purple: 'rgba(133,98,206,1)',
  },
  button: {
    primary: {
      default: {
        background: 'rgba(0, 0, 0, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(0, 0, 0, 1)',
      },
      hover: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(0, 0, 0, 1)',
        border: 'rgba(0, 0, 0, 1)',
      },
      active: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(30, 30, 30, 1)',
        border: 'rgba(30, 30, 30, 1)',
      },
    },
    secondary: {
      default: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(0, 0, 0, 1)',
        border: 'rgba(0, 0, 0, 1)',
      },
      hover: {
        background: 'rgba(0, 0, 0, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(0, 0, 0, 1)',
      },
      active: {
        background: 'rgba(0, 0, 0, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(0, 0, 0, 1)',
      },
    },
    tertiary: {
      default: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(128,128,128,1)',
        border: 'rgba(215,215,215,1)',
      },
      hover: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(0, 0, 0, 1)',
        border: 'rgba(0, 0, 0, 1)',
      },
      active: {
        background: 'rgba(0, 0, 0, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(0, 0, 0, 1)',
      },
    },
    quaternary: {
      default: {
        background: 'rgba(247,247,247,1)',
        font: 'rgba(0, 0, 0, 1)',
        border: 'rgba(247,247,247,1)',
      },
      hover: {
        background: 'rgba(247,247,247,1)',
        font: 'rgba(0, 0, 0, 1)',
        border: 'rgba(235,235,235,1)',
      },
      active: {
        background: 'rgba(255,255,255,1)',
        font: 'rgba(0, 0, 0, 1)',
        border: 'rgba(235,235,235,1)',
      },
    },
  },
  input: {
    primary: {
      default: {
        background: 'rgba(247,247,247,1)',
        border: 'rgba(247,247,247,1)',
        placeholder: 'rgba(128,128,128,1)',
        font: 'rgba(0,0,0,1)',
      },
      hover: {
        background: 'rgba(247,247,247,1)',
        border: 'rgba(247,247,247,1)',
        placeholder: 'rgba(128,128,128,1)',
        font: 'rgba(0,0,0,1)',
      },
      focus: {
        background: 'rgba(255,255,255,1)',
        border: 'rgba(247,247,247,1)',
        placeholder: 'rgba(128,128,128,1)',
        font: 'rgba(0,0,0,1)',
      },
      disabled: {
        background: 'rgba(247,247,247,1)',
        border: 'rgba(247,247,247,1)',
        placeholder: 'rgba(195,195,195,1)',
        font: 'rgba(0,0,0,1)',
      },
      error: 'rgba(213,52,52,1)',
    },
    ghost: {
      default: {
        background: 'transparent',
        border: 'transparent',
        placeholder: 'rgba(235,235,235,1)',
        font: 'rgba(0,0,0,1)',
      },
      hover: {
        background: 'transparent',
        border: 'transparent',
        placeholder: 'rgba(235,235,235,1)',
        font: 'rgba(0,0,0,1)',
      },
      focus: {
        background: 'transparent',
        border: 'transparent',
        placeholder: 'rgba(235,235,235,1)',
        font: 'rgba(0,0,0,1)',
      },
    },
  },
}

export { colors }
