export default function TriangleRight({ color="white", size=24 }: { color:string, size:number}) {
    return (
        <svg className='inline mb-1 ml-2' width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="20,10 80,50 20,90" fill={color}/>
        </svg>
    )
}
