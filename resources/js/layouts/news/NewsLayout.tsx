import Heading from '@/components/ui/heading';


export default function NewsBlockLayout({children}) {
    return (
        <div className="mt-[25px] ml-[25px]">
            <div className="mb-[25px]">
                <Heading size="large">новости</Heading>
            </div>
            <div className="flex flex-wrap">
                {children}
            </div>
        </div>
    )
}
