import type { Metadata } from 'next'
import './globals.css'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-display antialiased flex h-screen`}>
          <div id="sidebar" className="flex flex-col items-center w-24 border-r border-border px-4 py-6 gap-10">
            <p id="logo" className="text-xs font-medium text-center py-2">
              TaskiTasku
            </p>

            <Button className=" size-10 hover:size-12 rounded-full transition-all" variant={'default'}>
              +
            </Button>
            <ul id="color-blobs" className="flex flex-col items-center gap-4">
              <li className="bg-amber-400 size-4 rounded-full hover:size-5 transition-all cursor-pointer"></li>
              <li className="bg-red-300 size-4 rounded-full hover:size-5 transition-all cursor-pointer"></li>
              <li className="bg-purple-400 size-4 rounded-full hover:size-5 transition-all cursor-pointer"></li>
              <li className="bg-blue-400 size-4 rounded-full hover:size-5 transition-all cursor-pointer"></li>
              <li className="bg-lime-300 size-4 rounded-full hover:size-5 transition-all cursor-pointer"></li>
              <li className="bg-gray-200 size-4 rounded-full hover:size-5 transition-all cursor-pointer"></li>
            </ul>
          </div>
          <main className="flex flex-col flex-grow gap-10 py-6 px-12 w-full max-w-[calc(100%-6rem)]">
            <div id="top-bar" className="flex flex-row justify-between">
              <input type="text" />
              <SignedOut>
                <SignInButton>
                  <button className="text-xs bg-slate-200 hover:bg-slate-200/80 transition-all py-2 px-4 rounded-lg">
                    Login
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
