import Heading from "@/components/ui/heading";


export default function LeftObjectLayout({children}) {
    return (
        <div className="bg-[#ffffff] w-[413px] rounded-[8px] mt-[8px]">
                <div className="p-[22px]">
                    <Heading size="medium">Наш выбор</Heading>
                </div>
            {children}
        </div>
    )
}
