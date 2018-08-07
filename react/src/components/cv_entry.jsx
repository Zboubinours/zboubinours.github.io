import
React from 'react';

const CVEntry = ({
  begin,
  end,
  degree,
  university,
  location,
  description
}) => {
  const dateSep = end === ""
    ? ""
    : "–";

  return (
    < div class = "row" > <div class="col-2">{begin}{dateSep}{end}</div>
    <div class="col">
      <div class="row">
        <div class="col-4 cv-entry-degree">{degree}</div>
        <div class="col-3 cv-entry-location">{location}</div>
        <div class="w-100"></div>
        <div class="col-6 cv-entry-university">{university}</div>
        <div class="w-100"></div>
        <div class="col-6 cv-entry-description">{description}</div>
      </div>
    </div>
  </div>
  )
}

export default CVEntry
