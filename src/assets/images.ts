// All photography lives here. Each entry is a fallback chain: the first URL is tried, then the next on error.
// Pexels/Unsplash images are free to use under their licences; official images come from sreevariapparels.com.
const px = (id: number, w = 1800) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
const us = (id: string, w = 1800) => `https://unsplash.com/photos/${id}/download?force=true&w=${w}`;
const off = (f: string) => `https://www.sreevariapparels.com/assets/${f}`;
const SEW = off('hero-sewing-floor-O9ZfrkRM.jpg'), FAB = off('fabric-rolls-2FEwTpNO.jpg'), QC = off('quality-inspection-DIXgDtpb.jpg');
export const photos = {
  rackShirts: [us('94Tvp4AhlUU'), QC],
  rackJackets: [us('EMWgB-BTyh0'), QC],
  rollsA: [px(4614119), FAB],
  rollsB: [px(4614231), FAB],
  rollsC: [px(20531142), FAB],
  stitchHands: [px(3342364), SEW],
  stitchClose: [px(29107942), SEW],
  denim: [px(32641555), SEW],
  heavyStitch: [px(5894255), SEW],
  floor: [SEW], fabric: [FAB], quality: [QC],
};
