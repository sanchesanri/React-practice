import React from 'react';

export function VideoList({ videos, onSelect }) {
  return (
    <ul>
      {videos.map(video => (
        <li key={video.id}>
          <a href="#" onClick={() => onSelect(video.link)}>
            {video.link}
          </a>
        </li>
      ))}
    </ul>
  );
}
