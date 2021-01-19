import React from 'react';
import {
  Demo,
  ratingControlTester,
  RatingControl,
} from '../../../../components/common';
import { materialRenderers } from '@jsonforms/material-renderers';

const ratingData = {
  rating: 2,
};

const ratingSchema = {
  type: 'object',
  properties: {
    rating: {
      type: 'integer',
      minimum: 0,
      maximum: 5,
    },
  },
};

const ratingUiSchema = {
  type: 'Control',
  scope: '#/properties/rating',
};

export const Default = () => (
  <Demo data={ratingData} schema={ratingSchema} uischema={ratingUiSchema} />
);

export const WithCustomRenderer = () => (
  <Demo
    data={ratingData}
    schema={ratingSchema}
    uischema={ratingUiSchema}
    renderers={[
      ...materialRenderers,
      { tester: ratingControlTester, renderer: RatingControl },
    ]}
  />
);
