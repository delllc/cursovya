import Heading from '@/components/ui/heading';


interface IProps {
    title: string,
    desc: string
}

export function LeftCard({...props}: IProps) {
    return (
        <div className="mb-[8px]">

            <div>
                {/*<img src="path/to/your/image.jpg" alt="Image Description" />*/}
                <div className="gradient-linear p-[18px] w-[374px]">
                    <p className="text-[18px]">{props.title}</p>
                    <p className="text-[12px] mt-[8px] mb-[8px]">{props.desc}</p>
                    <a href="#" className="read-more flex items-center text-[#fffffff] mt-[8px] mb-[12px]">читать далее
                        <span className="ml-2 flex items-center" >
 <svg width="37" height="8" viewBox="0 0 37 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M36.3536 4.35355C36.5488 4.15829 36.5488 3.84171 36.3536 3.64645L33.1716 0.464466C32.9763 0.269204 32.6597 0.269204 32.4645 0.464466C32.2692 0.659728 32.2692 0.976311 32.4645 1.17157L35.2929 4L32.4645 6.82843C32.2692 7.02369 32.2692 7.34027 32.4645 7.53553C32.6597 7.7308 32.9763 7.7308 33.1716 7.53553L36.3536 4.35355ZM0 4.5H36V3.5H0V4.5Z"
    fill="white" />
</svg>

                    </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
