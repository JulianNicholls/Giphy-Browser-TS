interface IImages {
  original: { url: string };
  fixed_width: { url: string };
}

interface IGif {
  id: number;
  title: string;
  images: IImages;
}

interface IGifList {
  gifs: IGif[];
}

interface IGifDataList {
  data: IGif[] | null;
}
