export default function LeafIcon({ color="#ffffff" , size=24 }: { color?:string, size?:number}) {
    return (
        <svg
            fill={color}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            height={size}
            width={size}
            viewBox="0 0 551.391 551.391"
            stroke="#ffffff"
            className="inline-block"
        >
            <g strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                <path d="M413.695,0c0,0-45.366,44.014-94.43,61.759C-44.068,193.178,109.165,449.277,114.164,450.121 c0,0,20.374-35.48,47.896-55.717c174.644-128.389,210.14-276.171,210.14-276.171s-39.19,177.829-194.562,288.479 c-34.316,24.426-57.552,84.568-67.388,144.679c0,0,24.325-9.828,34.785-12.49c4.079-26.618,12.607-52.106,27.025-74.875 c217.151,25.854,288.272-149.123,297.563-210.136C491.552,109.79,413.695,0,413.695,0z">
                </path>
            </g>
        </svg>
    )
}
