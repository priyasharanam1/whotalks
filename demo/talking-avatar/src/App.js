
import { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Html } from '@react-three/drei'
// import { Model } from "./Explorer";
// import { Model } from './Man';
import { Lady } from './Lady';
import { Classroom } from './Class';
import { Computer } from './Computer';
// import { Model } from './Spanish';
// import { Model } from './Teacher';
import { ConvaiClient } from 'convai-web-sdk';
import { SETTINGS } from './constants';

const convaiClient = new ConvaiClient({
  apiKey: SETTINGS['CONVAI-API-KEY'],
  characterId: SETTINGS['CHARACTER-ID'],
  enableAudio: true, // use false for text only.
});

export default function App() {
  const [userText, setUserText] = useState("Press & Hold Space to Talk!");
  const finalizedUserText = useRef();
  const [npcText, setNpcText] = useState("");
  const npcTextRef = useRef();
  const [isTalking, setIsTalking] = useState(false);

  convaiClient.setResponseCallback((response) => {
    if (response.hasUserQuery()) {
      var transcript = response.getUserQuery();
      var isFinal = transcript.getIsFinal();
      if (isFinal) {
        finalizedUserText.current += " " + transcript.getTextData();
        transcript = "";
      }
      if (transcript) {
        setUserText(finalizedUserText.current + transcript.getTextData());
      } else {
        setUserText(finalizedUserText.current);
      }
    }
    if (response.hasAudioResponse()) {
      var audioResponse = response?.getAudioResponse();
      npcTextRef.current += " " + audioResponse.getTextData();
      setNpcText(npcTextRef.current);
    }
  });
  

  convaiClient.onAudioPlay(() => {
    setIsTalking(true);
  });

  convaiClient.onAudioStop(() => {
    setIsTalking(false);
  });


  const [keyPressed, setKeyPressed] = useState(false);

  function handleSpacebarPress(event) {
    if (event.keyCode === 32 && !keyPressed) {
      setKeyPressed(true);
      finalizedUserText.current = "";
      npcTextRef.current = "";
      setUserText("");
      setNpcText("");
      convaiClient.startAudioChunk();
    }
  }

  function handleSpacebarRelease(event) {
    if (event.keyCode === 32 && keyPressed) {
      setKeyPressed(false);
      convaiClient.endAudioChunk();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleSpacebarPress);
    window.addEventListener('keyup', handleSpacebarRelease);
    return () => {
      window.removeEventListener('keydown', handleSpacebarPress);
      window.removeEventListener('keyup', handleSpacebarRelease);
    };
  });


  return (
    <>
    <Canvas shadows camera={{ position: [0, 0, 15], fov: 30 }}>
    {/* files="/snowy_forest_path_01_4k.hdr"  */}
      {/* <Environment ground={{ height: 5, radius: 30, scale: 20 }} /> */}
      <Classroom/>
      <Computer position={[5.4, -2, 1]} scale={0.03}/>
      <Lady position={[0, -2, 0]} scale={3} animationName={isTalking ? "talk" : "idle"} />
      {/* <group position={[0, -2, 0]} scale={2.7}>
      <Lady/>
      </group> */}
      <ambientLight intensity={0.8}/>
      <Html position={[-1.91, -1.5, 3]}>
        {userText && (<div style={{
          width: '100%', height: '100%', overflow: 'auto', borderRadius: '10px',
          background: 'rgba(255, 255, 255, 0.6)', padding: '7px', textAlign: 'center'
        }}>
          <p style={{ maxHeight: '300px', width: '300px' }}>{userText}</p>
        </div>)}
      </Html>
      <Html position={[-4.8, 2.6, 3]}>
        {npcText && (<div style={{
          width: '100%', height: '100%', overflow: 'auto', borderRadius: '10px',
          background: 'rgba(255, 255, 255, 0.6)', padding: '7px', textAlign: 'center'
        }}>
          <p style={{ maxHeight: '300px', width: '300px' }}>{npcText}</p>
        </div>)}
      </Html>
      <OrbitControls enableZoom={true} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2.25} />
    </Canvas>
    </>
  );
}

