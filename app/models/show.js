import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  music: DS.attr(),
  lyrics: DS.attr(),
  book: DS.attr(),
  blurb: DS.attr(),
  image: DS.attr()
});
