import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type PostCoverImageProps = {
  imagesProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({
  imagesProps,
  linkProps,
}: PostCoverImageProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "w-full",
        "h-full",
        "overflow-hidden",
        "rounded-xl",
        linkProps.className
      )}
    >
      <Image
        {...imagesProps}
        className={clsx(
          "group-hover:scale-105",
          "transition",
          "w-full",
          "h-full",
          "object-cover",
          "object-center",
          imagesProps.className
        )}
        alt={imagesProps.alt}
      />
    </Link>
  );
}
