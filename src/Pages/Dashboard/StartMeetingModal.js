import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const StartMeetingModal = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <input type="checkbox" id="meetingOpen" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            for="meetingOpen"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Hello <span className="text-error">{user?.displayName}</span> !
          </h3>
          <p className="py-4">
            Congratulations! You chose to join one-on-one meeting with the
            specialist. Your meeting about to start!
          </p>
          <a
            href={`https://breeze-time-conference-room.web.app/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIzMmY3ZjlkZC1hMTA2LTQ3NjktOWVmNi1jMzgwMDI1YTAyOWUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2MjA0MTAwMSwiZXhwIjoxNjYyNjQ1ODAxfQ.xxFPXDjg43YEQ87owaa8DwLVeqX6WxZoc90LIl91-UY&meetingId=breezeTimeConferenceRoom&webcamEnabled=true&micEnabled=true&name=${user?.displayName}`}
          >
            <button className="w-full btn  btn-primary"> Join Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StartMeetingModal;
