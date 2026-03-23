import Link from "next/link";

export default function Button({ text, dir, fontsize }) {
    return (
        <Link href={`${dir}`}>
            <button
                type="submit"
                style={{ height: "44px" }}
                className="
                shrink-0 border cursor-pointer rounded-xl 
                border-border p-px group 
                disabled:opacity-50 disabled:cursor-not-allowed 
                bg-white select-none
                min-w-0
                w-fit
              "
            >
                <div
                    className="
                  flex size-full gap-1 items-center justify-center rounded-xl 
                  border border-border w-full h-full 
                  bg-[#5c5c5c] text-white 
                  group-hover:bg-[#4a4a4a] 
                  px-10
                  transition duration-300
                "
                >
                    <span className={`font-medium!`} style={{
                        fontSize: fontsize
                    }}>{text}</span>
                </div>
            </button>
        </Link>
    )
}
