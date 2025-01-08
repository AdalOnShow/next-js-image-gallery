import React, { FC } from 'react'
import Image from "next/image";
import { FaSave } from "react-icons/fa"
import { IImage } from '../../../types';

const Card: FC<IImage> = (props) => {

    const { name, url, likes, shares } = props || {}

    return (
        <figure className='w-fit relative group overflow-hidden rounded-md'>
            <Image alt={name} src={url} width={400} height={400} className="w-full h-auto max-w-md group-hover:scale-110 transition-all duration-200" />

            <figcaption className='w-full absolute left-0 -bottom-20 p-3 bg-slate-800/60 text-white flex justify-between items-center gap-2 group-hover:bottom-0 transition-all duration-200'>
                <div className='space-y-2'>
                    <p className="text-lg font-semibold">{name}</p>
                    <p>{`${likes} likes | ${shares} shares`}</p>
                </div>
                <a download={url}>
                    <FaSave size={24} />
                </a>
            </figcaption>
        </figure>
    )
}

export default Card