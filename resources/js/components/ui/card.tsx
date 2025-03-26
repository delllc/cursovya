import React from 'react';
import { InertiaLinkProps, Link } from '@inertiajs/react';



interface IProps {
    id: string,
    title: string,
    date: string,
    desc: string,
    views: string,
    comment: string

}


export function Card({...props}: IProps) {
    return (
        <div className="news-container p-[22px] shadow-lg w-[414px] rounded-[8px] mb-[15px] mr-[15px]">
            {/*<img src="path/to/your/image.jpg" alt="Президент на встрече" className="news-image" />*/}
            <div className="news-overlay">
                <div className="flex">
                    <div className="news-title w-[276px] font-black text-[14px] mb-[8px]">{props.title}
                    </div>
                    <div className="news-date font-medium">{props.date}</div>
                </div>
                <div className="news-content text-[12px] w-[370px]">
                    {props.desc}
                </div>
                <Link href={route('news.show', props.id)} className="read-more flex items-center text-[#D66365] mt-[8px] mb-[12px]">читать далее
                    <span className="ml-2">
                        <svg width="37" height="8" viewBox="0 0 37 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M36.3536 4.35355C36.5488 4.15829 36.5488 3.84171 36.3536 3.64645L33.1716 0.464466C32.9763 0.269204 32.6597 0.269204 32.4645 0.464466C32.2692 0.659728 32.2692 0.976311 32.4645 1.17157L35.2929 4L32.4645 6.82843C32.2692 7.02369 32.2692 7.34027 32.4645 7.53553C32.6597 7.7308 32.9763 7.7308 33.1716 7.53553L36.3536 4.35355ZM0 4.5H36V3.5H0V4.5Z"
    fill="#D84E50" />
</svg>

                    </span>
                </Link>
                <div className="stats text-[#D66365] text-[10px]">
                    <span className="mr-[40px]">просмотры: {props.views}</span>
                    <span className="">комментарии: {props.comment}</span>
                </div>
            </div>
        </div>
    )

}
