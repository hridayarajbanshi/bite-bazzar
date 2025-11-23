
import {Poppins } from 'next/font/google';
const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});
const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" className={poppins.variable}>
            <body>
               {children}
            </body>
        </html>
    );
}
export default RootLayout;