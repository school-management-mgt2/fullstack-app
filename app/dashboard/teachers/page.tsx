import * as React from "react";
import { Search, Heart, Mail, Bookmark, Pencil } from "lucide-react";

import Link from "next/link";

const Page = () => {
    return (
        <div className="relative mx-auto flex max-w-2xl flex-col gap-6">
            <div className="mb-6 flex flex-wrap justify-end gap-2">
                <div className="relative mr-auto flex max-w-md grow items-center overflow-hidden rounded-md border bg-white px-2 text-gray-600">
                    <input
                        className="h-10 w-full bg-transparent text-sm  focus:outline-none "
                        type="search"
                        name="search"
                        placeholder="Search"
                    />
                    <div className="text-neutral-400">
                        <Search />
                    </div>
                </div>
                <div className="flex w-max cursor-pointer items-center gap-1 rounded-md border border-neutral-300 bg-neutral-50 p-3 text-sm text-neutral-800">
                    <p className="text-xm font-mono font-bold">Write</p>
                    <Pencil size={16} />
                </div>
            </div>

            <Teacher
                name={"Pr Proton"}
                subject={"Math"}
                email={"Proton@gmail.com"}
                contact={"1234567890"}
                tag={["math", "number"]}
            />

            <Teacher
                name={"Toky"}
                subject={"LV2"}
                email={"toky@gmail.com"}
                contact={"1234567890"}
                tag={["Language", "English"]}
            />

            <Teacher
                name={"Pr pff"}
                subject={"History"}
                email={"pff@gmail.com"}
                contact={"1234567890"}
                tag={["History", "World"]}
            />
        </div>
    );
};

type ITeacher = {
    name: string;
    subject: string;
    email: string;
    contact: string;
    tag: string[];
};

function Teacher({ name, subject, email, tag, contact }: ITeacher) {
    return (
        <Link
            href={"/dashboard/blogs/blog"}
            className="flex flex-col gap-6 rounded-md border bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800"
        >
            <div className="flex gap-2">
                <div>
                    <p className="font-bold">{name}</p>
                    <p className="font-mono text-[1rem]">{subject}</p>
                </div>
            </div>
            <div className="flex flex-col gap-3 ">
                <div className="flex flex-wrap gap-1">
                    {tag.map((tag, index) => (
                        <span
                            key={index}
                            className="flex items-center justify-center rounded-md bg-blue-50 p-1 px-2 text-sm leading-3 dark:bg-neutral-700 dark:text-neutral-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-400">
                    <Mail absoluteStrokeWidth size={20} />
                    <p className="text-[1rem] font-bold">{email}</p>
                    <p>{contact}</p>
                </div>
            </div>
        </Link>
    );
}

export default Page;
