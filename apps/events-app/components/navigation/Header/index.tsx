import Image from "next/image";

import Button from "@/components/ui/buttons/Button";
import { useGlobalContext } from "@/context/GlobalContext";
import { useUserPassportContext } from "@/context/PassportContext";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { dashboardRoutes } from "@/components/navigation/Dashboard/routes";
import { useRouter } from "next/router";
import { RxAvatar } from "react-icons/rx";
import IconButton from "@/components/ui/buttons/IconButton";
import { HiMenuAlt1 } from "react-icons/hi";
import { User } from "@/components/ui/icons";

export default function DashboardHeader() {
  const { signIn } = useUserPassportContext()
  const { isAuthenticated, user } = useGlobalContext();
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-white/10">
      <header className="w-full py-3 px-5 md:px-8 space-x-10 flex sm:justify-between justify-end items-center bg-[#2F3232] ">
        <div className="flex gap-2 w-[265px]">
          <IconButton variant="dark" className=" rounded-full bg-componentPrimary border-none hover:b-- duration-200" icon={HiMenuAlt1} />
          <Link href="/">
            {/* create responsive image */}
            <Image src="/images/Logo.png" alt="Zuzalu Logo" width={150} height={35} />
          </Link>
        </div>
        <div className="hidden md:block">
          <input type="text" placeholder="Search" className="w-96 h-10 rounded-3xl px-5 bg-zinc-800" />
        </div>
        <div>
          {
            isAuthenticated ? (
              <Button leftIcon={User} variant="quiet" className="space-x-2 rounded-full">
                {user?.email}
              </Button>
            ) : (
              <Popover>
                <PopoverTrigger className="flex space-x-2 items-center rounded-3xl px-5 py-2 h-full bg-dark text-sm md:text-base" onClick={signIn}>
                  <Image src="/images/zaluza blackandwhite.png" width={20} height={20} alt="Passport" className="mr-2" />
                  Connect <span className="hidden md:inline">{' '}Passport</span>
                </PopoverTrigger>
                <PopoverContent className="bg-[#2B2D2DE5]">
                  <div className="w-full flex flex-col items-center">
                    <Image src="/images/small-icon.png" alt="Avatar" width={100} height={25} />
                    <p className="text-white/50">Powered by Zero-Knowledge</p>
                    <div className="my-5">
                      {
                        !isAuthenticated ? (
                          <p>Confirming on Zupass...</p>
                        ) : (
                          <p className="font-bold text-primary">Connected!</p>
                        )
                      }
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

            )
          }
        </div>
      </header>

    </div>
  )
}