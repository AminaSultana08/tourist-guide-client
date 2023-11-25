import { useState } from "react";
import Title from "../../../../Component/Title/Title";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OurPackages from "./OurPackages/OurPackages";
import Overview from "./Overview/Overview";

const TravelGuide = () => {
    const [tabIndex , setTabIndex] = useState(0)
    return (
        <div className="mt-5 mb-10">
            <Title heading=' Our Travel guide' subHeading='Tourism &' ></Title>
            <div>
            <Tabs  defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className='flex justify-center ' >
              <Tab >Overview</Tab>
              <Tab>Our Packages</Tab>
              <Tab>Meet Our Tour Guides</Tab>
            </TabList>
            <TabPanel><Overview/> </TabPanel>
            <TabPanel>
            <OurPackages/>
            </TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
            </div>
        </div>
    );
};

export default TravelGuide;