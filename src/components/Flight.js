export default function Flight({item}){
    return(
        <div>
            <div>
                {item.mission_name}-{item.launch_year}
                <img src={item.links.mission_patch_small} alt="mission_patch_small"/>
            </div>
        </div>
    )
}