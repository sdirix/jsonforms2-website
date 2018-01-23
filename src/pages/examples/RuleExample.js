import React from 'react';
import { rule } from '@jsonforms/examples';
import { DispatchRenderer, initJsonFormsStore } from '@jsonforms/core';
import { Provider } from 'react-redux';
import {Typography, withStyles} from "material-ui";
import commonStyles from "../../common/styles";
import Demo from "../../common/Demo";
import {RadiumHashLink} from "../../common";

const styles = () => ({
  display1: commonStyles.display1,
  link: commonStyles.link
});

const RuleExample = ({ classes }) => {

  const store = initJsonFormsStore({
    data: rule.data,
    schema: rule.schema,
    uischema: rule.uischema
  });

  return (
    <div>
      <Typography
        type={'display1'}
        className={classes.display1}
      >
        Rules
      </Typography>

      <p>
        This example uses a <RadiumHashLink to={'/docs/uischema/rules'} className={classes.link}>Rule</RadiumHashLink> to
        display an additional selection control if the 'Is Alive' checkbox is unchecked.
        If is is checked the control will be hidden. Give it a try!
      </p>

      <Provider store={store}>
        <Demo
          schema={rule.schema}
          uischema={rule.uischema}
          js={() =>
            <DispatchRenderer />
          }
        />
      </Provider>
    </div>
  );
};

export default withStyles(styles)(RuleExample);