import { ScrollViewStyleReset } from "expo-router/html";

// special file, html template for web
// beware: it runs in node and has no access to window or dom
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* todo: investigae if this is needed */}
        <ScrollViewStyleReset />

        {/* use raw css to never flicker on dark mode */}
        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

const responsiveBackground = `
body {
  background-color: #f5f5f5;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #0e0e0e;
  }
}`;
