'use client';

import Image from 'next/image';

export default function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  fill = false,
  priority = false,
  sizes,
  style,
}) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes || '100vw'}
        style={{ objectFit: 'cover', objectPosition: 'center', ...style }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 1200}
      height={height || 800}
      className={className}
      priority={priority}
      sizes={sizes || '(max-width: 768px) 100vw, 50vw'}
      style={style}
    />
  );
}
