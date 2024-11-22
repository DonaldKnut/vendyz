import Image from "next/image";
import { cn, getFileIcon } from "@/lib/utils";

interface ThumbnailProps {
  file: {
    id: string;
    name: string;
    type: string;
    extension: string;
    url: string;
    createdAt: string;
  };
  icon: string;
  fileType: string;
  url: string;
  imageClassName?: string;
  className?: string;
}

const Thumbnail = ({
  file,
  icon,
  fileType,
  url,
  imageClassName,
  className,
}: ThumbnailProps) => {
  const isImage = fileType === "image" && file.extension !== "svg";

  return (
    <figure className={cn("thumbnail", className)}>
      <Image
        src={isImage ? url : icon}
        alt={`${file.name} thumbnail`}
        width={100}
        height={100}
        className={cn(
          "size-8 object-contain",
          imageClassName,
          isImage && "thumbnail-image"
        )}
      />
    </figure>
  );
};

export default Thumbnail;
