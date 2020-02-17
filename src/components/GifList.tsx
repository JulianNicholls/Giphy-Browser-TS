import React from 'react';

import DeferredImage from './DeferredImage';

interface IImages {
  original: { url: string };
  fixed_width: { url: string };
}

export interface IGif {
  id: number;
  title: string;
  images: IImages;
}

export interface IGifList {
  gifs: IGif[];
}

export interface IGifDataList {
  data: IGif[] | null;
}

function GifList(props: IGifList): JSX.Element {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => (
        <a
          className="gif-link"
          href={gif.images.original.url}
          key={gif.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DeferredImage image={gif} />
        </a>
      ))}
    </div>
  );
}

export default GifList;
