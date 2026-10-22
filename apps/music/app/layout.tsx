import type {Metadata} from 'next';
import './globals.css';
import {AuthProvider} from '@bbm/shared/src/auth';
import {MusicProvider} from '@bbm/shared/src/player';
export const metadata:Metadata={title:'Bathini Bona Music', description:'Discover the sound of Bathini Bona.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-ZA"><body><AuthProvider><MusicProvider>{children}</MusicProvider></AuthProvider></body></html>}
