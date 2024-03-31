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

        <div className='flex h-screen justify-start items-center  relative'>
            <VideoBannerTitle title={original_title} overview={overview} />
            <BannerbgVideo id={id}/>

        </div>
    )
}

export default VideoBanner
