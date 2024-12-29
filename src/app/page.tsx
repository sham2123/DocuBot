import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FileUpload from "@/components/ui/FileUpload";
export default async function Home() {
  const { userId } = await auth()
  const isAuth = !!userId
  return (
    <div className="w-screen min-h-screen bg-gradient-to-tr from-indigo-900 via-sky-300 to-lime-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center">
        <h1 className="mr-4 text-4xl font-bold">Get insights from any PDF!</h1>
        <UserButton afterSignOutUrl="/" /> 
        </div>

      <div className="flex mt-2">
        {isAuth && <Button>Go to Conversations</Button>}
      </div>
          <p className="max-w-xl mt-1 text-lg text-slate-600">
          Tackle any PDF with the help of AI!
          </p>
          <div className="w-full mt-4">
            {isAuth ? (
              <FileUpload />
              ) : (
            <Link href="/sign-in">
              <Button>
                Login to get started!
                <LogIn className = "w-4 h-4 ml-2"/>
              </Button>
            </Link>
            )}
          </div>
      </div>
      </div>
    </div>
  );
} 
 