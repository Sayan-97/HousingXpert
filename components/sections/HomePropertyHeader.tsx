type HeaderTypes = {
    title: string;
    des: string;
    type: 'row' | 'column';
}

export default function HomePropertyHeader(props: HeaderTypes) {
    return (
        <div className={`${props.type === 'row' ? 'text-center lg:items-center max-lg:gap-8 justify-between' : ''}`}>
            <h1 className="lg:w-[50%] text-4xl md:text-[2.938rem] leading-snug text-customDarkGreyVarient font-bold mx-auto text-white">{props.title}</h1>
            <p className="lg:w-[60%] text-customDarkGreyVarient font-medium text-base mx-auto text-white">{props.des}</p>
        </div>
    )
}