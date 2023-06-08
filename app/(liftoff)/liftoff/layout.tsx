export default async function liftoffLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
          {children}
        </body>
      </html>
    );
  }