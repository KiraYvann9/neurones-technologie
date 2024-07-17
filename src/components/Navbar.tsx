"use client"
import React from 'react';
import Image from 'next/image'
import logo from '../../public/assets/navlogo.png'
import logo2 from '../../public/assets/navlogo.png'

import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {MaxWidthWrapper} from "@/components/MaxWidthWrapper";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import {MenuIcon, SearchIcon, ShoppingBagIcon, ShoppingCartIcon, UserIcon} from "lucide-react";
const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export function Navbar() {
    return (
        <div className={'bg-white w-full flex justify-center'}>
            <MaxWidthWrapper className={'w-full flex gap-4 h-20 border-t items-center justify-between relative'}>
                <Link href={'/'}>
                    <Image src={logo} alt={'logo'} className={'hidden sm:block w-[150px]'}/>
                    <Image src={logo} alt={'logo'} className={'w-[100px] sm:hidden'}/>
                </Link>
                <NavigationMenu className={'hidden sm:block'}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Domaines de formation</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >

                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    shadcn/ui
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Beautifully designed components that you can copy and
                                                    paste into your apps. Accessible. Customizable. Open
                                                    Source.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/docs" title="Introduction">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                    <ListItem href="/docs/installation" title="Installation">
                                        How to install dependencies and structure your app.
                                    </ListItem>
                                    <ListItem href="/docs/primitives/typography" title="Typography">
                                        Styles for headings, paragraphs, lists...etc
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Certifications Internationales</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Neurone Talents
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Vous êtes
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className={'flex space-x-5 ml-auto sm:mr-4 '}>
                    <Popover>
                        <PopoverTrigger asChild>
                            <SearchIcon size={26}/>
                        </PopoverTrigger>
                        <PopoverContent className="w-full mt-5 z-5 border border-red-900">
                            <div className="grid gap-4">

                                <div className="grid gap-2">
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Input
                                            id="width"
                                            defaultValue="100%"
                                            className="col-span-2 h-8"
                                        />
                                    </div>

                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <Link href={'/auth'}>
                        <UserIcon size={26}/>
                    </Link>
                    <ShoppingCartIcon size={26}/>
                </div>

                <div className={'sm:hidden ml-auto'}>
                    <Sheet >
                        <SheetTrigger><MenuIcon size={40}/></SheetTrigger>
                        <SheetContent className={'bg-custom-blue border-none text-white'} side={'left'}>
                            <SheetHeader>
                                <SheetTitle></SheetTitle>
                                <SheetDescription className={'text-white flex flex-col text-left space-y-2'}>
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger className={'text-xl'}>Domaine de formation</AccordionTrigger>
                                            <AccordionContent className={'flex flex-col'}>
                                                <Link href={''} className={'p-4 hover:bg-white/10'}>Achats</Link>
                                                <Link href={''} className={'p-4 hover:bg-white/10'}>Assistant(e)</Link>
                                                <Link href={''} className={'p-4 hover:bg-white/10'}>Banque</Link>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger className={'text-xl text-left'}>Certifications internationnales</AccordionTrigger>
                                            <AccordionContent className={'flex flex-col'}>
                                                <Link href={''} className={'p-4 hover:bg-white/10'}>Achats</Link>
                                                <Link href={''} className={'p-4 hover:bg-white/10'}>Assistant(e)</Link>
                                                <Link href={''} className={'p-4 hover:bg-white/10'}>Banque</Link>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-3">
                                            <AccordionTrigger className={'text-xl'}>Solutions</AccordionTrigger>
                                            <AccordionContent className={'flex flex-col'}>
                                                <Link href={''} className={'p-4 hover:bg-white/10'}>Achats</Link>
                                                <Link href={''} className={'p-4 hover:bg-white/10'}>Assistant(e)</Link>
                                                <Link href={''} className={'p-4 hover:bg-white/10'}>Banque</Link>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    <Link href={''} className={'py-4 hover:underline text-xl'}>Neurones Talents</Link>
                                    <Link href={''} className={'py-4 hover:underline text-xl'}>Vous êtes</Link>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </MaxWidthWrapper>


        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
