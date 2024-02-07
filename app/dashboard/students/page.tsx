// @flow
import * as React from "react";
import { Search, User, Plus } from "lucide-react";

const Page = () => {
    return (
        <div>
            <div className="mb-6 flex flex-wrap justify-end gap-2">
                <div className="relative mr-auto flex max-w-md grow items-center overflow-hidden rounded-md border bg-white px-2 text-gray-600">
                    <input
                        className="h-10 w-full bg-transparent text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Search"
                    />
                    <div className="text-neutral-100">
                        <Search />
                    </div>
                </div>

                <div className="flex items-center p-2 rounded-lg border-2 border-white">
                    <p className="pr-5">Add Student</p>
                    <Plus />
                </div>
            </div>

            <div>
                <Student
                    studentName={"Rakoto Be"}
                    classe={"L2"}
                    date={"9 Nov 2023"}
                    email={"hei.blabla@gmail.com"}
                />

                <Student
                    studentName={"Cecille Léa"}
                    classe={"L2"}
                    date={"10 Nov 2023"}
                    email={"hei.blabla@gmail.com"}
                />

                <Student
                    studentName={"Demer Tsiory"}
                    classe={"L2"}
                    date={"15 Nov 2023"}
                    email={"hei.blabla@gmail.com"}
                />

                <Student
                    studentName={"Mickael Rajaonarison"}
                    classe={"L2"}
                    date={"9 Nov 2023"}
                    email={"hei.blabla@gmail.com"}
                />

                <Student
                    studentName={"Steve Clein"}
                    classe={"L2"}
                    date={"9 Nov 2023"}
                    email={"hei.blabla@gmail.com"}
                />

                <Student
                    studentName={"Jane Doe"}
                    classe={"L2"}
                    date={"9 Nov 2023"}
                    email={"hei.blabla@gmail.com"}
                />

                <Student
                    studentName={"Bredan Smith"}
                    classe={"L2"}
                    date={"9 Nov 2023"}
                    email={"hei.blabla@gmail.com"}
                />

                <Student
                    studentName={"Toky Fy"}
                    classe={"L2"}
                    date={"9 Nov 2023"}
                    email={"hei.blabla@gmail.com"}
                />

                <Student
                    studentName={"Fifalina Mihaja"}
                    classe={"L2"}
                    date={"9 Nov 2023"}
                    email={"hei.blabla@gmail.com"}
                />
            </div>
        </div>
    );
};

type IStudent = {
    studentName: string;
    email: string;
    classe: string;
    date: string;
};

function Student({ studentName, classe, email, date }: IStudent) {
    return (
        <div className="flex h-min cursor-pointer items-start gap-3 rounded-md border p-2 hover:bg-neutral-800 my-4">
            <div className="relative flex aspect-square items-center justify-center rounded-full bg-blue-100 p-3 text-neutral-600">
                <User />
            </div>
            <div className="flex grow flex-col gap-2">
                <div className="mr-auto flex items-center justify-between text-neutral-100">
                    <h2 className="text-sm font-bold text-neutral-400">
                        {studentName}
                    </h2>
                </div>
                <p className="text-sm text-neutral-400">{email}</p>
                <div className="flex flex-wrap gap-2">
                    <div className="flex flex-wrap gap-1"></div>
                    <div className="ml-auto flex text-xs text-neutral-100">
                        {classe} __ <span className="italic"> {date} </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
