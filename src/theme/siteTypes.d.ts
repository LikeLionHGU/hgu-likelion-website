import type { CSSProperties } from 'react';
import siteTypography from './siteTypography';
import { siteColors } from './siteTokens';

type SiteTypography = Record<keyof typeof siteTypography, CSSProperties>;
type SiteTypographyOverrides = Record<keyof typeof siteTypography, true>;

declare module '@mui/material/styles' {
  interface TypographyVariants extends SiteTypography {}
  interface TypographyVariantsOptions extends Partial<SiteTypography> {}
  interface Palette {
    site: typeof siteColors;
  }
  interface PaletteOptions {
    site?: typeof siteColors;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides extends SiteTypographyOverrides {}
}
