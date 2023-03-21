import {TailSpin} from 'react-loader-spinner';
import './loader.styles.css'

export const Loader = () => {
    return (
        <div className="loadingContainer">
            <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
        </div>
    )
}