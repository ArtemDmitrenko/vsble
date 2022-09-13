import Input from "components/Input/Input";
import Dropdown from "components/Dropdown/Dropdown";
import Button from "components/Button/Button";

import "./multiple-filter.scss";

const dropdownExpertiseList = [
  { value: "any", label: "Any" },
  { value: "professional", label: "Professional" },
  { value: "upAndComing", label: "Up & Coming" },
];

function MultipleFilter({ list, onApply, onChange, onBlur }) {
  const {
    location,
    followersMin,
    followersMax,
    expertise,
    studio,
    postproduction,
    videography,
  } = list;

  function preventNonNumericalInput(e) {
    e = e || window.event;
    var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);
    if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
  }

  return (
    <div className="multiple-filter">
      <div className="multiple-filter__field">
        <Input
          placeholder="Where?"
          type="text"
          label="Location"
          name="location"
          value={location || ""}
          onChange={onChange}
        />
      </div>
      <div className="multiple-filter__field">
        <div className="multiple-filter__followers">
          <div className="multiple-filter__followers-limit">
            <Input
              placeholder="Min"
              value={followersMin || ""}
              type="number"
              label="Followers"
              name="followersMin"
              onChange={onChange}
              onBlur={onBlur.bind(this, "followersMin")}
              onKeyPress={preventNonNumericalInput}
            />
          </div>
          <span className="multiple-filter__line">-</span>
          <div className="multiple-filter__followers-limit">
            <Input
              value={followersMax || ""}
              placeholder="Max"
              type="number"
              name="followersMax"
              onChange={onChange}
              onBlur={onBlur.bind(this, "followersMax")}
              onKeyPress={preventNonNumericalInput}
            />
          </div>
        </div>
      </div>
      <div className="multiple-filter__field">
        <Dropdown
          placeholder="Any"
          list={dropdownExpertiseList}
          label="Expertise"
          name="expertise"
          value={expertise || ""}
          onChange={onChange}
          isSearchable={false}
        />
      </div>
      <div className="multiple-filter__field">
        <Dropdown
          placeholder="Any"
          list={dropdownExpertiseList}
          label="Studio"
          value={studio || ""}
          name="studio"
          onChange={onChange}
          isSearchable={false}
        />
      </div>
      <div className="multiple-filter__field">
        <Dropdown
          placeholder="Any"
          list={dropdownExpertiseList}
          value={postproduction || ""}
          label="Postproduction"
          name="postproduction"
          onChange={onChange}
          isSearchable={false}
        />
      </div>
      <div className="multiple-filter__field">
        <Dropdown
          placeholder="Any"
          list={dropdownExpertiseList}
          value={videography || ""}
          label="Videography"
          name="videography"
          onChange={onChange}
          isSearchable={false}
        />
      </div>
      <div className="multiple-filter__apply">
        <Button
          type="primary"
          text="Apply"
          btnType="text"
          size="big"
          onClick={onApply}
        />
      </div>
    </div>
  );
}

export default MultipleFilter;
