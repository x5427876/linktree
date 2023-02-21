import Image from "next/image";
import data from "../../data.json";
import LinkCard from "@/components/linkCard";

export default function Home() {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-16">
            <Image
                className="rounded-full mb-4"
                src={data.avatar}
                alt="avatar"
                width={96}
                height={96}
            />
            <h1 className="font-semibold text-xl">{data.name}</h1>
            {data.links.map((link, i) => {
                return <LinkCard href={link.href} title={link.title} key={i} />;
            })}
        </div>
    );
}
