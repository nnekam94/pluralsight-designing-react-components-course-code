import SpeakerDemographics from "./SpeakerDemographics";
import SpeakerImage from "./SpeakerImage";
import Sessions from "./Sessions";

function Speaker({speaker}){
    const {id, first, last,sessions} = speaker;
    return(
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
            <div className="card card-height p-4 mt-4">
                <SpeakerImage id={id} first={first} last={last} />
                <SpeakerDemographics {...speaker}/>
                <Sessions sessions={sessions} />
            </div>
        </div>
    );
}

export default Speaker;