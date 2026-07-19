import Can from "./Can";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center text-center pt-16 overflow-hidden">
      <div className="absolute w-[520px] h-[520px] rounded-full blur-[60px] opacity-55 -top-40 -left-30 bg-[radial-gradient(circle_at_30%_30%,var(--color-sun),transparent_70%)] animate-drift" />
      <div className="absolute w-[460px] h-[460px] rounded-full blur-[60px] opacity-55 -bottom-36 -right-24 bg-[radial-gradient(circle_at_60%_40%,var(--color-guava),transparent_70%)] animate-drift [animation-duration:22s] [animation-delay:-4s]" />
      <div className="absolute w-[360px] h-[360px] rounded-full blur-[60px] opacity-55 top-[30%] right-[10%] bg-[radial-gradient(circle_at_50%_50%,var(--color-lime),transparent_70%)] animate-drift [animation-duration:14s] [animation-delay:-8s]" />

      <div className="eyebrow mb-4 opacity-0 animate-rise-in [animation-delay:.1s]">
        Small-batch · Low sugar · Live cultures
      </div>

      <h1 className="text-[clamp(48px,8vw,108px)] max-w-[28ch] opacity-0 animate-rise-in [animation-delay:.25s]">
        The Immune System is the  body’s true doctor. Prevention is better than cure. 
        <br />
      </h1>
      <div className="h-10">

      </div>
      <h1 className="text-[clamp(24px,16vw,72px)] max-w-[60ch] opacity-0 animate-rise-in [animation-delay:.25s]">
        免疫系统才是人体真正的医生。预防胜于治疗.
        <br />
      </h1>


      <p className="max-w-[520px] mx-auto mt-6 mb-8 text-[17px] text-ink/70 opacity-0 animate-rise-in [animation-delay:.4s]">
        Solstice is fermented tea done properly — naturally low in sugar,
        alive with probiotics, and built for people who taste before they
        read the label.
      </p>

      <div className="flex gap-3.5 justify-center opacity-0 animate-rise-in [animation-delay:.55s]">
        <a
          href="#dial"
          className="inline-flex items-center gap-2 px-6.5 py-3.5 rounded-full font-semibold text-sm bg-ink text-cream transition-transform duration-300 ease-brand hover:-translate-y-1 hover:shadow-[0_14px_30px_rgb(18_33_27_/_0.25)]"
        >
          Explore flavors
        </a>
        <a
          href="#process"
          className="inline-flex items-center gap-2 px-6.5 py-3.5 rounded-full font-semibold text-sm border-[1.5px] border-ink transition-all duration-300 ease-brand hover:-translate-y-1 hover:bg-ink hover:text-cream"
        >
          See how it&apos;s brewed
        </a>
      </div>

      <div className="relative mt-14 flex gap-5 justify-center opacity-0 animate-rise-in [animation-delay:.7s]">
        <Can c1="#FFC94D" c2="#FF6B35" label="Citrus" size="sm" className="animate-bob scale-70 translate-y-5" />
        <Can c1="#FF8FB3" c2="#FF4E86" label="Berry" size="sm" className="animate-bob [animation-delay:-1.2s]" />
        <Can c1="#B8F0C9" c2="#1D9E75" label="Mint" size="sm" className="animate-bob [animation-delay:-2.6s] scale-70 translate-y-5" />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[11px] tracking-[.1em] opacity-55">
        <span>SCROLL</span>
        <div className="relative w-px h-8.5 bg-ink overflow-hidden">
          <span className="absolute left-0 w-full h-full bg-citrus animate-[scrollLine_1.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}