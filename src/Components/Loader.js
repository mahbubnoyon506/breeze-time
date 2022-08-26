import React from 'react';
import { Circles } from 'react-loader-spinner'


const Loader = () => {
    return (
        <div className="flex items-center justify-center">
            {/* <div className="w-8 h-8 border-b-2 border-primary rounded-full animate-spin"></div> */}
            <Circles
                height="48"
                width="48"
                color="#F96669"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperclassName=""
                visible={true}
            />
        </div>
    );
};

export default Loader;