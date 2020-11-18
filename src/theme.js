export const theme = {
  colors: {
    primary:        '#E2007A',
    primary_darken: '#D60174',
    black:          '#000000',
    dark:           '#666666',
    dark_50:        '#B1B1B1',
    grey:           '#E2E2E2',
    light:          '#F0F0F0',
    light_50:       '#F7F7F7',
    white:          '#ffffff',
    transparent:    'transparent',
    blackOpacity: (opacity) => { return `rgba(0,0,0,${opacity})` },
    greyOpacity:  (opacity) => { return `rgba(226,226,226,${opacity})` },
    whiteOpacity: (opacity) => { return `rgba(255,255,255,${opacity})` },
    danger:         '#F33',
    success:        '#3F3',
    warning:        '#E9D345',
  },
  fontFamily: {
    heading:    'Roboto_700Bold',
    text:       'Roboto_300Light',
    button:     'Roboto_700Bold',
    blockquote: 'Roboto_300Light_Italic'
  },
  fontSize: {
    h1: 36,
    h2: 32,
    h3: 24,
    h4: 18,
    h5: 14,
    h6: 14,
    p:  16,
    input: 14,
  },
  radius: 5,
  border: '1px solid rgba(0,0,0,0.15)',
  button: {
    border: {
      width: 1,
      color: 'rgba(0,0,0,0.15)',
      style: 'solid'
    }
  },
  box_shadow: 'none',
  box_shadow_nav: '0 0 6px rgba(0,0,0,0.15)'
}
