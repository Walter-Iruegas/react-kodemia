// import { Focus } from "./components/useRefs/Focus"
// import {CopyApp} from './components/useRefs/CopyApp';
// import { VideoPlayer } from "./components/useRefs/VideoPlayer";
// import { RenderCounter } from "./components/useRefs/RenderCounter";

import { ResizeAppParent } from "./components/useEffect/ResizeApp"
import { FetchPosts } from "./components/useEffect/FetchPosts"
// import { Lifecycle } from "./components/useEffect/Lifecycle"


export const Clase9 = () => {
    return(
        <div className="container-fluid">
            Other Hooks

            {/* <h3>useRef</h3> */}
            {/* <Focus/>*/}
            {/* <CopyApp> */}
            {/* <VideoPlayer/> */}
            {/* <RenderCounter/> */}

            <h3>UseEffect</h3>
            {/* <Lifecycle/> */}
            {/* <ResizeAppParent/> */}
            <FetchPosts/>
        </div>
    )
}