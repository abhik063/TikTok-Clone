import React from "react";
import "./App.css";
import Video from "./Video";
function App() {
  return (
    <div className="app">
      <div className="app_videos">
        <Video
          url="https://v16m.tiktokcdn.com/77b0b8ba4906985560015c3428cc56f8/5f58ca64/video/tos/useast2a/tos-useast2a-ve-0068c002/4ffdaa38f94145bea9a266c53c521cd1/?a=1233&amp;br=1614&amp;bt=807&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;l=202009090627550101890740365B0617F9&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=aml4ajV1c2RtdzMzaDczM0ApaGY3aTQ5OGQ5NzpnPGRnZWdyMy0tcDVkay9fLS0xMTZzc19jMzUuYS02YTBiNi9fYmM6Yw%3D%3D&amp;vl=&amp;vr="
          channel="duaLipa"
          description="it works"
          songs="i feel good"
          messages={456}
          likes={600}
          shares={789}
        />
        <Video
          url="https://v77.tiktokcdn.com/312e8a95348d9aea5cd22d78fbf3bf82/5f58cc25/video/tos/useast2a/tos-useast2a-pve-0068/352d7e3aa0834f5bb37eb094da5a8886/?a=1233&amp;br=3164&amp;bt=1582&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;l=202009090635340101901851300506715C&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=Mzllc3FnM3lydzMzPDczM0ApaWY2Mzw3OmVpN2lkNDNlZmdfajBpaGZwcTFfLS0vMTZzczBgMF4zYDA0MmIwY2FiYTI6Yw%3D%3D&amp;vl=&amp;vr="
          channel="duaLipa"
          description="it works"
          songs="i feel good"
          messages={456}
          likes={600}
          shares={789}
        />
      </div>
    </div>
  );
}

export default App;
