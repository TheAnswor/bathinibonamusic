'use client';
import {AuthForm,Header} from '@bbm/shared/src/components';
export default function Page(){return <><Header mode='music'/><div className='auth-layout'><AuthForm kind='fan' register={true}/></div></>}
