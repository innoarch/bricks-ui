var Radio = Ember.EasyForm.Checkbox.extend({
    init: function () {
        this._super.apply(this, arguments);
        this.set('templateName', this.get('wrapperConfig.radioTemplate'));
    }
});

export default
Radio;