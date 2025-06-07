import StudentInfo from "../components/StudentInfo";
import Link from "next/link";
import Image from "next/image";
import styles from "../components/Extra.module.css";

export default function GetStudentInfoPage() {
    return(
        <div className="flex flex-col items-center min-h-screen bg-black/[.05] p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-3xl font-bold mt-8">Student Information</h1>
             <div className={`${styles.darkGray} rounded-lg shadow-lg flex flex-col items-center w-full max-w-xl`}>
                <div className="welcome-card rounded shadow-lg text-center bg-background max-w-xl w-full gap-[32px]">
                    <div className="p-1 bg-background">
                        <Image
                        src="/waving_cappibara2.gif"
                        alt="Welcome Icon"
                        width={140}
                        height={140}
                        className="mx-auto"
                        />
                        <hr className="border-t border-gray-200" />
                    </div>
                </div>
                <StudentInfo />
            </div>
            <div className="flex gap-8 items-center flex-col sm:flex-row justify-center">
                <Link
                    href="/"
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                >
                Home
                </Link>
                <Link
                    href="/InteractiveCounter"
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                >
                Interactive Counter
            </Link>
        </div>
    </div>
    );
}