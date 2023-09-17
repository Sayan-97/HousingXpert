type HeaderTypes = {
    title: string;
    des: string;
    type: 'row' | 'column';
    textColor?: 'white' | 'normal'
}

export default function HomePageHeader(props: HeaderTypes) {
    return (
        <div className={`${props.type === 'row' ? 'flex lg:items-center max-lg:flex-col max-lg:gap-8 justify-between' : 'flex flex-col lg:items-center lg:text-center gap-8'}`}>
            <h1 className={`${props.type === 'row' ? 'lg:w-[40%]' : 'lg:w-full'} text-4xl md:text-[2.938rem] leading-snug ${props.textColor === 'white' ? 'text-white' : 'text-customDarkGreyVarient'} font-bold`}>{props.title}</h1>
            <p className={`${props.type === 'row' ? 'lg:w-[36%]' : 'lg:w-[70%]'} ${props.textColor === 'white' ? 'text-white' : 'text-customDarkGreyVarient'} font-medium text-base`}>{props.des}</p>
        </div>
    )
}
