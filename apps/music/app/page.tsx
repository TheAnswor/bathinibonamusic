import MusicScreen from './MusicScreen';
import {demoHome} from '@bbm/shared/src/demo';
import type {Home} from '@bbm/shared/src/types';
// Server preload lets search engines see the public catalogue without waiting for browser fetch.
async function initialCatalogue():Promise<Home>{
 if(process.env.BBM_DEMO_MODE==='true')return demoHome;
 try{
  const url=(process.env.WORDPRESS_URL||'http://localhost:8080').replace(/\/$/,'')+'/wp-json/bbm/v1/home';
  const r=await fetch(url,{next:{revalidate:60},signal:AbortSignal.timeout(6000)});
  if(!r.ok)throw new Error('Backend unavailable');return await r.json();
 }catch{return {trending:[],tracks:[],artists:[],releases:[],events:[],genres:[],recommended:[]};}
}
export default async function Page(){return <MusicScreen initialHome={await initialCatalogue()}/>}
