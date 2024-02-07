import * as React from "react";
import { User } from "./user";
import { ModeToggle } from "./modeToggle";
import { Input } from "../ui/input";
import Image from "next/image";
import Link from "next/link";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },

    {
        id: 2,
        title: "Contact",
        url: "/contact",
    },
];

const Navbar = () => {
    return (
        <nav className="ease-in-outs custom-filter sticky top-0 z-30 w-full border-b border-accent py-3 transition duration-300 md:bg-background/90">
            <div className="container mx-auto px-6">
                <div className="mx-auto">
                    <div className="flex w-full items-center justify-between gap-5">
                        <div className="flex items-center gap-4">
                            <div className="w-10">
                                <p className="title hidden text-xl font-bold md:block">
                                    Demer
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-8">
                            <ul className="flex items-center space-x-2">
                                <ModeToggle />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
