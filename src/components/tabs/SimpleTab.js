import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SectionsTitle from "../common/SectionsTitle";

export default class SimpleTab extends Component {
  tabstate = {
    tabs: [
      {
        desc:
          "Terjaminnya penerbitan sertifikat yang kami berikan terhadap client tepat waktu",
      },
      {
        desc:
          "Auditor kami bersertifikat dari Kementerian Ketenega Kerjaan Republik Indonesia & berbagai institusi yang kompeten dibidangnya",
      },
      {
        desc:
          "Kami berusaha memberikan harga yang terbaik terhadap masing - masing client kami",
      },
    ],
  };

  tabsnav = {
    navs: [
      {
        title: "Waktu",
      },
      {
        title: "Auditor Ahli",
      },
      {
        title: "Harga",
      },
    ],
  };
  render() {
    return (
      <section className="tabs-wrapper">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <SectionsTitle
                title="Why Choose Us."
                subtitle="Our Best Features"
              />
            </div>
          </div>

          <div className="tabs-content-wrap">
            <Tabs>
              <TabList className="tabs-nav">
                {this.tabsnav.navs.map((item, index) => {
                  return <Tab key={index}>{item.title}</Tab>;
                })}
              </TabList>
              {this.tabstate.tabs.map((tab, index) => {
                return (
                  <TabPanel className="tabs-content" key={index}>
                    <div
                      className={"tabs-content-flex " + tab.img_position}
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <div className="tabs-right">
                        <p className="tabs-desc" style={{ marginTop: 40 }}>
                          {tab.desc}
                        </p>
                      </div>
                    </div>
                  </TabPanel>
                );
              })}
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}
