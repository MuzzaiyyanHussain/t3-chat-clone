"use client"
import { Button } from '@/components/ui/button'
import { signIn } from '@/lib/auth-client'
import Image from 'next/image'
import React from 'react'

const SignInPage = () => {
    return (
        <div className='flex flex-col px-4 py-16 md:py-32 items-center justify-center min-h-screen bg-background'>
            <div className='flex flex-row justify-center items-center gap-x-2'>
                <h1 className='text-3xl font-extrabold text-foreground'>
                    Welcome to
                </h1>
                <Image src={"/logo.svg"} width={142} height={142} />
            </div>
            <p className='mt-2 text-lg text-muted-foreground font-semibold'>
                Sign in below (we will increase your message limits if you do 😜)
            </p>
            <Button onClick={() => signIn.social({
                provider:"github",
                callbackURL:"/"
            })} variant={"default"} className={"max-w-sm mt-5 w-full px-7 py-7 flex flex-row justify-center items-center cursor-pointer"}>
<Image src={"/github.svg"} width={24} height={24}/>
<span>Sign in with Github</span>
            </Button>
        </div>
    )
}

export default SignInPage
