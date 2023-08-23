const indicatorSize = 30;
const indicatorPadding = 30;
const indicatorAlpha = 0.3;

export function getPaginationConfig(pages: number): PaginationConfig {
  const indicatorWidth = pages * indicatorSize;
  const indicatorPaddingTotal = (pages - 1) * indicatorPadding;

  return {
    indicatorSize,
    indicatorPadding,
    indicatorWidth,
    indicatorPaddingTotal,
    indicatorWidthTotal: indicatorWidth + indicatorPaddingTotal,
    indicatorAlpha,
  };
}

export type PaginationConfig = {
  indicatorSize: number;
  indicatorPadding: number;
  indicatorWidth: number;
  indicatorPaddingTotal: number;
  indicatorWidthTotal: number;
  indicatorAlpha: number;
};
