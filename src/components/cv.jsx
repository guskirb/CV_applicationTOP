import { useState } from "react";
import profilePic from "/profilepic.png";

function CV({ details, work, education, skills, fontColor, accentColor }) {
  const [image, setImage] = useState(profilePic);

  function handleImage(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  const listWork = work.map((item) => (
    <div className="work" key={item.id.toString()}>
      <div className="workDates">
        <h4>{item.start + " - " + (item.end === "" ? "Present" : item.end)}</h4>
      </div>
      <div className="workDetails">
        <h3>{item.employer}</h3>
        <h4>{item.title}</h4>
      </div>
      <p className="workDetails">{item.details}</p>
    </div>
  ));

  const listEducation = education.map((item) => (
    <div className="education" key={item.id.toString()}>
      <h3>{item.qualification}</h3>
      <div>
        <h4>{item.title}</h4>
        <h5>{item.location}</h5>
      </div>
      <h4>{item.date}</h4>
    </div>
  ));

  const listSkills = skills.map((item) => (
    <div className="skills" key={item.id.toString()} style={{backgroundColor: accentColor}}>
      <h4>{item.title}</h4>
    </div>
  ));

  return (
    <div className="cv" style={{color: fontColor}}>
      <div className="cvUpper">
        <label htmlFor="getFile" className="uploadFile">
          <input
            type="file"
            id="getFile"
            className="hide"
            onChange={handleImage}
          />
          <img id="profilePic" src={image} />
        </label>
        <div className="cvName">
          <h1>{details.first}</h1>
          <h1 className="last">{details.last}</h1>
          <h2>{details.role}</h2>
        </div>
      </div>
      <div className="cvMiddle">
        <div className="cvProfile">
          <h2 className="cvHeader" style={{backgroundColor: accentColor}}>Personal Details</h2>
          <div>
            <div className="phoneIcon" />
            <h3>Phone Number</h3>
          </div>
          <p>{details.num}</p>
          <div>
            <div className="emailIcon" />
            <h3>Email Address</h3>
          </div>
          <p>{details.email}</p>
          <div>
            <div className="websiteIcon" />
            <h3>Website</h3>
          </div>
          <p>{details.website}</p>
        </div>
        <div className="cvDetails">
          <p className="detailsAbout">{details.about}</p>
          <div className="cvSkills">{listSkills}</div>
        </div>
      </div>
      <div className="cvHeader" style={{backgroundColor: accentColor}}>
        <div className="blackSchoolIcon" />
        <h2 >Education</h2>
      </div>
      <div className="cvEducation">{listEducation}</div>
      <div className="cvHeader" style={{backgroundColor: accentColor}}>
        <div className="blackWorkIcon" />
        <h2>Experience</h2>
      </div>
      <div className="cvWork">{listWork}</div>
    </div>
  );
}

export default CV;
