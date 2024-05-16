import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import FeedbackForm from './FeedbackForm';
import SubmissionsTable from './SubmissionsTable';

const App = () => {
  return (
    <div>
      <Tabs defaultActiveKey="feedback" id="uncontrolled-tab-example">
        <Tab eventKey="feedback" title="Feedback Form">
          <FeedbackForm />
        </Tab>
        <Tab eventKey="submissions" title="Submissions">
          <SubmissionsTable />
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
