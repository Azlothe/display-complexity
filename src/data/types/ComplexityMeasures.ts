export type ImageHistory = {
  image: ImageInfo;
  complexity: ImageComplexity;
};

export type ImageInfo = {
  src: string;
  labels?: string[];
};

export type ImageComplexity = {
  convolution?: number;
  segmentation?: number;
  spectral?: number;
  user?: number;
};
