import { createStitches } from '@stitches/react';

const { getCssText, globalCss, styled } = createStitches({
  theme: {
    sizes: {
      0: '0px',
      1: '16px',
      2: '32px',
      3: '64px',
      4: '128px',
      5: '192px',
      6: '256px',
      7: '512px',
      8: '1024px',
    },
    space: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
      7: '256px',
      8: '512px',
    },
  },
});

export { getCssText, globalCss, styled };
