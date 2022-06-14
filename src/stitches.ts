import { createStitches } from '@stitches/react';

const { getCssText, globalCss, styled } = createStitches({
  theme: {
    sizes: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
      7: '192px',
      8: '256px',
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
