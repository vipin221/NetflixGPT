import React from 'react'
import { useSelector } from 'react-redux';
import VideoBannerTitle from './VideoBannerTitle';
import BannerbgVideo from './BannerbgVideo';

const VideoBanner = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovie);
    if (!movies) return;
    const movie = movies[0];
    const { original_title, overview ,id} = movie;
    return (

        <div className='flex w-screen xl:aspect-video bg-black md:bg-transparent justify-start items-center pt-[25%] sm:pt-[20%] md:pt-[15%] lg:pt-[10%] xl:pt-0 '>
            <VideoBannerTitle title={original_title} overview={overview} />
            <BannerbgVideo id={id}/>

        </div>
    )
}

export default VideoBanner
