import FormInput from "./form";

function PersonalInput({ details, onChange, isActive, onShow }) {
  return (
    <div
      className={
        "sidebarSection sidebarPersonal" + (isActive ? " active" : " inactive")
      }
    >
      <div className="sidebarUpper" onClick={onShow}>
        <div className="personIcon"></div>
        <h1>Personal Details</h1>
        {isActive ? <div className="arrow" /> : <div className="arrow down" />}
      </div>
      {isActive ? (
        <div className="sidebarLower">
          <div className="fullName">
            <FormInput
              name="First Name"
              type="text"
              details={details.first}
              onChange={onChange}
              id={"first"}
            />
            <FormInput
              name="Surname"
              type="text"
              details={details.last}
              onChange={onChange}
              id={"last"}
            />
          </div>
          <FormInput
            name="Role"
            type="text"
            details={details.role}
            onChange={onChange}
            id={"role"}
          />
          <label>
            About You
            <textarea
              rows="6"
              value={details.about}
              onChange={onChange}
              id={"about"}
              maxlength="400"
            />
          </label>
          <FormInput
            name="Number"
            type="tel"
            details={details.num}
            onChange={onChange}
            id={"num"}
          />
          <FormInput
            name="Email"
            type="email"
            details={details.email}
            onChange={onChange}
            id={"email"}
          />
          <FormInput
            name="Website"
            type="url"
            details={details.website}
            onChange={onChange}
            id={"website"}
          />
        </div>
      ) : null}
    </div>
  );
}

export default PersonalInput;
