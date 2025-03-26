import { AppHeader } from '@/components/app-header';
import { PageProps } from '@/types';


export function MainLayout({ children, auth, className }:PageProps) {
    return (
        <div className='h-[100vh] bg-gray-100'>
            <AppHeader auth={auth}/>
            <main className={'container ' + className}>{children}</main>
            {/*<Footer/>*/}
        </div>
    )
}
