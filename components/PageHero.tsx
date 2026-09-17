import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  image?: string;
};

export function PageHero({ eyebrow, title, children, image }: PageHeroProps) {
  return (
    <section className="page-hero">
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      ) : null}
      <div className="page-hero-veil" />
      <div className="container relative z-10">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-xl mt-2 max-w-3xl text-white">{title}</h1>
        {children ? (
          <div className="hero-sub mt-3 max-w-xl">{children}</div>
        ) : null}
      </div>
    </section>
  );
}
