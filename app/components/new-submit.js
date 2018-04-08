import Component from '@ember/component';

export default Component.extend({
  actions: {
    saveSubmit1() {
      var params = {
        contact: this.get('contact'),
        submitDate: this.get('submitDate'),
        performDates: this.get('performDates'),
        title: this.get('title'),
        music: this.get('music'),
        lyrics: this.get('lyrics'),
        book: this.get('book'),
        blurb: this.get('blurb'),
        image: this.get('image')
      };
      this.set('addNewSubmit', false);
      this.sendAction('saveSubmit2', params);
      console.log(params);
    }
  }
});
