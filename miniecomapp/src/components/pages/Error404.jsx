import React from "react";
import { Link } from "react-router";

export default function Error404() {
  return (
    <section className="min-h-[70vh] bg-gradient-to-br from-slate-50 via-white to-amber-50 px-6 py-16">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10 rounded-[32px] border border-slate-200 bg-white/90 p-8 text-center shadow-xl shadow-slate-200/60 md:flex-row md:justify-between md:p-14 md:text-left">
        <div className="max-w-xl">
          <p className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            Error 404
          </p>

          <h1 className="mb-5 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
            Page not found
          </h1>

          <p className="mb-8 text-base leading-7 text-slate-600 md:text-lg">
            The page you are looking for may have been moved, deleted, or the
            link might be incorrect. Let&apos;s get you back to something useful.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <Link
              to="/"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Home
            </Link>

            <Link
              to="/product"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            >
              Browse Products
            </Link>
          </div>
        </div>

        <div className="flex h-[260px] w-full max-w-[320px] items-center justify-center rounded-[28px] bg-slate-900 p-8 text-white shadow-lg md:h-[320px]">
          <div className="relative">
            <div className="text-[110px] font-black leading-none text-amber-400 md:text-[140px]">
              404
            </div>
            <p className="absolute -bottom-2 left-1/2 w-max -translate-x-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm tracking-[0.2em] text-slate-100 backdrop-blur">
              Lost in the store
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
