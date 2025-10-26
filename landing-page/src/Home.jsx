import { useEffect } from 'react'
import { gsap } from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'

const Home = () => {
    useEffect(() => {
        gsap.registerPlugin(CSSRulePlugin)
        let tl = gsap.timeline({defaults: {duration:2}})

        tl.fromTo('.hero-title', 
            {
                clipPath: "polygon(0% 100%,100% 100%,100% 100%,0% 100%)",
                opacity: 0,
                y: 0,
            },
            {
                clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                opacity: 1, 
                y: 200,
                duration: 2.2,
            }
         )

         .fromTo('header',
            {
                opacity: 0,
                x: -80,
            },
            {
                opacity: 1,
                x: 0,
                duration: 2.5,
                ease: "bounce.out",
            }
         )

         .fromTo('.hero-form',
            {
                clipPath: "polygon(0% 100%,100% 100%,100% 100%,0% 100%)",
                opacity: 0, 
                y: 0,
            },
            {
                clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                opacity: 1, 
                y: 200,
                ease: "elastic.out(1, 0.5)",
            },
            "-=1"
         )

         .fromTo(".features .card", 
            {scaleY: 0, y: 0, transformOrigin: "0% 100%"},
            {scaleY: 1, y: 200, stagger: 0.2, ease: "power3.out"}
         )

        .fromTo(
            ".features .card p .content",
            {
                opacity: 0, y: 100
            },
            {
                opacity: 1, 
                y: 0, 
                duration: 1.2, 
                stagger: 0.2
            },
            "-=1.8"
        )

        .fromTo(
            ".footer-row",
            {opacity: 0, x: 80},
            {opacity: 1, x: 0, duration: 0.7, ease: "power3.out"},
            "-=1.2"
        )
    }, [])

    return (
        <>
            <div className='mt-[1em] mx-4 sm:mx-8 lg:mx-[10em] px-4 sm:px-6 lg:px-8'>
                <header>
                    <h1 className='text-4xl text-white'>Ze<span className='text-purple-400'>Ro</span></h1>
                </header>


                <main>
                    <div className='flex'>
                        <h1 className='hero-title text-center translate-y-[200px]  text-white text-3xl sm:text-4xl lg:text-5xl '>Valorant Skin Rating Platform</h1>

                        <div className='m-0 mx-auto translate-y-[200px] mb-[0.4em] block font-bold text-white text-2xl hero-form'>
                            <label>Search Skin Name:</label>
                            <div className='flex items-stretch'>
                                <input type="text" placeholder='Enter Name' className='h-12 p-[1.2em] text-black text-[1rem] w-full rounded-[.2em] border-0 bg-white placeholder:text-black placeholder:opacity-40  mt-1.5 focus:outline-none focus:ring-2 focus:ring-[#923ADB]' />
                                <input type="submit" value="Search" className='h-12 px-5 w-[8em] bg-[#923ADB] text-white border-0 ml-[0.5em] font-bold cursor-pointer rounded mt-1.5 hover:bg-[#7f2fc0]' />
                            </div>
                        </div>
                    </div>

                    <div className="features grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        <div className="card relative w-full min-h-[8em] text-white translate-y-[200px]">
                            <div className="content relative pl-4 translate-y-[100px]">
                                <span className="absolute left-0 top-0 bottom-0 w-px bg-[#4E5862]" />
                                <p className="font-bold">Compare Skins</p>
                                <p className="text-[#697887]">Side-by-side sounds/VFX/inspect. No more guessing.</p>
                            </div>
                        </div>

                        <div className="card relative w-full min-h-[8em] text-white translate-y-[200px]">
                            <div className="content relative pl-4 translate-y-[100px]">
                                <span className="absolute left-0 top-0 bottom-0 w-px bg-[#4E5862]" />
                                <p className='font-bold'>Meta & Popularity</p>
                                <p className='text-[#697887]'>What the community actually equips in ranked.</p>
                            </div>
                        </div>
                        <div className="card relative w-full min-h-[8em] text-white translate-y-[200px]">
                            <div className="content relative pl-4 translate-y-[100px]">
                                <span className="absolute left-0 top-0 bottom-0 w-px bg-[#4E5862]" />
                                <p className='font-bold'>Wishlists & Alerts</p>
                                <p className='text-[#697887]'>“Ping me when RGX Phantom appears.” Boom.</p>
                            </div>
                        </div>
                        <div className="card relative w-full min-h-[8em] text-white translate-y-[200px]">
                            <div className="content relative pl-4 translate-y-[100px]">
                                <span className="absolute left-0 top-0 bottom-0 w-px bg-[#4E5862]" />
                                <p className='font-bold'>Skin Tiers Explained</p>
                                <p className='text-[#697887]'>Clear rarity tiers + what you’re paying for.</p>
                            </div>
                        </div>
                    </div>
                </main>



            </div>
            <footer className="py-[2em] px-[1em] text-[#1A1A1A] font-bold mt-[25em] [background:linear-gradient(90deg,#CC2B5B,#923ADB_97.46%)]">
                <div className="footer-row max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className='flex items-center gap-3'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                            />
                        </svg>
                        <p className='text-[2rem] m-7 '>All of this, coming in 2026</p>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-lg font-semibold'>Learn more by following us:</span>
                        <svg viewBox="0 0 16 16" fill="currentColor" className="w-15 h-10" aria-hidden="true">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                        <p className='text-2xl'>ZeRo</p>

                    </div>

                </div>

            </footer>
        </>
    )
}

export default Home
