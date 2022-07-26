import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import TimezoneSelect from 'react-timezone-select'

const TimeZone = () => {

    const [selectedTimezone, setSelectedTimezone] = useState({});

    return (
        <div className='w-3/4 mx-auto'>
            <blockquote>Please select your timezone</blockquote>
            <div className="select-wrapper">
                <TimezoneSelect
                    value={selectedTimezone}
                    onChange={setSelectedTimezone}
                />
            </div>

            {/* time zone output here. if need any info from here for scheduling or other field then use it otherwise remove it */}
            <h3>Output:</h3>
            <div
                style={{
                    backgroundColor: '#ccc',
                    padding: '20px',
                    margin: '20px auto',
                    borderRadius: '5px',
                    maxWidth: '600px',
                }}
            >
                <pre
                    style={{
                        margin: '0 20px',
                        fontWeight: 500,
                        fontFamily: 'monospace',
                    }}
                >
                    {JSON.stringify(selectedTimezone, null, 2)}
                </pre>
            </div>
            {/* time zone output here. if need any info from here for scheduling or other field then use it otherwise remove it */}
        </div>
    );
};

const rootElement = document.getElementById('root')
ReactDOM.render(<TimeZone />, rootElement)

export default TimeZone;