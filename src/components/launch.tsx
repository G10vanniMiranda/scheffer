import { timeline } from "@/content/landing";

export function Launch() {
  return (
    <section aria-labelledby="launch-title" className="border-y border-bordo/10 bg-papel">
      <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <h2 id="launch-title" className="max-w-[28ch] text-2xl font-medium leading-snug sm:text-3xl">
          Do anúncio à vitrine em vinte dias.
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {timeline.map((item, i) => (
            <li key={item.date} className="relative pt-6">
              <span aria-hidden="true" className="rule absolute inset-x-0 top-0" />
              <span
                aria-hidden="true"
                className={`absolute -top-[5px] left-0 size-[11px] rounded-full border border-cobre ${i === timeline.length - 1 ? "bg-cobre" : "bg-papel"}`}
              />
              <time className="font-wide text-3xl font-semibold tracking-tight sm:text-4xl" dateTime={`2026-${item.date.split(".").reverse().join("-")}`}>
                {item.date}
              </time>
              <p className="mt-3 max-w-[32ch] leading-relaxed text-bordo/75">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
