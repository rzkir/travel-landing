import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Parallax,
  Reveal,
  RevealImage,
  Stagger,
  StaggerItem,
} from "@/components/motion/reveal";
import data from "@/constant/data.json";

export default function Home() {
  const {
    images,
    hero,
    manifesto,
    destinations,
    journey,
    exploration,
    stories,
    midline,
    newsletter,
    contact,
    offices,
  } = data;

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative min-h-[100svh]">
        <Parallax className="absolute inset-0" offset={140} scale={1.22}>
          <Image
            src={images.hero}
            alt={hero.imageAlt}
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="100vw"
          />
        </Parallax>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-white via-white/90 to-transparent" />

        <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-end px-6 pb-20 pt-28 text-center md:pb-28">
          <Reveal y={48}>
            <p className="mb-4 font-serif text-5xl tracking-tight text-foreground md:text-7xl lg:text-8xl">
              {hero.titleLine1}
              <br />
              <span className="italic">{hero.titleItalic}</span>
              {hero.titleLine2After}
            </p>
          </Reveal>
          <Reveal delay={0.12} y={28}>
            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.22} y={20}>
            <Button
              nativeButton={false}
              render={<Link href={hero.ctaHref} />}
              size="lg"
              className="h-12 rounded-full px-6"
            >
              {hero.cta}
              <span className="ml-2 flex size-7 items-center justify-center rounded-full bg-background text-foreground">
                <ArrowRight className="size-3.5" />
              </span>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Manifesto */}
      <section id="about" className="px-6 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto max-w-4xl text-center" y={40}>
          <p className="font-serif text-3xl leading-snug text-foreground md:text-5xl md:leading-[1.25]">
            {manifesto.beforeInlineA}{" "}
            <span className="relative mx-1 inline-block h-8 w-16 align-middle overflow-hidden rounded-full md:h-10 md:w-20">
              <Image
                src={images.inlineA}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
              />
            </span>{" "}
            {manifesto.betweenInlines}{" "}
            <span className="relative mx-1 inline-block h-8 w-16 align-middle overflow-hidden rounded-full md:h-10 md:w-20">
              <Image
                src={images.inlineB}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
              />
            </span>{" "}
            {manifesto.afterInlineB}
          </p>
        </Reveal>
      </section>

      {/* Destinations */}
      <section id="destinations" className="px-6 pb-24 md:px-8 md:pb-32">
        <Stagger className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
          {destinations.map((place) => (
            <StaggerItem key={place.name}>
              <Card className="group relative min-h-[420px] overflow-hidden rounded-[1.75rem] border-0 p-0 ring-0">
                <Parallax className="absolute inset-0" offset={70} scale={1.2}>
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Parallax>
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-black/25" />
                <CardHeader className="absolute inset-x-0 top-0 z-10 p-6">
                  <CardTitle className="font-serif text-2xl font-medium italic leading-snug text-white md:text-[1.7rem]">
                    {place.tagline}
                  </CardTitle>
                  <p className="mt-2 text-sm text-white/85">{place.name}</p>
                </CardHeader>
                <CardFooter className="absolute inset-x-0 bottom-0 z-10 border-0 bg-transparent p-6">
                  <Button className="h-10 rounded-full bg-white px-4 text-foreground hover:bg-white/90">
                    Explore
                    <span className="ml-2 flex size-6 items-center justify-center rounded-full bg-brand text-brand-foreground">
                      <ArrowRight className="size-3.5" />
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* About Our Journey */}
      <section
        id="journey"
        className="relative overflow-hidden px-6 py-24 md:px-8 md:py-32"
      >
        <Parallax
          className="pointer-events-none absolute inset-0 opacity-40 mask-fade-edges"
          offset={100}
          scale={1.25}
        >
          <Image
            src={images.journeyBg}
            alt=""
            fill
            className="object-cover grayscale"
            sizes="100vw"
          />
        </Parallax>

        <div className="relative z-10 mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-md md:mb-16" y={32}>
            <p className="text-lg italic text-muted-foreground">
              {journey.eyebrow}
            </p>
            <h2 className="font-serif text-5xl tracking-tight text-foreground md:text-7xl">
              {journey.title}
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 items-end gap-4 md:grid-cols-12 md:gap-6">
            <Reveal
              className="col-span-1 md:col-span-3 md:translate-y-16"
              delay={0.05}
            >
              <Parallax
                className="relative aspect-4/5 overflow-hidden rounded-3xl"
                offset={50}
                scale={1.18}
              >
                <Image
                  src={journey.gallery[0].src}
                  alt={journey.gallery[0].alt}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </Parallax>
            </Reveal>

            <div className="col-span-1 flex flex-col gap-4 md:col-span-4 md:gap-6">
              <Reveal delay={0.1}>
                <Parallax
                  className="relative aspect-4/3 overflow-hidden rounded-3xl"
                  offset={40}
                  scale={1.16}
                >
                  <Image
                    src={journey.gallery[1].src}
                    alt={journey.gallery[1].alt}
                    fill
                    className="object-cover"
                    sizes="30vw"
                  />
                </Parallax>
              </Reveal>
              <Reveal delay={0.18}>
                <Parallax
                  className="relative aspect-4/3 overflow-hidden rounded-3xl"
                  offset={55}
                  scale={1.16}
                >
                  <Image
                    src={journey.gallery[2].src}
                    alt={journey.gallery[2].alt}
                    fill
                    className="object-cover"
                    sizes="30vw"
                  />
                </Parallax>
              </Reveal>
            </div>

            <div className="col-span-2 mt-4 grid gap-6 md:col-span-5 md:mt-0 md:-translate-y-8">
              <Reveal delay={0.14}>
                <Parallax
                  className="relative ml-auto aspect-5/4 w-[85%] overflow-hidden rounded-3xl"
                  offset={45}
                  scale={1.18}
                >
                  <Image
                    src={journey.gallery[3].src}
                    alt={journey.gallery[3].alt}
                    fill
                    className="object-cover"
                    sizes="35vw"
                  />
                </Parallax>
              </Reveal>
              <Reveal
                delay={0.22}
                className="max-w-sm md:ml-auto md:mr-4"
                y={20}
              >
                <p className="mb-2 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  {journey.label}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {journey.description}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* True Exploration */}
      <section className="px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr_1fr] md:gap-8">
          <Reveal y={28}>
            <h2 className="mb-4 text-3xl font-semibold italic tracking-tight text-foreground md:text-4xl">
              {exploration.title}
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
              {exploration.description}
            </p>
          </Reveal>

          <RevealImage className="relative mx-auto aspect-3/4 w-full max-w-xs overflow-hidden rounded-[2rem]">
            <Parallax className="absolute inset-0" offset={60} scale={1.2}>
              <Image
                src={images.storyPeak}
                alt={exploration.imageAlt}
                fill
                className="object-cover"
                sizes="320px"
              />
            </Parallax>
          </RevealImage>

          <Reveal className="flex md:justify-end" delay={0.1} y={20}>
            <Button
              nativeButton={false}
              render={<Link href={exploration.ctaHref} />}
              size="lg"
              className="h-12 rounded-full px-6"
            >
              {exploration.cta}
              <span className="ml-2 flex size-7 items-center justify-center rounded-full bg-background text-foreground">
                <ArrowRight className="size-3.5" />
              </span>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Visitor Stories */}
      <section id="stories" className="px-6 py-16 md:px-8 md:py-24">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center" y={32}>
          <h2 className="mb-4 text-3xl tracking-tight text-foreground md:text-5xl">
            {stories.titleParts.map((part) => (
              <span
                key={part.text}
                className={
                  part.style === "serif"
                    ? "font-serif"
                    : part.style === "italic"
                      ? "italic"
                      : undefined
                }
              >
                {part.text}
              </span>
            ))}
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {stories.subtitle}
          </p>
        </Reveal>

        <Stagger className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5">
          {stories.photos.map((src, i) => (
            <StaggerItem
              key={src}
              className={`relative overflow-hidden rounded-3xl ${
                i % 3 === 1 ? "aspect-square" : "aspect-4/5"
              } ${i === 1 ? "md:-translate-y-4" : ""} ${i === 4 ? "md:translate-y-4" : ""}`}
            >
              <Parallax
                className="absolute inset-0"
                offset={40 + (i % 3) * 12}
                scale={1.18}
              >
                <Image
                  src={src}
                  alt="Traveler exploring the outdoors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </Parallax>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal
          className="relative mx-auto mt-10 flex max-w-4xl items-end justify-center gap-4 md:mt-14 md:gap-8"
          delay={0.1}
          y={36}
        >
          <div className="relative hidden h-48 w-28 overflow-hidden rounded-3xl md:block lg:h-56 lg:w-32">
            <Parallax className="absolute inset-0" offset={35} scale={1.2}>
              <Image
                src={stories.testimonial.sideImages[0]}
                alt=""
                fill
                className="object-cover"
                sizes="128px"
              />
            </Parallax>
          </div>

          <Card className="max-w-xl flex-1 rounded-3xl bg-foreground py-8 text-background ring-0">
            <CardContent className="px-8">
              <p className="text-base leading-relaxed md:text-lg">
                {stories.testimonial.quote}
              </p>
              <p className="mt-6 font-serif text-lg italic">
                {stories.testimonial.author}
              </p>
            </CardContent>
          </Card>

          <div className="relative hidden h-48 w-28 overflow-hidden rounded-3xl md:block lg:h-56 lg:w-32">
            <Parallax className="absolute inset-0" offset={35} scale={1.2}>
              <Image
                src={stories.testimonial.sideImages[1]}
                alt=""
                fill
                className="object-cover"
                sizes="128px"
              />
            </Parallax>
          </div>
        </Reveal>
      </section>

      {/* Mid headline */}
      <section className="px-6 py-16 text-center md:px-8 md:py-20">
        <Reveal y={28}>
          <p className="mx-auto max-w-3xl text-3xl tracking-tight text-foreground md:text-5xl">
            {midline.before}{" "}
            <span className="font-serif italic">{midline.emphasis}</span>
            {midline.after}
          </p>
        </Reveal>
      </section>

      {/* Newsletter / Explore CTA */}
      <section
        id="explore"
        className="relative px-6 pb-8 pt-8 md:px-8 md:pt-12"
      >
        <Reveal
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] md:rounded-[2.5rem]"
          y={40}
        >
          <Parallax className="absolute inset-0" offset={90} scale={1.2}>
            <Image
              src={images.newsletter}
              alt={newsletter.imageAlt}
              fill
              className="object-cover"
              sizes="1200px"
            />
          </Parallax>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white via-white/70 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-black/25" />

          <div className="relative z-10 flex flex-col items-center px-6 py-24 text-center md:py-36">
            <h2 className="mb-5 font-serif text-4xl tracking-tight text-white drop-shadow-sm md:text-6xl">
              {newsletter.titleBefore}{" "}
              <span className="italic">{newsletter.titleItalic1}</span>{" "}
              {newsletter.titleMiddle}{" "}
              <span className="italic">{newsletter.titleItalic2}</span>
            </h2>
            <p className="mb-10 max-w-lg text-sm leading-relaxed text-white/90 md:text-base">
              {newsletter.description}
            </p>

            <InputGroup className="h-14 w-full max-w-md rounded-full border-0 bg-white shadow-lg">
              <InputGroupInput
                type="email"
                placeholder={newsletter.placeholder}
                className="h-full px-5 text-sm"
                aria-label="Email for travel updates"
              />
              <InputGroupAddon align="inline-end" className="pr-1.5">
                <InputGroupButton
                  size="icon-sm"
                  variant="default"
                  className="size-10 rounded-full bg-brand text-brand-foreground hover:bg-brand/90"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="size-4" />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </Reveal>
      </section>

      {/* Contact + offices */}
      <section id="contact" className="relative mt-8">
        <Parallax
          className="relative h-[42vh] min-h-64 w-full md:h-[50vh]"
          offset={120}
          scale={1.25}
        >
          <Image
            src={images.contactBg}
            alt={contact.imageAlt}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-white via-white/85 to-transparent" />
        </Parallax>

        <div className="relative z-10 -mt-24 px-6 pb-8 md:-mt-28 md:px-8">
          <Stagger className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {offices.map((office) => (
              <StaggerItem key={office.city}>
                <Card className="border-0 bg-transparent py-0 shadow-none ring-0">
                  <CardContent className="flex flex-col items-center px-0 text-center">
                    <MapPin
                      className="mb-4 size-5 text-foreground"
                      strokeWidth={1.5}
                    />
                    <h3 className="mb-2 text-base font-semibold italic tracking-tight text-foreground">
                      {office.city}
                    </h3>
                    <p className="mb-1 text-sm text-muted-foreground">
                      {office.phone}
                    </p>
                    <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                      {office.address}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </main>
  );
}
