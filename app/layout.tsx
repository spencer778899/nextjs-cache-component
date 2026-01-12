import type { Metadata } from "next";
import { NavLink } from "./NavLink";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Next.js 16 Cache Component 教學",
  description: "展示 Next.js 16 中的 cache component 機制",
};

function NavBar() {
  const useCacheComponent = false
  
  const routes = useCacheComponent
    ? [
        { path: "/new-file-cache", label: "File 層級 Cache" },
        { path: "/new-component-cache", label: "Component 層級 Cache" },
        { path: "/new-function-cache", label: "Function 層級 Cache" },
      ]
    : [
        { path: "/old-full-cache", label: "舊版 Full Cache" },
        { path: "/old-cache-broken", label: "Cache 被破壞" },
      ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold mb-4">
          Next.js 16 Cache Demo
          <span className="text-sm ml-2 text-gray-400">
            ({useCacheComponent ? 'full route cache' : 'cache component'})
          </span>
        </h1>
        <ul className="flex gap-4 flex-wrap">
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink href={route.path}>{route.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen bg-gray-50">
        <NavBar />
        <main className="container mx-auto p-8">
          <Suspense fallback={<h1>Loading...</h1>}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}
