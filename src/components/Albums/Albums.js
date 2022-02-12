import Post from "../Post/Post";
import Album from "../Album/Album";

const Albums = ({albums}) => {
 return (
  <div>
      {albums.map(album=><Album key={album.id} album={album}/>)}
  </div>
 );
};

export  default Albums;