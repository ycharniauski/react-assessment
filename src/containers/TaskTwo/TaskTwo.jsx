import React from 'react';

import {
  Content,
  Heading,
  StyledList,
  Task
} from '@components/content';

import Demo from './Demo';

const TaskTwo = () => (
  <Task>
    <Heading>Task Two</Heading>
    <Demo />
    <Content>
      <h4>Complete the following task:</h4>
      <p>
        This is to assess your ability to design and build React components.
        Assume that you are part of a team starting a new project,
        a consistent design language has been set by the Design Team,
        i.e. fonts, labels, button and input styles etc. Below are
        designs for some components for you to build. With unit tests
        and without 3rd party modal packages, build the modals shown in
        these designs and have re-usability in mind as what you build
        might be re-usable in other parts of the application.
      </p>
      <p>
        {`Include unit tests. React Testing Library is already 
          configured for you in the skeleton project.`}
      </p>
      Expected:
      <StyledList type="1">
        <li>
          <strong>No </strong>
          backdrop/page overlay is required for this exercise.
        </li>
        <li>All modals should expose a mechanism to allow them to be closed.</li>
        <li>There should be a way to consume button click events on modals with buttons.</li>
        <li>Create a demo page with three buttons that trigger each of the modals to show.</li>
      </StyledList>
      <hr />
      <strong>
        Feel free to use this component as a demo page for your work.
      </strong>
    </Content>
  </Task>
);

export default TaskTwo;
