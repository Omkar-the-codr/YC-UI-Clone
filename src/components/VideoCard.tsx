export function VideoCard(props: any) {
    return (
        <div className="p-2">
            <img src={props.image} className="rounded-xl"/>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img className="rounded-full w-20 h-15" src={props.Thumbimage}/>
                </div>
                <div className="col-span-8 pl-2">
                    <div>
                    {props.title}
                    </div>
                <div className="col-span-8 text-gray-400 text-base">
                    {props.author}
                </div>
                <div className="col-span-8 text-gray-400 text-base">
                    {props.views} | {props.timestamp}
                </div>
                </div>
            </div>
        </div>
    );
}
