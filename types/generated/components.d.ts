import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedRating2 extends Schema.Component {
  collectionName: 'components_shared_rating2s';
  info: {
    displayName: 'Rating2';
  };
  attributes: {
    border: Attribute.Integer;
    text: Attribute.Text;
  };
}

export interface SharedRating extends Schema.Component {
  collectionName: 'components_shared_ratings';
  info: {
    displayName: 'Rating';
  };
  attributes: {
    low: Attribute.Text;
    medium: Attribute.Text;
    high: Attribute.Text;
  };
}

export interface SharedQuestion extends Schema.Component {
  collectionName: 'components_shared_questions';
  info: {
    displayName: 'Question';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subCategory: Attribute.String;
    value: Attribute.BigInteger;
  };
}

export interface FormScale extends Schema.Component {
  collectionName: 'components_form_scales';
  info: {
    displayName: 'scale';
    description: '';
  };
  attributes: {
    category: Attribute.String;
    title: Attribute.String;
    question: Attribute.Component<'shared.question', true>;
    rating: Attribute.Component<'shared.rating'>;
    rating2: Attribute.Component<'shared.rating2', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.rating2': SharedRating2;
      'shared.rating': SharedRating;
      'shared.question': SharedQuestion;
      'form.scale': FormScale;
    }
  }
}
