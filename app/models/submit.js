import DS from 'ember-data';

export default DS.Model.extend({
  contact: DS.attr(),
  submitDate: DS.attr(),
  performDates: DS.attr(),
  title: DS.attr(),
  music: DS.attr(),
  lyrics: DS.attr(),
  book: DS.attr(),
  blurb: DS.attr(),
  image: DS.attr()
});
