import './globals.css'
export const metadata = {title:'Aura-IDToken',description:'Digital Trust Layer'}
export default function RootLayout({children}: {children: React.ReactNode}){
  return (<html lang="en"><body>{children}</body></html>)
}
