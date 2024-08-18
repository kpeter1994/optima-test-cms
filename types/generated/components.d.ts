import type { Schema, Attribute } from '@strapi/strapi';

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
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.rating': SharedRating;
      'shared.question': SharedQuestion;
      'form.scale': FormScale;
    }
  }
}
