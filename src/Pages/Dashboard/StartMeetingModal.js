import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const StartMeetingModal = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <input type="checkbox" id="meetingOpen" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="meetingOpen"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">
            Hello <span className="text-error">{user?.displayName}</span> !
          </h3>
          <p class="py-4">
            Congratulations! You chose to join one-on-one meeting with the
            specialist. Your meeting about to start!
          </p>
          <a
            href={`https://breeze-time-conference-room.netlify.app/?meetingId=breezeTimeConferenceRoom&webcamEnabled=true&micEnabled=true&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI2NjEzZjhmMS1iY2Y3LTRkNTEtYTA0Yi1lYmU2NWY5NTJhOGYiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2MTQxMzQzMiwiZXhwIjoxNjYyMDE4MjMyfQ.vccrcMw2Jde_nzDc3ESx3U_GUrneuZBQDCr9_JmXzrY&name=${user?.displayName}`}
          >
            <button className="w-full btn  btn-primary"> Join Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StartMeetingModal;
