import Nice from "../images/nice.jpg";
import Hot from "../images/hot.jpg";
import Cold from "../images/cold.jpg";

const Result = ({ result, city }) => {
  // get current date and do calculation
  const dateBuilder = () => {
    let months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    let dates = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let newDate = new Date();

    return `${dates[newDate.getDay() - 1]}, ${newDate.getDate()} ${
      months[newDate.getMonth()]
    } ${newDate.getFullYear()}`;
  };

  let cityIcon = [];

  const pictureEffect = () => {
    cityIcon = [];

    if (result.temp > 24) {
      cityIcon.push(<i className="bi bi-cloud-sun-fill" key={`cityIcon`}></i>);
      return Hot;
    } else if (result.temp < 4) {
      cityIcon.push(
        <i className="bi bi-cloud-sleet-fill" key={`cityIcon`}></i>
      );
      return Cold;
    }
    cityIcon.push(<i className="bi bi-cloud-haze2-fill" key={`cityIcon`}></i>);
    return Nice;
  };

  return (
    <div className="row justify-content-center" id="result">
      <div className="col-lg-5">
        <div className="card bg-secondary">
          <img src={pictureEffect()} className="card-img-top" alt="..." />

          <div className="card-body">
            <h3 className="card-title">
              {city} {cityIcon}
            </h3>
            <p className="lead">{dateBuilder()}</p>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-thermometer-half"></i>
              </span>
              <input
                className="form-control"
                type="text"
                value={`Temperature: ${result.temp} Celsius`}
                aria-label="Disabled input example"
                disabled
                readOnly
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-umbrella"></i>
              </span>
              <input
                className="form-control"
                type="text"
                value={`Feels like: ${result.feels_like} Celsius`}
                aria-label="Disabled input example"
                disabled
                readOnly
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-moisture"></i>
              </span>
              <input
                className="form-control"
                type="text"
                value={`Humidity: ${result.humidity} %`}
                aria-label="Disabled input example"
                disabled
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
