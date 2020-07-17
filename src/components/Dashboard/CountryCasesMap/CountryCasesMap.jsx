import React, { Component } from "react";
import { VectorMap } from "react-jvectormap";
import styles from "./CountryCasesMap.module.scss";
import { fetchCountries } from "../../../api";

class CountryCasesMap extends Component {
  state = {
    countries: [],
  };

  async componentDidMount() {
    const countries = await fetchCountries();
    this.setState({ countries });
  }

  render() {
    if (!this.state.countries) return "Loading...";
    else {
      const CasesData = this.state.countries.reduce((acc, country) => {
        acc[country.countryInfo.iso2] = country.cases;

        return acc;
      }, {});
      return (
        <div className="col-xs-12 col-lg-8 flex a-center jc-center">
          <h2 className={styles.title}>Cases By Country </h2>
          <div style={{ width: "100%", height: "500px" }}>
            {this.state.countries ? (
              <VectorMap
                map={"world_mill"}
                backgroundColor="transparent"
                ref="map"
                series={{
                  regions: [
                    {
                      values: CasesData,
                      scale: ["#88B2F8", "#4A00E0"],
                      normalizeFunction: "polynomial",
                    },
                  ],
                }}
                onRegionTipShow={(event, label, code) => {
                  let country_label = this.state.countries.find(
                    (country) => country.countryInfo.iso2 === code
                  );
                  if (!country_label)
                    return label.html(label.html() + ": Unknown");
                  label.html(
                    `<div class=${styles.country_labels}>
                        <div class="flex a-center jc-center ${styles.flag_wrapper}">
                          <img src=${country_label.countryInfo.flag} alt="flag" />
                        </div>
                        <p class=${styles.country_labels_name}> 
                        ${country_label.country}
                        </p>
                        <p class=${styles.country_labels_cases}>
                         Cases : ${country_label.cases}
                        </p>
                        <p class=${styles.country_labels_deaths}>
                        Deaths : ${country_label.deaths}
                       </p>
                       <p class=${styles.country_labels_recovered}>
                        Recovered : ${country_label.recovered}
                       </p>
                    </div>`
                  );
                }}
                containerStyle={{
                  width: "100%",
                  height: "100%",
                }}
                containerClassName="map"
              />
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      );
    }
  }
}

export default CountryCasesMap;
