import { useState, useCallback } from 'react';

interface LazyYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
  onPlay?: () => void;
}

export function LazyYouTube({ videoId, title, className = '', onPlay }: LazyYouTubeProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState(
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  );

  const handleThumbnailError = useCallback(() => {
    setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
  }, [videoId]);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    onPlay?.();
  }, [onPlay]);

  return (
    <div className={`relative aspect-video rounded-xl overflow-hidden bg-slate-900 ${className}`}>
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={handlePlay}
          className="group absolute inset-0 w-full h-full cursor-pointer"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={thumbnailUrl}
            alt={title}
            loading="lazy"
            onError={handleThumbnailError}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-slate-900 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
