// @mui
import { GlobalStyles as MUIGlobalStyles } from '@mui/material';
import lemonMilk from '../font/LemonMilk.otf';
import lemonMilkBold from '../font/LemonMilkbold.otf';
import montserratBold from '../font/MontserratBold.ttf';
// ----------------------------------------------------------------------

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        '@font-face': [
          {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 700,
            fontDisplay: 'swap',
            src: `url(${montserratBold}) format('truetype')`,
          },
          // {
          //   fontFamily: 'Lemon Milk',
          //   fontStyle: 'normal',
          //   fontWeight: 300,
          //   fontDisplay: 'swap',
          //   src: `url(${lemonMilkLight}) format('opentype')`,
          // },
          // {
          //   fontFamily: 'Lemon Milk',
          //   fontStyle: 'italic',
          //   fontWeight: 300,
          //   fontDisplay: 'swap',
          //   src: `url(${lemonMilkLightItalic}) format('opentype')`,
          // },
          {
            fontFamily: 'Lemon Milk',
            fontStyle: 'normal',
            fontWeight: 400,
            fontDisplay: 'swap',
            src: `url(${lemonMilk}) format('opentype')`,
          },
          // {
          //   fontFamily: 'Lemon Milk',
          //   fontStyle: 'italic',
          //   fontWeight: 400,
          //   fontDisplay: 'swap',
          //   src: `url(${lemonMilkItalic}) format('opentype')`,
          // },
          {
            fontFamily: 'Lemon Milk',
            fontStyle: 'normal',
            fontWeight: 700,
            fontDisplay: 'swap',
            src: `url(${lemonMilkBold}) format('opentype')`,
          },
          // {
          //   fontFamily: 'Lemon Milk',
          //   fontStyle: 'italic',
          //   fontWeight: 700,
          //   fontDisplay: 'swap',
          //   src: `url(${lemonMilkBoldItalic}) format('opentype')`,
          // },
        ],
        '*': {
          boxSizing: 'border-box',
          fontFamily: 'Pretendard, sans-serif',
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          display: 'block',
          maxWidth: '100%',
          WebkitUserDrag: 'none',
        },
        ul: {
          margin: 0,
          padding: 0,
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
        'th, td': {
          whiteSpace: 'nowrap',
        },
      }}
    />
  );

  return inputGlobalStyles;
}
