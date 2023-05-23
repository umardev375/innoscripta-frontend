import Image from "next/image";
interface IProps {
  src: any;
  width: number;
  height: number;
  className?: string;
  alt?: string;
  layout?: any;
}
const BlurImage = ({ src, width, height, className, alt, layout }: IProps) => {
  return (
    <>
      <figure
        className={`relative overflow-hidden flex justify-center items-center ${className}`}
      >
        <div
          className="absolute h-full w-full blur-2xl bg-contain"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "100% 100%",
          }}
        ></div>
        <Image
          src={src}
          width={width}
          height={height}
          className={className}
          alt={alt ? alt : "Image"}
          layout={layout}
        />
      </figure>
    </>
  );
};

export default BlurImage;


