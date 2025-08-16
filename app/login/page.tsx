"use client";
import { useAnalytics } from "@/lib/useAnalytics";

export default function LoginPage() {
  useAnalytics("login");
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-md">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Log in</h1>
      <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <input id="email" name="email" type="email" className="rounded-xl border border-gray-300 px-3 py-2 focus-ring" required />
        </div>
        <div className="grid gap-1">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
          <input id="password" name="password" type="password" className="rounded-xl border border-gray-300 px-3 py-2 focus-ring" required />
        </div>
        <div className="flex items-center justify-between text-sm">
          <a href="#" className="text-primary-600 hover:underline">Forgot password?</a>
        </div>
        <button className="inline-flex items-center rounded-xl bg-primary-600 px-5 py-3 text-white hover:bg-primary-500 focus-ring" type="submit">Log in</button>
        <p className="text-sm text-gray-500">Don&apos;t have an account? <a className="text-primary-600 hover:underline" href="/signup">Sign up</a></p>
      </form>
    </main>
  );
}


