import { useEffect, useState } from "react";
import LiveCard from "./LiveCard";

type LiveData = {
    id: string;
    place: string;
    date: string;
    startTime?: string;
    start_time?: string;
    title: string;
    price: number;
    imgUrl: string;
}

function LiveCardContainer(){

    const [liveDatas,setLiveDatas] = useState<LiveData[]>([]);

    useEffect( () => {
        fetch("https://xbtsustt5e.execute-api.ap-northeast-1.amazonaws.com/dev/live-datas",{method: 'GET'})
        .then( (response) => response.json())
        .then( (data) => {
            const normalizedLiveDatas = data.liveDatas.map((liveData: LiveData) => ({
                ...liveData,
                startTime: liveData.startTime ?? liveData.start_time,
            }));
            setLiveDatas(normalizedLiveDatas); 
        });
    }, [])

    if (!liveDatas || liveDatas.length == 0){
        return (
            <div className="live-card-container">
                <p>loading...</p>
            </div>
        )
    }

    return (
        <div className="live-card-container">
            {liveDatas.map( (liveData) => {
                return (
                    <LiveCard
                        key={liveData.id}
                        id={liveData.id}
                        title={liveData.title}
                        place={liveData.place}
                        date={liveData.date}
                        startTime={liveData.startTime}
                        price={liveData.price}
                        img={liveData.imgUrl}
                    />
                )
            })}
        </div>
    );
}

export default LiveCardContainer;

