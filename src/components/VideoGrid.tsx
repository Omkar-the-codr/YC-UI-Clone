import { VideoCard } from "./VideoCard"

const VIDEOS =  [{
    title:"How to learn coding in 30 days | 30 day plan | Code with me",
    image:"photo.png",
    Thumbimage:"hello.jpg",
    author:"Omkar Chaturvedi",
    views:"100k",
    timestamp:"Two days ago"
},
{
    title:"How to learn coding in 30 days | 30 day plan | Code with me",
    image:"photo.png",
    Thumbimage:"hello.jpg",
    author:"Omkar Chaturvedi",
    views:"100k",
    timestamp:"Two days ago"
},
{
    title:"How to learn coding in 30 days | 30 day plan | Code with me",
    image:"photo.png",
    Thumbimage:"hello.jpg",
    author:"Omkar Chaturvedi",
    views:"100k",
    timestamp:"Two days ago"
},
{
    title:"How to learn coding in 30 days | 30 day plan | Code with me",
    image:"photo.png",
    Thumbimage:"hello.jpg",
    author:"Omkar Chaturvedi",
    views:"100k",
    timestamp:"Two days ago"
}]



export const VideoGrid=()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video=><div>
            <VideoCard
                title={video.title}
                image={video.image}
                Thumbimage={video.Thumbimage}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}></VideoCard>
        </div>)}
    </div>
}