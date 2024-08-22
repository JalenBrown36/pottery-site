"use client";

import React from "react";
import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { data } from "../../data";

export default function VideoGrid() {
  const url = ""; // This is the URL for the YouTube API (https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC4bU4PzXr_dSoWFjTa9bvRA&maxResults=12&order=date&type=video&key=[YOUR_API_KEY])
  const youtubeData = data.items; // Sample data from the YouTube API
  const [videos, setVideos] = useState([]); // This is the state for the videos

  useEffect(() => {
    // Check if there is a URL
    if (url !== "") {
      // Fetch data from the YouTube API
      const fetchData = async () => {
        // Example fetch request
        const res = await fetch(url);
        // convert the response to JSON and set the state
        const data = await res.json();
        setVideos(data.items);
        console.log("Data fetched from YouTube API");
      };
      // Call fetchData function and catch any errors
      fetchData().catch((error) => {
        console.error(error);
      });
    }
  }, []);
  console.log(videos);
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Conditional Rendering if API call or not */}
      {videos.length != 0 ? videos?.map((video: any, index: number) => (
        <VideoCard key={index} id={video.id.videoId} snippet={video.snippet} url={`https://www.youtube.com/watch?v=${video.id.videoId}`} />
      )) 
    :
    youtubeData.map((video: any, index: number) => (
      <VideoCard key={index} id={video.id.videoId} snippet={video.snippet} url={`https://www.youtube.com/watch?v=${video.id.videoId}`} />
    ))}
    </div>
  );
}
