import React from 'react'
import { MinWidthWrapper } from '../MinWidthWrapper'
import Link from 'next/link'

export const DetailNav = () => {
  return (
    <div className='w-full bg-gray-50 lg:flex lg:justify-center'>
        <MinWidthWrapper className='w-full py-8 '>
            <ul className='flex w-full gap-4 whitespace-nowrap overflow-x-scroll no-scrollbar '>
                <li> <Link href={''}>Contexte et problematique</Link> </li>
                <li> <Link href={''}>Pour qui ?</Link> </li>
                <li> <Link href={''}>Prerequis</Link> </li>
                <li> <Link href={''}>Objectifs</Link> </li>
                <li> <Link href={''}>Programme </Link> </li>
                <li> <Link href={''}>Documentation</Link> </li>
                <li> <Link href={''}>Evaluation</Link> </li>
                <li> <Link href={''}>Avis</Link> </li>
            </ul>
        </MinWidthWrapper>
    </div>
  )
}
