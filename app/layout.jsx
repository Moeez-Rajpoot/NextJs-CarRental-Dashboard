import "./globals.css";

export const metadata = {
  title: "Car Rental System",
  description: "Car Rental System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
